import React, { useCallback } from "react"
import SwapHorizIcon from "@mui/icons-material/SwapHoriz"
import { useWearablePreviewController } from "../useWearablePreviewController"
import {
  TranslationControlsProps,
  VerticalPosition,
} from "./TranslationControls.types"
import {
  StyledIconWrapper,
  StyledRangeInput,
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

  const handleControlVerticalTranslation = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(event.target.value)
      await controllerRef.current?.scene.panCamera({ y: value * -1 })
    },
    [controllerRef]
  )

  return (
    <StyledTranslationControlsContainer className={className}>
      {vertical ? (
        <StyledVerticalSliderContainer verticalPosition={verticalPosition}>
          <StyledIconWrapper>
            <SwapHorizIcon />
          </StyledIconWrapper>
          <StyledRangeInput
            type="range"
            step={0.1}
            min={-2}
            max={2}
            onChange={handleControlVerticalTranslation}
          />
        </StyledVerticalSliderContainer>
      ) : null}
    </StyledTranslationControlsContainer>
  )
}
