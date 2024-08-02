import React, { useCallback, useEffect, useRef } from "react"
import * as blockies from "ethereum-blockies/blockies"
import { BlockieProps } from "./Blockie.types"
import { StyledBlockieWrapper, StyledCanvas } from "./Blockie.styled"

const Blockie = React.memo((props: BlockieProps) => {
  const {
    seed,
    color = "#e449c2",
    spotcolor = "#e449c2",
    bgcolor = "#3149de",
    size = 6,
    scale = 6,
    className = "",
    children,
  } = props
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const getOpts = useCallback(
    (): Omit<BlockieProps, "className" | "children"> => ({
      seed: seed ? seed.toLowerCase() : "",
      color,
      spotcolor,
      bgcolor,
      size,
      scale,
    }),
    [seed, color, spotcolor, bgcolor, size, scale]
  )

  const draw = useCallback(() => {
    if (!canvasRef || !canvasRef.current) return "🦄"

    const ctx = canvasRef.current.getContext("2d")
    if (ctx) {
      ctx.clearRect(0, 0, size * scale, size * scale)
      blockies.render(getOpts(), canvasRef.current)
    }
  }, [getOpts, size, scale])

  useEffect(() => {
    draw()
  }, [draw])

  const canvas = (
    <StyledCanvas
      className={`dcl blockie ${className}`}
      scale={scale}
      size={size}
      ref={canvasRef}
    />
  )

  return children ? (
    <StyledBlockieWrapper>
      {canvas}
      <span className="dcl blockie-children">{children}</span>
    </StyledBlockieWrapper>
  ) : (
    canvas
  )
})

export { Blockie }
