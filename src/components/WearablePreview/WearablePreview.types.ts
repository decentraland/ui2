import { BodyShape } from "@dcl/schemas"
import {
  EmoteWithBlobs,
  PreviewCamera,
  PreviewEmote,
  PreviewOptions,
  PreviewProjection,
  PreviewType,
  PreviewUnityMode,
  WearableWithBlobs,
} from "@dcl/schemas/dist/dapps/preview"
import { SocialEmoteAnimation } from "@dcl/schemas/dist/dapps/preview/social-emote-animation"

type WearablePreviewProps = {
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
  unityMode?: PreviewUnityMode
  unity?: boolean
  socialEmote?: SocialEmoteAnimation
  onLoad?: (renderer?: string) => void
  onError?: (error: Error) => void
  onUpdate?: (options: PreviewOptions) => void
}

type WearablePreviewState = {
  url?: string
  isReady: boolean
  pendingOptions: PreviewOptions | null
}

export type { WearablePreviewProps, WearablePreviewState }
