import { ReactNode } from "react"
import { Avatar } from "@dcl/schemas"

export interface SceneCardProps {
  image: string
  sceneName: string
  avatar?: Avatar
  coordinates: string
  withShadow?: boolean
  leftBadge?: string | ReactNode
  rightBadge?: string | ReactNode
}
