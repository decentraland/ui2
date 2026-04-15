import { ReactNode } from 'react'

interface EventSmallCardProps {
  /** Event cover image URL */
  image?: string
  /** Event title */
  title: string
  /** Creator display name */
  creatorName?: string
  /** Creator avatar face URL */
  creatorAvatarUrl?: string
  /** Time label shown in the bottom pill (e.g. "Starts in 10 mins") */
  timeLabel?: string
  /** Click handler for the entire card */
  onClick?: () => void
  /** When true, disables hover lift and shadow effects (use on mobile/tablet) */
  disableHover?: boolean
  /** Optional action element rendered next to the title on mobile, or top-right on desktop */
  action?: ReactNode
  /** Optional hover actions rendered at the bottom of the card on desktop hover */
  hoverActions?: ReactNode
}

export type { EventSmallCardProps }
