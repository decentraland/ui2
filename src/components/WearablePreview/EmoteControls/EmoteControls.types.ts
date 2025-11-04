import React from "react"
import { IPreviewControllerWithSocialEmotes } from "../WearablePreview.controller"

export type EmoteControlsProps = {
  wearablePreviewId: string
  className?: string
  hideFrameInput?: boolean
  hideProgressInput?: boolean
  hidePlayButton?: boolean
  hideSoundButton?: boolean
  wearablePreviewController?: IPreviewControllerWithSocialEmotes
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
