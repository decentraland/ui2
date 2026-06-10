import { IPreviewController } from '@dcl/schemas'

export type ZoomControlsProps = {
  wearablePreviewId: string
  className?: string
  position?: Position
  wearablePreviewController?: IPreviewController
  zoomDelta?: number
}

export enum Position {
  LEFT = 'left',
  RIGHT = 'right'
}
