import { memo, useEffect, useRef } from 'react'
import { FRAGMENT_SHADER, VERTEX_SHADER } from './AnimatedBackground.shaders'
import { createProgram, createShader, darkenRgb, hexToRgb, loadTexture } from './AnimatedBackground.utils'
import overlayTextureUrl from '../../Assets/logo-pattern.png'
import { AnimatedBackgroundProps } from './AnimatedBackground.types'
import { Canvas, Fallback, Wrapper } from './AnimatedBackground.styled'

const DEFAULT_INNER_COLOR: [number, number, number] = [0.749, 0.0, 1.0]
const DEFAULT_OUTER_COLOR: [number, number, number] = [0.3176, 0.0235, 0.5176]

const AnimatedBackground = memo(({ variant = 'fixed', color, patternUrl }: AnimatedBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animFrameRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext('webgl', { alpha: false, antialias: false })
    if (!gl) {
      console.error('WebGL not supported')
      return
    }

    const vs = createShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER)
    const fs = createShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER)
    if (!vs || !fs) return

    const program = createProgram(gl, vs, fs)
    if (!program) return

    const positionLoc = gl.getAttribLocation(program, 'a_position')
    const timeLoc = gl.getUniformLocation(program, 'u_time')
    const resolutionLoc = gl.getUniformLocation(program, 'u_resolution')
    const overlayTexLoc = gl.getUniformLocation(program, 'u_overlayTex')
    const innerColorLoc = gl.getUniformLocation(program, 'u_innerColor')
    const outerColorLoc = gl.getUniformLocation(program, 'u_outerColor')

    const innerColor = color ? hexToRgb(color) : DEFAULT_INNER_COLOR
    const outerColor = color ? darkenRgb(innerColor, 0.42) : DEFAULT_OUTER_COLOR

    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW)

    const overlayTexture = loadTexture(gl, patternUrl ?? overlayTextureUrl)

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      const w = canvas.clientWidth * dpr
      const h = canvas.clientHeight * dpr
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w
        canvas.height = h
      }
    }

    const startTime = performance.now() / 1000

    const render = () => {
      resize()
      gl.viewport(0, 0, canvas.width, canvas.height)

      gl.useProgram(program)

      gl.uniform1f(timeLoc, performance.now() / 1000 - startTime)
      gl.uniform2f(resolutionLoc, canvas.width, canvas.height)
      gl.uniform4f(innerColorLoc, innerColor[0], innerColor[1], innerColor[2], 1.0)
      gl.uniform4f(outerColorLoc, outerColor[0], outerColor[1], outerColor[2], 1.0)

      gl.activeTexture(gl.TEXTURE0)
      gl.bindTexture(gl.TEXTURE_2D, overlayTexture)
      gl.uniform1i(overlayTexLoc, 0)

      gl.enableVertexAttribArray(positionLoc)
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
      gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0)

      gl.drawArrays(gl.TRIANGLES, 0, 6)

      animFrameRef.current = requestAnimationFrame(render)
    }

    animFrameRef.current = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animFrameRef.current)
      gl.deleteProgram(program)
      gl.deleteShader(vs)
      gl.deleteShader(fs)
      gl.deleteBuffer(buffer)
      gl.deleteTexture(overlayTexture)
    }
  }, [color, patternUrl])

  return (
    <Wrapper variant={variant}>
      <Fallback variant={variant} aria-hidden />
      <Canvas ref={canvasRef} />
    </Wrapper>
  )
})

export { AnimatedBackground }
