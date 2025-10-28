import styled from "@emotion/styled"
import { Button } from "../../Button"

const StyledEmoteControlsContainer = styled("div")({
  display: "flex",
  margin: "16px 0",
  padding: "0 24px",
  position: "absolute",
  bottom: 0,
  width: "100%",
})

const StyledPlayButton = styled(Button)({
  width: "56px",
  height: "44px",
  padding: 0,
  minWidth: "unset",
  marginRight: "16px",
  background: "rgba(0, 0, 0, 0.64) !important",
  "& svg": {
    marginLeft: "4px",
  },
})

const StyledSoundButton = styled(Button)<{ muted?: boolean }>(({ muted }) => ({
  marginLeft: "20px",
  minWidth: "25px",
  background: "none",
  padding: 0,
  opacity: muted ? 0.5 : 1,
}))

const StyledRangeInput = styled("input")({
  flex: 1,
  width: "100%",
  background: "none",
  WebkitAppearance: "none",
  "&:focus": {
    outline: "none",
  },
  "&::-webkit-slider-thumb": {
    WebkitAppearance: "none",
    width: "24px",
    height: "24px",
    borderRadius: "10px",
    backgroundColor: "#736e7d",
    overflow: "visible",
    cursor: "pointer",
    paddingBottom: "5px",
    marginTop: "-4px",
  },
  "&::-moz-range-thumb": {
    width: "24px",
    height: "24px",
    borderRadius: "20px",
    backgroundColor: "#736e7d",
    overflow: "visible",
    cursor: "pointer",
    border: "none",
  },
  "&::-ms-thumb": {
    width: "24px",
    height: "24px",
    borderRadius: "20px",
    backgroundColor: "#736e7d",
    overflow: "visible",
    cursor: "pointer",
  },
  "&::-webkit-slider-runnable-track": {
    width: "300px",
    height: "15px",
    background: "rgba(115, 110, 125, 0.32)",
    border: "none",
    borderRadius: "10px",
  },
  "&::-moz-range-track": {
    width: "100%",
    height: "15px",
    borderRadius: "10px",
    cursor: "pointer",
    background: "rgba(115, 110, 125, 0.32)",
  },
})

const StyledFrameControl = styled("div")({
  display: "flex",
  alignItems: "center",
})

const StyledFrameInput = styled("input")({
  width: "56px",
  height: "44px",
  borderRadius: "5px",
  background: "transparent",
  border: "1px solid rgba(115, 110, 125, 0.4)",
  color: "white",
  textAlign: "center",
  marginLeft: "16px",
  "&:focus-visible": {
    outline: "1px solid",
  },
})

export {
  StyledEmoteControlsContainer,
  StyledPlayButton,
  StyledSoundButton,
  StyledRangeInput,
  StyledFrameControl,
  StyledFrameInput,
}
