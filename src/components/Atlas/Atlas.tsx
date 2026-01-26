import React, { useCallback, useEffect, useMemo, useState } from "react"
import type { Layer, TileMapProps } from "react-tile-map"
import { getColorByType, getTiles } from "./util"
import {
  createDynamicImport,
  createLazyComponent,
} from "../../utils/optionalDependency"
import { AtlasColor, AtlasProps, AtlasStateProps } from "./Atlas.types"

const importTileMap =
  createDynamicImport<typeof import("react-tile-map")>("react-tile-map")
const importTileMapStyles = createDynamicImport("react-tile-map/lib/styles.css")

const LazyTileMap = createLazyComponent<TileMapProps>(
  {
    packageName: "react-tile-map",
    componentName: "Atlas",
  },
  () => importTileMap().then((mod) => ({ default: mod.TileMap }))
)

const Atlas = React.memo((props: AtlasProps) => {
  const { layers } = props

  const [tiles, setTiles] = useState<AtlasStateProps>(props.tiles)
  const mountedRef = React.useRef(true)

  const layer: Layer = useCallback(
    (x: number, y: number) => {
      const id = x + "," + y
      if (tiles && id in tiles) {
        const tile = tiles[id]
        return {
          color: getColorByType(tile.type),
          top: tile.top,
          left: tile.left,
          topLeft: tile.topLeft,
        }
      } else {
        return {
          color: (x + y) % 2 === 0 ? AtlasColor.ODD : AtlasColor.EVEN,
        }
      }
    },
    [tiles]
  )

  useEffect(() => {
    importTileMapStyles().catch(() => {
      // Keep silent if the optional dependency is not installed; LazyTileMap will warn when rendered.
      return
    })

    if (!tiles) {
      getTiles().then(handleUpdateTiles)
    }

    return () => {
      mountedRef.current = false
    }
  }, [tiles])

  useEffect(() => {
    if (props.tiles && props.tiles !== tiles) {
      setTiles(props.tiles)
    }
  }, [props.tiles])

  const handleUpdateTiles = (updatedTiles: AtlasStateProps): void => {
    if (mountedRef.current) {
      setTiles(updatedTiles)
    }
  }
  /* 
  Review this CSS
  const atlasStyle = css({
    background: neutral.softBlack1,
  }) */

  const layersMemo = useMemo(() => [layer, ...(layers || [])], [layer, layers])

  return <LazyTileMap {...(props as TileMapProps)} layers={layersMemo} />
})

export { Atlas }
