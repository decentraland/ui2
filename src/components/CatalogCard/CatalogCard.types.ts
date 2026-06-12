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
  /** When true, skips the hover reveal of `ExtraInformationContainer` / `CatalogItemInformationContainer` so the card visuals stay static. Useful when the card itself is the action target and no `bottomAction` needs room. */
  disableInfoExpansion?: boolean
  /** When true, renders the rarity tag as a subdued pastel chip (rgba bg + light text) instead of the default solid `<RarityBadge>`. Matches the Figma marketplace-card spec for profile/equipped contexts. Opt-in to avoid touching every existing consumer. */
  subduedRarity?: boolean
  /** URN of the emote to animate on hover. Requires an `<EmotePreviewPlayerProvider enabled>` above; without one (or on touch devices) the card stays static. */
  emotePreviewUrn?: string
}

export { CatalogCardProps }
