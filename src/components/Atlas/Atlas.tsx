import React, { useCallback, useEffect, useMemo, useState } from "react"

import { Coord, Layer, TileMap, TileMapProps } from "react-tile-map"

/* import { css } from "@emotion/react" */

import { getColorByType, getTiles } from "./util"
/* import { neutral } from "../../colors" */

import "react-tile-map/dist/styles.css"

export enum AtlasColor {
  OWNED = "#3D3A46",
  UNOWNED = "#09080A",
  PLAZA = "#70AC76",
  ROAD = "#716C7A",
  DISTRICT = "#5054D4",
  ODD = "#110E13",
  EVEN = "#0D0B0E",
}

export enum AtlasTileType {
  OWNED = "owned",
  UNOWNED = "unowned",
  PLAZA = "plaza",
  ROAD = "road",
  DISTRICT = "district",
}

export type AtlasTileProps = {
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

export { Layer, Coord }

export type AtlasProps = Omit<TileMapProps, "layers" | "className"> & {
  layers?: Layer[]
  tiles?: Record<string, AtlasTileProps>
  /** @deprecated */
  className?: string
}

export type AtlasStateProps = Record<string, AtlasTileProps> | undefined

export interface AtlasInterface extends AtlasProps {}

export const Atlas = React.memo(function Atlas(props: AtlasProps) {
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

  return (
    <TileMap
      {...TileMap.defaultProps}
      {...props}
      /* Review this CSS */
      /* css={atlasStyle} */
      layers={layersMemo}
    />
  )
})
