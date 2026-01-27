import { JumpInTrackingData } from '../../../JumpIn/JumpIn.types'

type ActionRowProps = {
  positionChange?: number
  location: string
  onJumpInTrack?: (data: JumpInTrackingData) => void
}

export type { ActionRowProps }
