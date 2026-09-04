import { ReactNode } from 'react'

interface CarouselProps<T> {
  /** Items to render as slides. */
  items: T[]
  /** Renders a single slide's content. */
  renderItem: (item: T) => ReactNode
  /** Stable key for each item. */
  keyExtractor: (item: T) => string
  /** Autoplay interval in ms. Pass 0 to disable. Default: 4000 */
  autoplayDelay?: number
  /** Desktop slide width in px. Default: 750 */
  slideWidth?: number
  /** CSS aspect-ratio applied on desktop/tablet slides. E.g. "750 / 370" */
  slideAspectRatio?: string
  /** Align items on the track. Default: 'stretch' */
  alignItems?: 'stretch' | 'center' | 'flex-start' | 'flex-end'
  className?: string
}

export type { CarouselProps }
