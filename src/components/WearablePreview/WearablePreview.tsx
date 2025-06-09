import { useCallback, useEffect, useRef, useState } from "react"
import { BodyShape } from "@dcl/schemas"
import {
  EmoteWithBlobs,
  PreviewCamera,
  PreviewEmote,
  PreviewMessagePayload,
  PreviewMessageType,
  PreviewOptions,
  PreviewProjection,
  PreviewType,
  WearableWithBlobs,
  sendMessage,
} from "@dcl/schemas/dist/dapps/preview"
import equal from "deep-equal"
import { createController } from "./WearablePreview.controller"
import { config } from "../../config"
import { createDebounce } from "../../lib/debounce"
import { WearablePreviewContainer } from "./WearablePreview.styled"

const debounce = createDebounce()

type WearablePreviewProps = {
  mode?: "marketplace" | "profile" | "authentication" | "builder" | undefined
  id?: string
  contractAddress?: string
  tokenId?: string
  itemId?: string
  profile?: string
  urns?: string[]
  urls?: string[]
  base64s?: string[]
  blob?: WearableWithBlobs | EmoteWithBlobs
  skin?: string
  hair?: string
  eyes?: string
  emote?: PreviewEmote
  bodyShape?: BodyShape
  camera?: PreviewCamera
  projection?: PreviewProjection
  zoom?: number
  background?: string
  offsetX?: number
  offsetY?: number
  offsetZ?: number
  cameraX?: number
  cameraY?: number
  cameraZ?: number
  wheelZoom?: number
  wheelPrecision?: number
  wheelStart?: number
  disableBackground?: boolean
  disableAutoRotate?: boolean
  disableAutoCenter?: boolean
  disableFace?: boolean
  disableDefaultWearables?: boolean
  disableDefaultEmotes?: boolean
  disableFadeEffect?: boolean
  showSceneBoundaries?: boolean
  showThumbnailBoundaries?: boolean
  panning?: boolean
  lockAlpha?: boolean
  lockBeta?: boolean
  lockRadius?: boolean
  dev?: boolean
  baseUrl?: string
  peerUrl?: string
  nftServerUrl?: string
  type?: PreviewType
  onLoad?: () => void
  onError?: (error: Error) => void
  onUpdate?: (options: PreviewOptions) => void
}

const WearablePreview = (props: WearablePreviewProps) => {
  const {
    baseUrl = config.get("WEARABLE_PREVIEW_URL"),
    onLoad = () => {},
    onError = () => {},
    onUpdate = () => {},
    blob,
    tokenId,
    itemId,
  } = props

  const iframe = useRef<HTMLIFrameElement>(null)
  const [state, setState] = useState<{
    url?: string
    isReady: boolean
    pendingOptions: PreviewOptions | null
    lastOptions: PreviewOptions | null
  }>({
    isReady: false,
    pendingOptions: null,
    lastOptions: null,
  })

  const getUrl = useCallback(() => {
    const params = [
      typeof props.mode !== "undefined" && `mode=${props.mode}`,
      props.contractAddress && `contract=${props.contractAddress}`,
      props.tokenId && `token=${props.tokenId}`,
      props.itemId && `item=${props.itemId}`,
      props.profile && `profile=${props.profile}`,
      props.urns?.map((urn) => `urn=${urn}`).join("&"),
      props.urls?.map((url) => `url=${url}`).join("&"),
      props.base64s?.map((base64) => `base64=${base64}`).join("&"),
      props.skin && `skin=${props.skin}`,
      props.hair && `hair=${props.hair}`,
      props.eyes && `eyes=${props.eyes}`,
      props.bodyShape && `bodyShape=${props.bodyShape}`,
      props.emote && `emote=${props.emote}`,
      props.camera && `camera=${props.camera}`,
      props.projection && `projection=${props.projection}`,
      typeof props.zoom !== "undefined" && `zoom=${props.zoom}`,
      props.background && `background=${props.background}`,
      typeof props.offsetX !== "undefined" && `offsetX=${props.offsetX}`,
      typeof props.offsetY !== "undefined" && `offsetY=${props.offsetY}`,
      typeof props.offsetZ !== "undefined" && `offsetZ=${props.offsetZ}`,
      typeof props.cameraX !== "undefined" && `cameraX=${props.cameraX}`,
      typeof props.cameraY !== "undefined" && `cameraY=${props.cameraY}`,
      typeof props.cameraZ !== "undefined" && `cameraZ=${props.cameraZ}`,
      typeof props.wheelZoom !== "undefined" && `wheelZoom=${props.wheelZoom}`,
      typeof props.wheelPrecision !== "undefined" &&
        `wheelPrecision=${props.wheelPrecision}`,
      typeof props.wheelStart !== "undefined" &&
        `wheelStart=${props.wheelStart}`,
      props.disableBackground && "disableBackground",
      props.disableAutoRotate && "disableAutoRotate",
      props.disableAutoCenter && "disableAutoCenter",
      props.disableFace && "disableFace",
      props.disableDefaultWearables && "disableDefaultWearables",
      props.disableDefaultEmotes && "disableDefaultEmotes",
      props.disableFadeEffect && "disableFadeEffect",
      props.showSceneBoundaries && "showSceneBoundaries",
      props.showThumbnailBoundaries && "showThumbnailBoundaries",
      props.peerUrl && `peerUrl=${props.peerUrl}`,
      props.nftServerUrl && `nftServerUrl=${props.nftServerUrl}`,
      props.type && `type=${props.type}`,
      props.panning === false && "panning=false",
      props.lockAlpha && "lockAlpha=true",
      props.lockBeta && "lockBeta=true",
      props.lockRadius && "lockRadius=true",
    ].filter(Boolean)

    return `${baseUrl}?${params.join("&")}`
  }, [props, baseUrl])

  const getOptions = useCallback(() => {
    const options: PreviewOptions = {}
    // Copy all props except functions and dev flag
    Object.entries(props).forEach(([key, value]) => {
      if (key !== "dev" && typeof value !== "function") {
        options[key] = value
      }
    })
    return options
  }, [props])

  const sendUpdate = useCallback(
    (options: PreviewOptions) => {
      if (!iframe.current?.contentWindow) return

      if (!state.lastOptions || !equal(options, state.lastOptions)) {
        sendMessage(iframe.current.contentWindow, PreviewMessageType.UPDATE, {
          options,
        })
        onUpdate(options)
        setState((prev) => ({ ...prev, lastOptions: options }))
      }
    },
    [state.lastOptions, onUpdate]
  )

  const handleUpdate = useCallback(() => {
    if (!iframe.current) {
      console.warn("Could not send update, iframe is not referenced")
      return
    }

    const options = getOptions()
    if (state.isReady) {
      sendUpdate(options)
    } else {
      setState((prev) => ({ ...prev, pendingOptions: options }))
    }
  }, [state.isReady, getOptions, sendUpdate])

  const handleMessage = useCallback(
    (event: MessageEvent) => {
      if (event.origin !== baseUrl) return

      if (event.data?.type) {
        let errorPayload: PreviewMessagePayload<PreviewMessageType.ERROR>

        switch (event.data.type as PreviewMessageType) {
          case PreviewMessageType.LOAD:
            onLoad()
            break
          case PreviewMessageType.ERROR:
            errorPayload = event.data
              .payload as PreviewMessagePayload<PreviewMessageType.ERROR>
            onError(new Error(errorPayload.message))
            break
          case PreviewMessageType.READY:
            if (state.isReady) return

            if (state.pendingOptions) {
              sendUpdate(state.pendingOptions)
              setState((prev) => ({
                ...prev,
                isReady: true,
                pendingOptions: null,
              }))
            } else {
              setState((prev) => ({ ...prev, isReady: true }))
            }
            break
        }
      }
    },
    [baseUrl, onLoad, onError, state.isReady, state.pendingOptions, sendUpdate]
  )

  useEffect(() => {
    window.addEventListener("message", handleMessage, false)
    setState((prev) => ({ ...prev, url: getUrl() }))

    if (blob) {
      handleUpdate()
    }

    return () => {
      window.removeEventListener("message", handleMessage, false)
    }
  }, [handleMessage, getUrl, blob, handleUpdate])

  useEffect(() => {
    debounce(handleUpdate, 500)
  }, [handleUpdate])

  if (tokenId && itemId) {
    console.warn(
      "You should NOT use `tokenId` and `itemId` props simultaneously"
    )
  }

  return (
    <WearablePreviewContainer
      ref={iframe}
      id={props.id}
      src={state.url}
      allow="autoplay"
    />
  )
}

// Add static method for backwards compatibility with stories
WearablePreview.createController = createController

export { WearablePreview }
