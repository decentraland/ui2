import { IPreviewController } from "@dcl/schemas"

export type TranslationControlsProps = {
  wearablePreviewId: string
  vertical?: boolean
  className?: string
  verticalPosition?: VerticalPosition
  wearablePreviewController?: IPreviewController
}

export enum VerticalPosition {
  LEFT = "left",
  RIGHT = "right",
}
