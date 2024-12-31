import styled from "@emotion/styled"
import { Badge as BadgeMui } from "@mui/material"

const Badge = styled(BadgeMui)({
  height: "48px",
  width: "48px",
  "& svg.MuiSvgIcon-root": {
    fontSize: "inherit",
  },
})

interface ImageContainerProps {
  backgroundColor?: string
}

const ImageContainer = styled("div")((props: ImageContainerProps) => {
  const { backgroundColor } = props
  return {
    borderRadius: "100%",
    height: "48px",
    width: "48px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(103, 99, 112, 0.4)",
    backgroundImage: backgroundColor && `radial-gradient(${backgroundColor})`,
    "& img": {
      width: "80%",
    },
  }
})

export { Badge, ImageContainer }
