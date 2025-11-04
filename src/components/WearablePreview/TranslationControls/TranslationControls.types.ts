import { IPreviewControllerWithSocialEmotes } from "../WearablePreview.controller"

enum HorizontalPosition {
  TOP = "top",
  BOTTOM = "bottom",
  CENTER = "center",
}

enum VerticalPosition {
  LEFT = "left",
  RIGHT = "right",
}

type TranslationControlsProps = {
  wearablePreviewId: string
  vertical?: boolean
  className?: string
  horizontalPosition?: HorizontalPosition
  verticalPosition?: VerticalPosition
  wearablePreviewController?: IPreviewControllerWithSocialEmotes
}

export { HorizontalPosition, VerticalPosition, TranslationControlsProps }
