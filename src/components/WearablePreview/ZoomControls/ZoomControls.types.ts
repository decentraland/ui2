import { IPreviewControllerWithSocialEmotes } from "../WearablePreview.controller"

export type ZoomControlsProps = {
  wearablePreviewId: string
  className?: string
  position?: Position
  wearablePreviewController?: IPreviewControllerWithSocialEmotes
  zoomDelta?: number
}

export enum Position {
  LEFT = "left",
  RIGHT = "right",
}
