import styled from "@emotion/styled"
import { VerticalPosition } from "./TranslationControls.types"

const StyledTranslationControlsContainer = styled("div")({
  position: "relative",
})

const StyledVerticalSliderContainer = styled("div")<{
  verticalPosition: VerticalPosition
}>(({ verticalPosition }) => ({
  position: "absolute",
  transform: "rotate(-90deg)",
  top: "181px",
  width: "280px",
  display: "flex",
  flexDirection: "row-reverse",
  ...(verticalPosition === VerticalPosition.RIGHT
    ? { right: "-105px" }
    : { left: "-105px" }),
}))

const StyledIconWrapper = styled("div")({
  marginTop: "-6px",
  marginLeft: "12px",
  display: "flex",
  alignItems: "center",
  color: "#736e7d",
})

const StyledRangeInput = styled("input")({
  width: "229px",
  background: "none",
  WebkitAppearance: "none",
  "&:focus": {
    outline: "none",
  },
  "&::-webkit-slider-thumb": {
    WebkitAppearance: "none",
    width: "32px",
    height: "8px",
    borderRadius: "4px",
    background: "#736e7d",
    boxShadow:
      "0px 2px 4px rgba(0, 0, 0, 0.16), inset 0px 1px 0px rgba(255, 255, 255, 0.16)",
    overflow: "visible",
    cursor: "pointer",
    paddingBottom: "5px",
    marginTop: "-3px",
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
    height: "2px",
    background: "#000000",
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

export {
  StyledTranslationControlsContainer,
  StyledVerticalSliderContainer,
  StyledIconWrapper,
  StyledRangeInput,
}
