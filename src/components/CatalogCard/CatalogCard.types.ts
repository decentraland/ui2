import { Item } from '@dcl/schemas'
import { RarityBadgeI18N } from 'components/RarityBadge/RarityBadge.types'

type CatalogCardProps = {
  asset: Pick<Item, 'id' | 'url' | 'name' | 'rarity' | 'network' | 'creator'>
  action: React.ReactNode
  actionIcon?: React.ReactNode
  imageSrc: string
  extraInformation: React.ReactNode
  notForSale: boolean
  withShadow: boolean
  price?: string
  owners?: string
  i18n?: RarityBadgeI18N
  /** Replaces the default `<AssetAddress>` below the title. Pass `null` to hide it entirely. */
  creatorSlot?: React.ReactNode
  /** Fade out the RarityBadge while the card is hovered (lets `bottomAction` take its visual slot). */
  hideRarityOnHover?: boolean
  /** Shadow style on hover. `'glow'` uses the whats-on Live/Upcoming spotlight; `'default'` keeps the legacy depth shadow. */
  hoverShadow?: 'default' | 'glow'
  /** Full-width block revealed at the bottom of the card on hover (e.g. a "BUY" button). */
  bottomAction?: React.ReactNode
  /** Always-visible badges rendered next to the RarityBadge (e.g. wearable category + body shape icons). */
  infoBadges?: React.ReactNode
}

export { CatalogCardProps }
