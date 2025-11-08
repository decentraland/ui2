import React, { useCallback } from "react"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import { useWearablePreviewController } from "../useWearablePreviewController"
import { Position, ZoomControlsProps } from "./ZoomControls.types"
import {
  StyledZoomButton,
  StyledZoomControlsContainer,
} from "./ZoomControls.styled"

const ZOOM_DELTA = 0.1

export const ZoomControls: React.FC<ZoomControlsProps> = ({
  wearablePreviewId,
  className,
  position = Position.LEFT,
  wearablePreviewController,
  zoomDelta = ZOOM_DELTA,
}) => {
  const { controllerRef } = useWearablePreviewController(
    wearablePreviewId,
    wearablePreviewController
  )

  const handleControlZoomIn = useCallback(async () => {
    await controllerRef.current?.scene.changeZoom(zoomDelta)
  }, [zoomDelta, controllerRef])

  const handleControlZoomOut = useCallback(async () => {
    await controllerRef.current?.scene.changeZoom(-zoomDelta)
  }, [zoomDelta, controllerRef])

  return (
    <StyledZoomControlsContainer className={className} position={position}>
      <StyledZoomButton className="ZoomIn" onClick={handleControlZoomIn}>
        <AddIcon />
      </StyledZoomButton>
      <StyledZoomButton className="ZoomOut" onClick={handleControlZoomOut}>
        <RemoveIcon />
      </StyledZoomButton>
    </StyledZoomControlsContainer>
  )
}
