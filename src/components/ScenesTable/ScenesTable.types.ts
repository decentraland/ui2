import { Avatar } from '@dcl/schemas'
import { JumpInTrackingData } from '../JumpIn/JumpIn.types'

type SceneRowData = {
  key: string
  sceneName: string
  creator: Avatar
  location: string
  thumbnail: string
  positionChange?: number
  borderColor?: string
}

type ScenesTableProps = {
  rows: SceneRowData[]
  headerVisible?: boolean
  onMobileRowClick?: (row: SceneRowData, index: number) => void
  onJumpInTrack?: (data: JumpInTrackingData, row: SceneRowData) => void
}

export type { SceneRowData, ScenesTableProps }
