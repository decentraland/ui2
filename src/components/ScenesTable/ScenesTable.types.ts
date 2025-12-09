import { Avatar } from "@dcl/schemas"

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
}

export type { SceneRowData, ScenesTableProps }
