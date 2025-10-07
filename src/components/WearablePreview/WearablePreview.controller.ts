/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  EmoteEvents,
  IPreviewController,
  PreviewMessagePayload,
  PreviewMessageType,
  sendMessage,
} from "@dcl/schemas/dist/dapps/preview"
import { Metrics } from "@dcl/schemas/dist/platform/item/metrics"
import { IFuture, default as future } from "fp-future"
import mitt, { Emitter } from "mitt"

const promises = new Map<string, IFuture<any>>()
const emoteEvents = new Map<MessageEventSource, Emitter<EmoteEvents>>()

let isControllerReady = false
const pendingMessages: MessageEvent[] = []

function detectUnityReady(iframe: HTMLIFrameElement): boolean {
  try {
    if (!iframe.contentDocument || !iframe.contentWindow) {
      return false
    }

    const scripts = iframe.contentDocument.querySelectorAll("script")
    const hasUnityScripts = Array.from(scripts).some(
      (script) =>
        script.src &&
        (script.src.includes("aang-renderer") || script.src.includes("unity"))
    )

    const isDocumentReady = iframe.contentDocument.readyState === "complete"

    return hasUnityScripts && isDocumentReady
  } catch (error) {
    return false
  }
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
        case PreviewMessageType.READY: {
          isControllerReady = true
          const messagesToProcess = pendingMessages.filter(
            (msg) => msg.data?.type !== PreviewMessageType.READY
          )
          messagesToProcess.forEach(processMessage)
          pendingMessages.splice(0)
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

window.onmessage = function handleMessage(event: MessageEvent) {
  if (!isControllerReady) {
    pendingMessages.push(event)
    return
  }

  processMessage(event)
}

let nonce = 0

function waitForControllerReady(
  maxWaitTime: number = 15000,
  iframe?: HTMLIFrameElement
): Promise<void> {
  return new Promise((resolve) => {
    if (isControllerReady) {
      resolve()
      return
    }

    const startTime = Date.now()
    const checkInterval = setInterval(() => {
      if (isControllerReady) {
        clearInterval(checkInterval)
        resolve()
      } else if (Date.now() - startTime > maxWaitTime) {
        clearInterval(checkInterval)
        if (iframe && detectUnityReady(iframe)) {
          isControllerReady = true
          resolve()
        } else {
          isControllerReady = true
          resolve()
        }
      }
    }, 100)
  })
}

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
      | "setUsername",
    params: any[],
    options: { retries?: number; timeout?: number } = {}
  ) {
    const { retries = 2, timeout = 10000 } = options
    const iframe = document.getElementById(id) as HTMLIFrameElement
    if (!iframe || !iframe.contentWindow) {
      const error = new Error("iframe not found or not accessible")
      return Promise.reject(error)
    }

    const attemptRequest = (attemptNumber: number): Promise<T> => {
      return new Promise((resolve, reject) => {
        if (method === "setUsername" && attemptNumber === 1) {
          if (detectUnityReady(iframe)) {
            isControllerReady = true
          }
        }

        waitForControllerReady(method === "setUsername" ? 3000 : 5000, iframe)
          .then(() => {
            const messageId = id + "-" + nonce + "-" + attemptNumber
            const promise = future<T>()
            promises.set(messageId, promise)
            const type = PreviewMessageType.CONTROLLER_REQUEST
            const message = { id: messageId, namespace, method, params }

            const timeoutId = setTimeout(() => {
              promises.delete(messageId)
              promise.reject(
                new Error(
                  `Request timeout for ${method} (attempt ${attemptNumber})`
                )
              )
            }, timeout)

            const originalResolve = promise.resolve
            const originalReject = promise.reject
            promise.resolve = (value: T) => {
              clearTimeout(timeoutId)
              originalResolve(value)
            }
            promise.reject = (reason: any) => {
              clearTimeout(timeoutId)
              originalReject(reason)
            }

            try {
              sendMessage(iframe.contentWindow!, type, message)
              promise.then(resolve).catch(reject)
            } catch (error) {
              const errorMessage =
                error instanceof Error ? error.message : String(error)
              promise.reject(
                new Error(`Failed to send message: ${errorMessage}`)
              )
              promises.delete(messageId)
              clearTimeout(timeoutId)
              reject(new Error(`Failed to send message: ${errorMessage}`))
            }
          })
          .catch((error) => {
            reject(error)
          })
      })
    }

    const executeWithRetries = async (): Promise<T> => {
      let lastError: Error | null = null

      for (let attempt = 1; attempt <= retries + 1; attempt++) {
        try {
          return await attemptRequest(attempt)
        } catch (error) {
          lastError = error instanceof Error ? error : new Error(String(error))

          if (attempt <= retries) {
            await new Promise((resolve) => setTimeout(resolve, 1000 * attempt))
          }
        }
      }

      throw (
        lastError ||
        new Error(`All ${retries + 1} attempts failed for ${method}`)
      )
    }

    nonce++
    return executeWithRetries()
  }
}

export function createController(id: string): IPreviewController {
  const iframe = document.getElementById(id) as HTMLIFrameElement
  if (!iframe) {
    throw new Error(`Could not find an iframe with id="${id}"`)
  }

  isControllerReady = false
  pendingMessages.splice(0)
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
        return sendRequest<void>("scene", "setUsername", [username], {
          retries: 3,
          timeout: 15000,
        })
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
      events,
    },
  }
}
