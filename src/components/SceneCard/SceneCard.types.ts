import { ReactNode } from "react"
import { Avatar } from "@dcl/schemas"
import { JumpInTrackingData } from "../JumpIn/JumpIn.types"

type SceneCardHoverElement =
  | "leftBadge"
  | "rightBadge"
  | "avatar"
  | "location"
  | "jumpInButton"

interface SceneCardProps {
  image: string
  sceneName: string
  avatar?: Avatar
  coordinates?: string
  withShadow?: boolean
  borderColor?: string
  cornerBadge?: ReactNode
  leftBadge?: string | ReactNode
  rightBadge?: string | ReactNode
  showOnHover?: SceneCardHoverElement[]
  onJumpInTrack?: (data: JumpInTrackingData) => void
  onClick?: () => void
}

export type { SceneCardHoverElement, SceneCardProps }
