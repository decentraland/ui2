import styled from "@emotion/styled"
import { Box } from "@mui/material"
import { VerticalPosition } from "./TranslationControls.types"

const StyledTranslationControlsContainer = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  pointerEvents: "none",
  "& > *": {
    pointerEvents: "auto",
  },
})

const StyledVerticalSliderContainer = styled(Box)<{
  verticalPosition: VerticalPosition
}>(({ verticalPosition }) => ({
  position: "absolute",
  transform: "rotate(-90deg)",
  top: 176,
  width: 280,
  display: "flex",
  flexDirection: "row-reverse",
  ...(verticalPosition === VerticalPosition.RIGHT
    ? { right: -104 }
    : { left: -104 }),
}))

const StyledIconWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  color: "#736e7d",
})

const StyledRangeInput = styled("input")(({ theme }) => ({
  width: 224,
  background: "none",
  WebkitAppearance: "none",
  "&:focus": {
    outline: "none",
  },
  "&::-webkit-slider-thumb": {
    WebkitAppearance: "none",
    width: 32,
    height: 8,
    borderRadius: 4,
    background: "#736e7d",
    boxShadow:
      "0px 2px 4px rgba(0, 0, 0, 0.16), inset 0px 1px 0px rgba(255, 255, 255, 0.16)",
    overflow: "visible",
    cursor: "pointer",
    paddingBottom: theme.spacing(0.625),
    marginTop: theme.spacing(-0.375),
  },
  "&::-moz-range-thumb": {
    width: 24,
    height: 24,
    borderRadius: 20,
    backgroundColor: "#736e7d",
    overflow: "visible",
    cursor: "pointer",
    border: "none",
  },
  "&::-ms-thumb": {
    width: 24,
    height: 24,
    borderRadius: 20,
    backgroundColor: "#736e7d",
    overflow: "visible",
    cursor: "pointer",
  },
  "&::-webkit-slider-runnable-track": {
    width: 304,
    height: 2,
    background: "#000000",
    border: "none",
    borderRadius: 10,
  },
  "&::-moz-range-track": {
    width: "100%",
    height: 16,
    borderRadius: 10,
    cursor: "pointer",
    background: "rgba(115, 110, 125, 0.32)",
  },
}))

export {
  StyledTranslationControlsContainer,
  StyledVerticalSliderContainer,
  StyledIconWrapper,
  StyledRangeInput,
}
