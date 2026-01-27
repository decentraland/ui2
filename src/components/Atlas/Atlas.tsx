import React, { useCallback, useEffect, useMemo, useState } from "react"
import type { Layer, TileMapProps } from "react-tile-map"
import CircularProgress from "@mui/material/CircularProgress"
import { getColorByType, getTiles } from "./util"
import {
  createDynamicImport,
  createLazyComponent,
} from "../../utils/optionalDependency"
import { AtlasColor, AtlasProps, AtlasStateProps } from "./Atlas.types"

const importTileMap =
  createDynamicImport<typeof import("react-tile-map")>("react-tile-map")
const importTileMapStyles = createDynamicImport("react-tile-map/lib/styles.css")

const Atlas = React.memo((props: AtlasProps) => {
  const { layers } = props
  const atlasFallback = useMemo(
    () => <CircularProgress size={24} color="inherit" />,
    []
  )
  const LazyTileMap = useMemo(
    () =>
      createLazyComponent<TileMapProps>(
        {
          packageName: "react-tile-map",
          componentName: "Atlas",
        },
        () => importTileMap().then((mod) => ({ default: mod.TileMap })),
        atlasFallback
      ),
    [atlasFallback]
  )

  const [tiles, setTiles] = useState<AtlasStateProps>(props.tiles)
  const resolvedTiles = props.tiles ?? tiles

  const layer: Layer = useCallback(
    (x: number, y: number) => {
      const id = x + "," + y
      if (resolvedTiles && id in resolvedTiles) {
        const tile = resolvedTiles[id]
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
    [resolvedTiles]
  )

  useEffect(() => {
    let cancelled = false

    importTileMapStyles().catch(() => {
      // Keep silent if the optional dependency is not installed; LazyTileMap will warn when rendered.
      return
    })

    if (!props.tiles && !tiles) {
      getTiles().then((updatedTiles) => {
        if (cancelled) {
          return
        }
        setTiles(updatedTiles)
      })
    }

    return () => {
      cancelled = true
    }
  }, [props.tiles, tiles])

  useEffect(() => {
    if (props.tiles && props.tiles !== tiles) {
      setTiles(props.tiles)
    }
  }, [props.tiles, tiles])
  /* 
  Review this CSS
  const atlasStyle = css({
    background: neutral.softBlack1,
  }) */

  const layersMemo = useMemo(() => [layer, ...(layers || [])], [layer, layers])

  if (!resolvedTiles) {
    return atlasFallback
  }

  return <LazyTileMap {...(props as TileMapProps)} layers={layersMemo} />
})

export { Atlas }
