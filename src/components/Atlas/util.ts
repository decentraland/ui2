import { memo } from "radash"
import { AtlasColor, AtlasTileProps, AtlasTileType } from "./Atlas.types"

const TILES_URL = "https://api.decentraland.org/v2/tiles"

const getTiles = memo(
  async (): Promise<Record<string, AtlasTileProps>> => {
    try {
      const tilesFetch = await fetch(TILES_URL)
      const tilesJson: {
        ok: boolean
        data: Record<string, AtlasTileProps>
        error: string
      } = await tilesFetch.json()

      return tilesJson.data as Record<string, AtlasTileProps>
    } catch (error) {
      return {}
    }
  },
  { ttl: 10 * 60 * 1000 } // 10 minutes
)

const getColorByType = (type: AtlasTileType) => {
  switch (type) {
    case AtlasTileType.OWNED:
      return AtlasColor.OWNED
    case AtlasTileType.UNOWNED:
      return AtlasColor.UNOWNED
    case AtlasTileType.PLAZA:
      return AtlasColor.PLAZA
    case AtlasTileType.ROAD:
      return AtlasColor.ROAD
    case AtlasTileType.DISTRICT:
      return AtlasColor.DISTRICT
  }
}

export { getTiles, getColorByType }
