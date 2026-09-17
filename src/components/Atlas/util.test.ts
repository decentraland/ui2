import { getColorByType, getTileLayer } from './util'
import { AtlasColor, AtlasTileProps, AtlasTileType } from './Atlas.types'

const buildTile = (tile: Partial<AtlasTileProps> = {}): AtlasTileProps => ({
  x: 0,
  y: 0,
  updatedAt: 0,
  type: AtlasTileType.OWNED,
  owner: '0xowner',
  ...tile
})

const buildTiles = (tiles: AtlasTileProps[]): Record<string, AtlasTileProps> =>
  tiles.reduce<Record<string, AtlasTileProps>>((acc, tile) => {
    acc[tile.x + ',' + tile.y] = tile
    return acc
  }, {})

describe('getColorByType', () => {
  it('should paint an owned tile with the owned color', () => {
    expect(getColorByType(AtlasTileType.OWNED)).toBe(AtlasColor.OWNED)
  })

  it('should paint an unowned tile with the unowned color', () => {
    expect(getColorByType(AtlasTileType.UNOWNED)).toBe(AtlasColor.UNOWNED)
  })

  it('should keep plazas and roads with their own colors', () => {
    expect(getColorByType(AtlasTileType.PLAZA)).toBe(AtlasColor.PLAZA)
    expect(getColorByType(AtlasTileType.ROAD)).toBe(AtlasColor.ROAD)
  })

  it('should paint a district tile as the LAND it is instead of demarcating it', () => {
    expect(getColorByType(AtlasTileType.DISTRICT, '0xowner')).toBe(AtlasColor.OWNED)
    expect(getColorByType(AtlasTileType.DISTRICT)).toBe(AtlasColor.UNOWNED)
  })
})

describe('getTileLayer', () => {
  describe('when the tile is not a district', () => {
    it('should keep the borders reported by the API', () => {
      const tile = buildTile({ top: true, left: false, topLeft: true })

      expect(getTileLayer(tile, buildTiles([tile]))).toEqual({
        color: AtlasColor.OWNED,
        top: true,
        left: false,
        topLeft: true
      })
    })
  })

  describe('when the tile is a district', () => {
    it('should stitch it to the neighbours that belong to its estate', () => {
      const tile = buildTile({
        x: 0,
        y: 0,
        type: AtlasTileType.DISTRICT,
        estateId: '1',
        top: true,
        left: true,
        topLeft: true
      })
      const top = buildTile({ x: 0, y: 1, type: AtlasTileType.DISTRICT, estateId: '1' })
      const left = buildTile({ x: -1, y: 0, type: AtlasTileType.DISTRICT, estateId: '2' })

      expect(getTileLayer(tile, buildTiles([tile, top, left]))).toEqual({
        color: AtlasColor.OWNED,
        top: true,
        left: false,
        topLeft: false
      })
    })

    it('should not stitch a district parcel that does not belong to an estate', () => {
      const tile = buildTile({
        type: AtlasTileType.DISTRICT,
        top: true,
        left: true,
        topLeft: true
      })
      const top = buildTile({ x: 0, y: 1, type: AtlasTileType.DISTRICT })

      expect(getTileLayer(tile, buildTiles([tile, top]))).toEqual({
        color: AtlasColor.OWNED,
        top: false,
        left: false,
        topLeft: false
      })
    })
  })
})
