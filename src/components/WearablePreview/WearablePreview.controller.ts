/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  EmoteEvents,
  IPreviewController,
  PreviewMessagePayload,
  PreviewMessageType,
  sendMessage,
} from "@dcl/schemas/dist/dapps/preview"
import { SocialEmoteAnimation } from "@dcl/schemas/dist/dapps/preview/social-emote-animation"
import { Metrics } from "@dcl/schemas/dist/platform/item/metrics"
import { IFuture, default as future } from "fp-future"
import mitt, { Emitter } from "mitt"

const promises = new Map<string, IFuture<any>>()
const emoteEvents = new Map<MessageEventSource, Emitter<EmoteEvents>>()

// Track readiness per iframe contentWindow
const controllerReadyMap = new Map<MessageEventSource, boolean>()
const pendingMessagesBySource = new Map<MessageEventSource, MessageEvent[]>()

function isControllerReady(id: string): boolean {
  const iframe = document.getElementById(id) as HTMLIFrameElement
  if (!iframe || !iframe.contentWindow) {
    return false
  }
  return controllerReadyMap.get(iframe.contentWindow) ?? false
}

function processMessage(event: MessageEvent) {
  if (event.data && event.data.type) {
    try {
      switch (event.data.type as PreviewMessageType) {
        case PreviewMessageType.CONTROLLER_RESPONSE: {
          const payload = event.data
            .payload as PreviewMessagePayload<PreviewMessageType.CONTROLLER_RESPONSE>
          const { id } = payload
          const promise = promises.get(id)
          if (promise) {
            promises.delete(id)
            if (payload.ok) {
              promise.resolve(payload.result)
            } else if (payload.ok === false) {
              promise.reject(new Error(payload.error))
            }
          }
          break
        }
        case PreviewMessageType.EMOTE_EVENT: {
          const payload = event.data
            .payload as PreviewMessagePayload<PreviewMessageType.EMOTE_EVENT>
          const { type, payload: eventPayload } = payload
          const events = event.source ? emoteEvents.get(event.source) : null
          if (events && type) {
            events.emit(type, eventPayload)
          }
          break
        }
        case PreviewMessageType.LOAD: {
          if (event.source) {
            // Mark this iframe as ready
            controllerReadyMap.set(event.source, true)

            // Process any pending messages for this iframe
            const pendingMessages =
              pendingMessagesBySource.get(event.source) || []
            const messagesToProcess = pendingMessages.filter(
              (msg) => msg.data?.type !== PreviewMessageType.LOAD
            )
            messagesToProcess.forEach(processMessage)

            // Clear pending messages for this iframe
            pendingMessagesBySource.delete(event.source)
          }
          break
        }
        default:
        // nothing to do, invalid message
      }
    } catch (error) {
      console.error("Error processing WearablePreview message:", error)
    }
  }
}

const handleControllerMessage = (event: MessageEvent) => {
  // Always process LOAD messages to initialize the controller
  if (event.data?.type === PreviewMessageType.LOAD) {
    processMessage(event)
    return
  }

  // Check if this specific iframe is ready
  const isReady = event.source ? controllerReadyMap.get(event.source) : false

  // Queue messages if this iframe's controller is not ready
  if (!isReady && event.source) {
    const pending = pendingMessagesBySource.get(event.source) || []
    pending.push(event)
    pendingMessagesBySource.set(event.source, pending)
    return
  }

  // Process messages when controller is ready
  processMessage(event)
}

// Use addEventListener to allow multiple message listeners to coexist
if (typeof window !== "undefined") {
  window.addEventListener("message", handleControllerMessage, false)
}

let nonce = 0
function createSendRequest(id: string) {
  return function sendRequest<T>(
    namespace: "scene" | "emote",
    method:
      | "getScreenshot"
      | "getMetrics"
      | "getLength"
      | "changeZoom"
      | "panCamera"
      | "changeCameraPosition"
      | "cleanup"
      | "isPlaying"
      | "goTo"
      | "play"
      | "pause"
      | "stop"
      | "enableSound"
      | "disableSound"
      | "hasSound"
      | "setUsername"
      | "isSocialEmote"
      | "getSocialEmoteAnimations",
    params: any[]
  ) {
    const iframe = document.getElementById(id) as HTMLIFrameElement
    if (!iframe || !iframe.contentWindow) {
      const error = new Error("iframe not found or not accessible")
      return Promise.reject(error)
    }

    const messageId = id + "-" + nonce
    const promise = future<T>()
    promises.set(messageId, promise)
    const type = PreviewMessageType.CONTROLLER_REQUEST
    const message = { id: messageId, namespace, method, params }

    const timeout = setTimeout(() => {
      promises.delete(messageId)
      promise.reject(new Error(`Request timeout for ${method}`))
    }, 10000)

    const originalResolve = promise.resolve
    const originalReject = promise.reject
    promise.resolve = (value: T) => {
      clearTimeout(timeout)
      originalResolve(value)
    }
    promise.reject = (reason: any) => {
      clearTimeout(timeout)
      originalReject(reason)
    }

    try {
      sendMessage(iframe.contentWindow, type, message as any)
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error)
      promise.reject(new Error(`Failed to send message: ${errorMessage}`))
      promises.delete(messageId)
      clearTimeout(timeout)
    }

    nonce++
    return promise
  }
}

function createController(id: string): IPreviewController {
  const iframe = document.getElementById(id) as HTMLIFrameElement
  if (!iframe) {
    throw new Error(`Could not find an iframe with id="${id}"`)
  }

  // Don't reset global state - use per-iframe tracking instead
  // Only clean up promises as they're keyed by iframe id
  promises.clear()

  const events = iframe.contentWindow
    ? emoteEvents.get(iframe.contentWindow) ?? mitt<EmoteEvents>()
    : mitt<EmoteEvents>()
  if (iframe.contentWindow) {
    emoteEvents.set(iframe.contentWindow, events)
  }

  const sendRequest = createSendRequest(id)

  return {
    scene: {
      getScreenshot(width: number, height: number) {
        return sendRequest<string>("scene", "getScreenshot", [width, height])
      },
      getMetrics() {
        return sendRequest<Metrics>("scene", "getMetrics", [])
      },
      changeZoom: function (zoom) {
        return sendRequest("scene", "changeZoom", [zoom])
      },
      panCamera: function (offset) {
        return sendRequest("scene", "panCamera", [offset])
      },
      changeCameraPosition: function (position) {
        return sendRequest("scene", "changeCameraPosition", [position])
      },
      cleanup() {
        return sendRequest<void>("scene", "cleanup", [])
      },
      setUsername: function (username: string) {
        return sendRequest<void>("scene", "setUsername", [username])
      },
    },
    emote: {
      getLength() {
        return sendRequest<number>("emote", "getLength", [])
      },
      isPlaying() {
        return sendRequest<boolean>("emote", "isPlaying", [])
      },
      goTo(seconds: number) {
        return sendRequest<void>("emote", "goTo", [seconds])
      },
      play() {
        return sendRequest<void>("emote", "play", [])
      },
      pause() {
        return sendRequest<void>("emote", "pause", [])
      },
      stop() {
        return sendRequest<void>("emote", "stop", [])
      },
      enableSound() {
        return sendRequest<void>("emote", "enableSound", [])
      },
      disableSound() {
        return sendRequest<void>("emote", "disableSound", [])
      },
      hasSound() {
        return sendRequest<boolean>("emote", "hasSound", [])
      },
      isSocialEmote() {
        return sendRequest<boolean>("emote", "isSocialEmote", [])
      },
      getSocialEmoteAnimations() {
        return sendRequest<SocialEmoteAnimation[] | null>(
          "emote",
          "getSocialEmoteAnimations",
          []
        )
      },
      emote: null,
      events,
    },
  }
}

export { isControllerReady, createController }
