import React, { useCallback, useEffect, useRef } from "react"
import { IPreviewController } from "@dcl/schemas"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import { WearablePreview } from "../WearablePreview"
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

  const handleControlZoomIn = useCallback(async () => {
    await previewControllerRef.current?.scene.changeZoom(zoomDelta)
  }, [zoomDelta])

  const handleControlZoomOut = useCallback(async () => {
    await previewControllerRef.current?.scene.changeZoom(-zoomDelta)
  }, [zoomDelta])

  return (
    <StyledZoomControlsContainer className={className} position={position}>
      <StyledZoomButton onClick={handleControlZoomIn}>
        <AddIcon />
      </StyledZoomButton>
      <StyledZoomButton onClick={handleControlZoomOut}>
        <RemoveIcon />
      </StyledZoomButton>
    </StyledZoomControlsContainer>
  )
}
