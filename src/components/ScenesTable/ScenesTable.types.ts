import { Avatar } from "@dcl/schemas"

type SceneRowData = {
  sceneName: string
  creator: Avatar
  location: string
  thumbnail: string
}

type ScenesTableProps = {
  rows: SceneRowData[]
}

export type { SceneRowData, ScenesTableProps }
