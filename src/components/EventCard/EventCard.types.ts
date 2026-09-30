import { ReactNode } from 'react'
import { Avatar } from '@dcl/schemas'

type EventCardHoverEffect = 'coin' | 'lift' | 'none'

interface EventCardProps {
  image: string
  sceneName: string
  loading?: boolean
  avatar?: Avatar
  coordinates?: string
  /** When true, adds a purple glow shadow on hover. Only applies to the 'coin' hover effect. */
  withShadow?: boolean
  /**
   * Hover animation style for the card container.
   * - 'coin' (default): 3D flip animation with optional purple glow (controlled by withShadow)
   * - 'lift': subtle translateY(-4px) with shadow glow
   * - 'none': disables container hover animation. Note: child hover behaviors (image shrink, jump-in reveal) still apply.
   */
  hoverEffect?: EventCardHoverEffect
  /** Custom shadow color for the 'lift' hover effect (e.g. 'rgba(221, 86, 255, 0.37)'). Defaults to white/black glow based on theme. */
  liftShadowColor?: string
  leftBadge?: string | ReactNode
  /** When true, the left badge wrapper has no background/padding, useful when leftBadge already has its own styling */
  leftBadgeTransparent?: boolean
  /** Custom click handler. When not provided, clicking the card opens the jump-in URL */
  onClick?: () => void
  /** Custom handler for the Jump In button. When provided, clicking the button calls this instead of the card's onClick */
  onJumpInClick?: () => void
  /**
   * Custom handler for the avatar/creator name. When provided, the avatar row becomes a button:
   * click calls this instead of navigating to the legacy `decentraland.org/profile/accounts/<addr>`
   * URL, and the card-level click handler is suppressed via stopPropagation (so you don't get the
   * card's jump-in action firing in a second tab alongside the profile navigation).
   */
  onAvatarClick?: () => void
  /** When true, clicking the card redirects to /auth instead of the jump-in URL */
  redirectToAuth?: boolean
  /** When true, the location chip is not shown on hover */
  hideLocation?: boolean
}

export type { EventCardHoverEffect, EventCardProps }
