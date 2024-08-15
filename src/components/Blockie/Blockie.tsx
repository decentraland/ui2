import React, { useCallback, useEffect, useRef } from "react"
import Box from "@mui/material/Box"
import * as blockies from "ethereum-blockies/blockies"
import { BlockieProps } from "./Blockie.types"
import { StyledBlockieChildrenWrapper, StyledCanvas } from "./Blockie.styled"

const Blockie = React.memo((props: BlockieProps) => {
  const {
    seed,
    color = "#e449c2",
    spotcolor = "#e449c2",
    bgcolor = "#3149de",
    size = 6,
    scale = 6,
    children,
  } = props
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const getOpts = useCallback(
    (): Omit<BlockieProps, "children"> => ({
      seed: seed ? seed.toLowerCase() : "",
      color,
      spotcolor,
      bgcolor,
      size,
      scale,
    }),
    [seed, color, spotcolor, bgcolor, size, scale]
  )

  const draw = useCallback((): void => {
    if (!canvasRef || !canvasRef.current) return

    const ctx = canvasRef.current.getContext("2d")
    if (ctx) {
      ctx.clearRect(0, 0, size * scale, size * scale)
      blockies.render(getOpts(), canvasRef.current)
    }
  }, [getOpts, size, scale])

  useEffect(() => {
    draw()
  }, [draw])

  const canvas = <StyledCanvas scale={scale} size={size} ref={canvasRef} />

  return children ? (
    <Box component="span">
      {canvas}
      <StyledBlockieChildrenWrapper component="span">
        {children}
      </StyledBlockieChildrenWrapper>
    </Box>
  ) : (
    canvas
  )
})

export { Blockie }
