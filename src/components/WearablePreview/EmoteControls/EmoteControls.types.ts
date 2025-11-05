import React from "react"
import { IPreviewController } from "@dcl/schemas"

export type EmoteControlsProps = {
  wearablePreviewId: string
  className?: string
  hideFrameInput?: boolean
  hideProgressInput?: boolean
  hidePlayButton?: boolean
  hideSoundButton?: boolean
  wearablePreviewController?: IPreviewController
  renderPlayButton?: (props: {
    isPlaying: boolean
    onPlay: () => Promise<void>
    onPause: () => Promise<void>
    onToggle: () => Promise<void>
  }) => React.ReactNode
  renderSoundButton?: (props: {
    isSoundEnabled: boolean
    hasSound: boolean
    onToggle: () => void
  }) => React.ReactNode
  renderProgressBar?: (props: {
    frame: number
    length: number
    onChange: (value: number) => Promise<void>
    onMouseUp: () => Promise<void>
  }) => React.ReactNode
  renderFrameInput?: (props: {
    frame: number
    onChange: (value: number) => Promise<void>
  }) => React.ReactNode
}
