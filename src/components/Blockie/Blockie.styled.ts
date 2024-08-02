import styled from "@emotion/styled"

const StyledCanvas = styled("canvas")<{
  scale: number
  size: number
}>(({ scale, size }) => ({
  borderRadius: 6,
  verticalAlign: "text-bottom",
  lineHeight: "0.5em",
  marginLeft: "0.1em",
  ...(scale * size <= 16 && { borderRadius: 1.5 }),
  ...(scale * size <= 24 && { borderRadius: 3 }),
  ...(scale * size <= 36 && { borderRadius: 4 }),
}))

const StyledBlockieWrapper = styled("span")({
  ".dcl.blockie-children": {
    marginLeft: "0.5em",
  },
})

export { StyledCanvas, StyledBlockieWrapper }
