import type { Layer, TileMapProps } from "react-tile-map"

enum AtlasColor {
  OWNED = "#3D3A46",
  UNOWNED = "#09080A",
  PLAZA = "#70AC76",
  ROAD = "#716C7A",
  DISTRICT = "#5054D4",
  ODD = "#110E13",
  EVEN = "#0D0B0E",
}

enum AtlasTileType {
  OWNED = "owned",
  UNOWNED = "unowned",
  PLAZA = "plaza",
  ROAD = "road",
  DISTRICT = "district",
}

type AtlasTileProps = {
  id?: string
  x: number
  y: number
  updatedAt: number
  type: AtlasTileType
  top?: boolean
  left?: boolean
  topLeft?: boolean
  name?: string
  estateId?: string
  owner: string
  tokenId?: string
}

type AtlasProps = Omit<TileMapProps, "layers" | "className"> & {
  layers?: Layer[]
  tiles?: Record<string, AtlasTileProps>
  /** @deprecated */
  className?: string
}

type AtlasStateProps = Record<string, AtlasTileProps> | undefined

interface AtlasInterface extends AtlasProps {}

export {
  AtlasColor,
  AtlasInterface,
  AtlasProps,
  AtlasStateProps,
  AtlasTileProps,
  AtlasTileType,
}
