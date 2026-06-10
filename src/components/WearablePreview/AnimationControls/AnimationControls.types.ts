import { ReactNode } from 'react'
import { IPreviewController } from '@dcl/schemas'
import { SocialEmoteAnimation } from '@dcl/schemas/dist/dapps/preview/social-emote-animation'

export type AnimationControlsProps = {
  wearablePreviewId: string
  className?: string
  wearablePreviewController?: IPreviewController
  selectedAnimation?: SocialEmoteAnimation
  onSelectAnimation?: (animation: SocialEmoteAnimation) => void
  renderAnimationSelector?: (props: {
    socialEmoteAnimations: SocialEmoteAnimation[]
    selectedAnimation: SocialEmoteAnimation | null
    onSelectAnimation: (animation: SocialEmoteAnimation) => void
  }) => ReactNode
}
