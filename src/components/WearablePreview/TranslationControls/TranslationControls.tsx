import React, { useCallback } from "react"
import SwapVertIcon from "@mui/icons-material/SwapVert"
import { useWearablePreviewController } from "../useWearablePreviewController"
import {
  TranslationControlsProps,
  VerticalPosition,
} from "./TranslationControls.types"
import {
  StyledIconWrapper,
  StyledSlider,
  StyledTranslationControlsContainer,
  StyledVerticalSliderContainer,
} from "./TranslationControls.styled"

export const TranslationControls: React.FC<TranslationControlsProps> = ({
  wearablePreviewId,
  vertical,
  className,
  verticalPosition = VerticalPosition.RIGHT,
  wearablePreviewController,
}) => {
  const { controllerRef } = useWearablePreviewController(
    wearablePreviewId,
    wearablePreviewController
  )
  const handleControlTranslation = useCallback(
    (_event: Event, value: number | number[]) => {
      const _value = Array.isArray(value) ? value[0] : value
      controllerRef.current?.scene.panCamera({ y: _value * -1 })
    },
    [controllerRef]
  )

  return (
    <StyledTranslationControlsContainer
      className={className}
      verticalPosition={verticalPosition}
    >
      {vertical ? (
        <StyledVerticalSliderContainer>
          <StyledIconWrapper>
            <SwapVertIcon />
          </StyledIconWrapper>
          <StyledSlider
            orientation="vertical"
            defaultValue={0}
            step={0.1}
            min={-2}
            max={2}
            onChange={handleControlTranslation}
          />
        </StyledVerticalSliderContainer>
      ) : null}
    </StyledTranslationControlsContainer>
  )
}
