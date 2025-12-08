import { Avatar } from "@dcl/schemas"

type SceneRowData = {
  name: string
  creator: Avatar
  location: string
}

type ScenesTableProps = {
  rows: SceneRowData[]
}

export type { SceneRowData, ScenesTableProps }
