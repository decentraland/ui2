import React, { useCallback, useEffect, useRef } from "react"
import { IPreviewController } from "@dcl/schemas"
import SwapHorizIcon from "@mui/icons-material/SwapHoriz"
import { WearablePreview } from "../WearablePreview"
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
  const previewControllerRef = useRef<IPreviewController | null>(null)

  useEffect(() => {
    const previewController =
      wearablePreviewController ??
      WearablePreview.createController(wearablePreviewId)

    previewControllerRef.current = previewController

    return () => {
      previewControllerRef.current = null
    }
  }, [wearablePreviewId, wearablePreviewController])

  const handleControlVerticalTranslation = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(event.target.value)
      await previewControllerRef.current?.scene.panCamera({ y: value * -1 })
    },
    []
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
