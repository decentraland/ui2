/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useCallback, useEffect, useState } from "react"
import { PreviewEmoteEventType } from "@dcl/schemas/dist/dapps/preview/preview-emote-event-type"
import PauseIcon from "@mui/icons-material/Pause"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import VolumeOffIcon from "@mui/icons-material/VolumeOff"
import VolumeUpIcon from "@mui/icons-material/VolumeUp"
import { useWearablePreviewController } from "../useWearablePreviewController"
import { EmoteControlsProps } from "./EmoteControls.types"
import {
  StyledEmoteControlsContainer,
  StyledFrameControl,
  StyledFrameInput,
  StyledPlayButton,
  StyledRangeInput,
  StyledSoundButton,
} from "./EmoteControls.styled"

export const EmoteControls: React.FC<EmoteControlsProps> = ({
  wearablePreviewId,
  className,
  hideFrameInput,
  hideProgressInput,
  hidePlayButton,
  hideSoundButton,
  wearablePreviewController,
  renderPlayButton,
  renderSoundButton,
  renderProgressBar,
  renderFrameInput,
}) => {
  const { controllerRef, isReady } = useWearablePreviewController(
    wearablePreviewId,
    wearablePreviewController
  )

  const [frame, setFrame] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [length, setLength] = useState<number | undefined>(undefined)
  const [isSoundEnabled, setIsSoundEnabled] = useState(true)
  const [hasSound, setHasSound] = useState<boolean | undefined>(undefined)
  const [shouldResumePlaying, setShouldResumePlaying] = useState(false)
  const [isChangingFrame, setIsChangingFrame] = useState(false)

  const handleAnimationLoop = useCallback(() => {
    setFrame(0)
  }, [])

  const handleAnimationEnd = useCallback(() => {
    setIsPlaying(false)
    setFrame((currentFrame) => {
      const currentLength = length ?? 0
      return currentFrame >= Math.floor(currentLength * 100) ? 0 : currentFrame
    })
  }, [length])

  const handleAnimationPause = useCallback(() => {
    setIsPlaying(false)
  }, [])

  const handleAnimationPlay = useCallback(async () => {
    if (!isChangingFrame) {
      let emoteLength = length
      if (!length && controllerRef.current) {
        emoteLength = await controllerRef.current.emote.getLength()
      }
      setIsPlaying(true)
      setLength(emoteLength)
    }
  }, [length, isChangingFrame, controllerRef])

  const handleAnimationPlaying = useCallback(
    ({ length: playingLength }: { length: number }) => {
      setFrame(Math.ceil((playingLength ?? 0) * 100))
    },
    []
  )

  useEffect(() => {
    const controller = controllerRef.current
    if (!controller) {
      return
    }

    controller.emote.events.on(
      PreviewEmoteEventType.ANIMATION_PLAY,
      handleAnimationPlay
    )

    controller.emote.events.on(
      PreviewEmoteEventType.ANIMATION_PLAYING,
      handleAnimationPlaying
    )

    controller.emote.events.on(
      PreviewEmoteEventType.ANIMATION_END,
      handleAnimationEnd
    )

    controller.emote.events.on(
      PreviewEmoteEventType.ANIMATION_PAUSE,
      handleAnimationPause
    )

    controller.emote.events.on(
      PreviewEmoteEventType.ANIMATION_LOOP,
      handleAnimationLoop
    )

    return () => {
      controller.emote.events.off(
        PreviewEmoteEventType.ANIMATION_PLAY,
        handleAnimationPlay
      )
      controller.emote.events.off(
        PreviewEmoteEventType.ANIMATION_PLAYING,
        handleAnimationPlaying
      )
      controller.emote.events.off(
        PreviewEmoteEventType.ANIMATION_END,
        handleAnimationEnd
      )
      controller.emote.events.off(
        PreviewEmoteEventType.ANIMATION_PAUSE,
        handleAnimationPause
      )
      controller.emote.events.off(
        PreviewEmoteEventType.ANIMATION_LOOP,
        handleAnimationLoop
      )
    }
  }, [
    controllerRef,
    handleAnimationPlay,
    handleAnimationPlaying,
    handleAnimationEnd,
    handleAnimationPause,
    handleAnimationLoop,
  ])

  useEffect(() => {
    if (hasSound === undefined && isReady && controllerRef.current) {
      controllerRef.current.emote
        .hasSound()
        .then((soundExists) => setHasSound(soundExists))
        .catch((error) => {
          console.error("Error checking sound:", error)
          setHasSound(false)
        })
    }
  }, [hasSound, isReady, controllerRef])

  const handlePlay = useCallback(async () => {
    if (!controllerRef.current) {
      return
    }
    try {
      await controllerRef.current.emote.play()
    } catch (error) {
      console.error("Error playing emote:", error)
    }
  }, [controllerRef])

  const handlePause = useCallback(async () => {
    if (!controllerRef.current) {
      return
    }
    try {
      await controllerRef.current.emote.pause()
    } catch (error) {
      console.error("Error pausing emote:", error)
    }
  }, [controllerRef])

  const handlePlayPause = useCallback(async () => {
    if (isPlaying) {
      await handlePause()
    } else {
      await handlePlay()
    }
  }, [isPlaying, handlePlay, handlePause])

  const handleSoundToggle = useCallback(() => {
    if (isSoundEnabled) {
      controllerRef.current?.emote.disableSound()
    } else {
      controllerRef.current?.emote.enableSound()
    }
    setIsSoundEnabled(!isSoundEnabled)
  }, [isSoundEnabled, controllerRef])

  const handleFrameChange = useCallback(
    async (value: number) => {
      if (isNaN(value) || !controllerRef.current) {
        return
      }
      let targetValue = value
      const currentLength = length ?? 0
      if (currentLength * 100 < value) {
        targetValue = currentLength * 100
      }
      setFrame(targetValue)
      setIsChangingFrame(true)
      try {
        if (isPlaying) {
          await controllerRef.current.emote.pause()
          setShouldResumePlaying(true)
        }
        await controllerRef.current.emote.goTo(targetValue / 100)
      } catch (error) {
        console.error("Error changing frame:", error)
      }
    },
    [length, isPlaying, controllerRef]
  )

  const handleMouseUp = useCallback(async () => {
    setIsChangingFrame(false)
    if (shouldResumePlaying && controllerRef.current) {
      try {
        await controllerRef.current.emote.play()
      } catch (error) {
        console.error("Error resuming play:", error)
      }
      setShouldResumePlaying(false)
    }
  }, [shouldResumePlaying, controllerRef])

  return (
    <StyledEmoteControlsContainer className={className}>
      {hidePlayButton ? null : renderPlayButton ? (
        renderPlayButton({
          isPlaying,
          onPlay: handlePlay,
          onPause: handlePause,
          onToggle: handlePlayPause,
        })
      ) : (
        <StyledPlayButton onClick={handlePlayPause}>
          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </StyledPlayButton>
      )}

      {!hideProgressInput ? (
        renderProgressBar ? (
          renderProgressBar({
            frame,
            length: length ?? 0,
            onChange: handleFrameChange,
            onMouseUp: handleMouseUp,
          })
        ) : (
          <StyledRangeInput
            type="range"
            value={frame}
            max={Math.ceil((length ?? 0) * 100)}
            min={0}
            step={1}
            onChange={(e) => handleFrameChange(Number(e.target.value))}
            onMouseUp={handleMouseUp}
          />
        )
      ) : null}

      {hideFrameInput ? null : (
        <StyledFrameControl>
          {renderFrameInput ? (
            renderFrameInput({
              frame: Math.round(frame / 100),
              onChange: (value) => handleFrameChange(value * 100),
            })
          ) : (
            <StyledFrameInput
              type="number"
              value={Math.round(frame / 100)}
              onChange={(e) => handleFrameChange(Number(e.target.value) * 100)}
            />
          )}
        </StyledFrameControl>
      )}

      {hideSoundButton || !hasSound ? null : renderSoundButton ? (
        renderSoundButton({
          isSoundEnabled,
          hasSound,
          onToggle: handleSoundToggle,
        })
      ) : (
        <StyledSoundButton muted={!isSoundEnabled} onClick={handleSoundToggle}>
          {isSoundEnabled ? <VolumeUpIcon /> : <VolumeOffIcon />}
        </StyledSoundButton>
      )}
    </StyledEmoteControlsContainer>
  )
}
