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
   * - 'lift': subtle translateY(-4px) with inset glow border
   * - 'none': disables container hover animation. Note: child hover behaviors (image shrink, jump-in reveal) still apply.
   */
  hoverEffect?: EventCardHoverEffect
  leftBadge?: string | ReactNode
  /** When true, the left badge wrapper has no background/padding, useful when leftBadge already has its own styling */
  leftBadgeTransparent?: boolean
  /** Custom click handler. When not provided, clicking the card opens the jump-in URL */
  onClick?: () => void
  /** Custom handler for the Jump In button. When provided, clicking the button calls this instead of the card's onClick */
  onJumpInClick?: () => void
  /** When true, clicking the card redirects to /auth instead of the jump-in URL */
  redirectToAuth?: boolean
  /** When true, the location chip is not shown on hover */
  hideLocation?: boolean
}

export type { EventCardHoverEffect, EventCardProps }
