import {
  IPreviewControllerWithSocialEmotes,
  SocialEmoteAnimation,
} from "../WearablePreview.controller"

export type AnimationControlsProps = {
  wearablePreviewId: string
  className?: string
  wearablePreviewController?: IPreviewControllerWithSocialEmotes
  selectedAnimation?: SocialEmoteAnimation
  onSelectAnimation?: (animation: SocialEmoteAnimation) => void
  renderAnimationSelector?: (props: {
    socialEmoteAnimations: SocialEmoteAnimation[] | null
    onSelectAnimation?: (animation: SocialEmoteAnimation) => void
  }) => React.ReactNode
}
