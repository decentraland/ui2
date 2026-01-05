import styled from "@emotion/styled"
import { Badge as BadgeMui } from "@mui/material"

const Badge = styled(BadgeMui)<{ isImage: boolean }>(({ isImage }) => ({
  height: "48px",
  width: "48px",
  "& svg.MuiSvgIcon-root": {
    fontSize: isImage ? "24px" : "inherit",
  },
}))

interface ImageContainerProps {
  backgroundColor?: string
}

const ImageContainer = styled("div", {
  shouldForwardProp: (prop) => prop !== "backgroundColor",
})<ImageContainerProps>(({ backgroundColor }) => ({
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
}))

export { Badge, ImageContainer }
