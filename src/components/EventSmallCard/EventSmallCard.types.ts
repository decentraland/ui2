import { ReactNode } from 'react'

interface EventSmallCardProps {
  /** Event cover image URL */
  image?: string
  /** Solid color painted behind the cover. Stays visible when the cover 404s. */
  imageFallbackColor?: string
  /** Rendered over the cover, e.g. a presence or LIVE badge. Laid out top-left. */
  thumbnailOverlay?: ReactNode
  /** Event title */
  title: string
  /** Creator display name */
  creatorName?: string
  /** Creator avatar face URL */
  creatorAvatarUrl?: string
  /** Solid color behind the (often transparent) avatar face, and the fill of the no-avatar dot */
  creatorAvatarBackgroundColor?: string
  /**
   * Word before the creator name. Defaults to the English "by", so any
   * localized consumer has to pass its own translation on every render.
   */
  byLabel?: string
  /** Time label shown in the bottom pill (e.g. "Starts in 10 mins") */
  timeLabel?: string
  /** Bottom pill content, chrome included. Replaces `timeLabel` and its clock icon. */
  bottomPill?: ReactNode
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
