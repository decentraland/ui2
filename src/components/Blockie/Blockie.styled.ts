import styled from "@emotion/styled"
import { Box } from "@mui/material"

const StyledCanvas = styled("canvas")<{
  scale: number
  size: number
}>((props) => {
const { scale, size } = props
return {
  borderRadius: 6,
  verticalAlign: "text-bottom",
  lineHeight: "0.5em",
  marginLeft: "0.1em",
  ...(scale * size <= 16 && { borderRadius: 1.5 }),
  ...(scale * size <= 24 && { borderRadius: 3 }),
  ...(scale * size <= 36 && { borderRadius: 4 }),
}})

const StyledBlockieChildrenWrapper = styled(Box)({
  marginLeft: "0.5em",
})

export { StyledBlockieChildrenWrapper, StyledCanvas }
