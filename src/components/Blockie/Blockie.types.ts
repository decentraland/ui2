type BlockieProps = {
  seed: string
  color?: string
  spotcolor?: string
  bgcolor?: string
  size?: number
  scale?: number
  className?: string
  children?: React.ReactNode
}

type CanvasStateStore = {
  canvas?: HTMLCanvasElement
}

export { BlockieProps, CanvasStateStore }
