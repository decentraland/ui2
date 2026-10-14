import { memo } from 'radash'
import { AtlasColor, AtlasTileProps, AtlasTileType } from './Atlas.types'

const TILES_URL = 'https://api.decentraland.org/v2/tiles'

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

const getColorByType = (type: AtlasTileType, owner?: string) => {
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
      return owner ? AtlasColor.OWNED : AtlasColor.UNOWNED
  }
}

const coordsToId = (x: number, y: number) => x + ',' + y

const isSameEstate = (tile: AtlasTileProps, other?: AtlasTileProps) => !!tile.estateId && !!other && other.estateId === tile.estateId

// Districts are drawn as the LAND they are, with borders recomputed per estate
// instead of tracing the district outline.
// See DAO proposal 9ee1965f-6a96-45f9-bb20-f60baa13607f.
const getTileLayer = (tile: AtlasTileProps, tiles: Record<string, AtlasTileProps>) => {
  if (tile.type !== AtlasTileType.DISTRICT) {
    return {
      color: getColorByType(tile.type),
      top: tile.top,
      left: tile.left,
      topLeft: tile.topLeft
    }
  }

  return {
    color: getColorByType(tile.type, tile.owner),
    top: isSameEstate(tile, tiles[coordsToId(tile.x, tile.y + 1)]),
    left: isSameEstate(tile, tiles[coordsToId(tile.x - 1, tile.y)]),
    topLeft: isSameEstate(tile, tiles[coordsToId(tile.x - 1, tile.y + 1)])
  }
}

export { getTiles, getColorByType, getTileLayer }
