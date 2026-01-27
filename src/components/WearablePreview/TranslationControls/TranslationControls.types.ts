import { IPreviewController } from '@dcl/schemas'

enum HorizontalPosition {
  TOP = 'top',
  BOTTOM = 'bottom',
  CENTER = 'center'
}

enum VerticalPosition {
  LEFT = 'left',
  RIGHT = 'right'
}

type TranslationControlsProps = {
  wearablePreviewId: string
  vertical?: boolean
  className?: string
  horizontalPosition?: HorizontalPosition
  verticalPosition?: VerticalPosition
  wearablePreviewController?: IPreviewController
}

export { HorizontalPosition, VerticalPosition, TranslationControlsProps }
