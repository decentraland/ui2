import styled from "@emotion/styled"
import { Button } from "../../Button"
import { Position } from "./ZoomControls.types"

const StyledZoomControlsContainer = styled("div")<{
  position: Position
}>(({ position }) => ({
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: "12px",
  ...(position === Position.LEFT ? { left: "12px" } : { right: "12px" }),
}))

const StyledZoomButton = styled(Button)({
  width: "32px",
  height: "32px",
  minWidth: "unset",
  padding: 0,
  backgroundColor: "rgba(0, 0, 0, 0.64) !important",
  borderRadius: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "&:hover": {
    transform: "none",
  },
  "& i.icon": {
    margin: "0 !important",
  },
})

export { StyledZoomControlsContainer, StyledZoomButton }
