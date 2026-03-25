import { ReactNode } from 'react'
import { Avatar } from '@dcl/schemas'

interface EventCardProps {
  image: string
  sceneName: string
  loading?: boolean
  avatar?: Avatar
  coordinates?: string
  withShadow?: boolean
  leftBadge?: string | ReactNode
  /** When true, the left badge wrapper has no background/padding, useful when leftBadge already has its own styling */
  leftBadgeTransparent?: boolean
  /** Custom click handler. When not provided, clicking the card opens the jump-in URL */
  onClick?: () => void
  /** When true, clicking the card redirects to /auth instead of the jump-in URL */
  redirectToAuth?: boolean
  /** When true, the location chip is not shown on hover */
  hideLocation?: boolean
}

export type { EventCardProps }
