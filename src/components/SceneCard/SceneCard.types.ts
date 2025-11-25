import { ReactNode } from "react"
import { Avatar } from "@dcl/schemas"

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
  coordinates: string
  withShadow?: boolean
  leftBadge?: string | ReactNode
  rightBadge?: string | ReactNode
  showOnHover?: SceneCardHoverElement[]
}

export type { SceneCardHoverElement, SceneCardProps }
