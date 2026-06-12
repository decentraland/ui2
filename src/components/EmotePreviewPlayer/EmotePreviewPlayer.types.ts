import { Network, Rarity } from '@dcl/schemas'

/** Identifies the emote to render in the shared preview iframe. */
type EmotePreviewSource = {
  /** Preferred identifier — resolves any collections item. */
  urn?: string | null
  /** Legacy identifier pair, used when no `urn` is available. */
  contractAddress?: string
  itemId?: string | null
  tokenId?: string | null
  network?: Network
  /** Drives the overlay/iframe background color while the emote loads. */
  rarity?: Rarity
}

type EmotePreviewPlayerContextValue = {
  /** Shows the animated preview overlay on top of `target`, rendering `source`. */
  show: (target: HTMLElement, source: EmotePreviewSource) => void
  /** Hides the overlay (the iframe stays warm for the next hover). */
  hide: () => void
}

type EmotePreviewPlayerProviderProps = {
  /** Master switch — when false no iframe is mounted and `useEmotePreviewPlayer()` returns null. */
  enabled: boolean
  /** Catalyst peer used by the preview to resolve profiles/content. Defaults to prod. */
  peerUrl?: string
  /** Marketplace API used by the preview to resolve items. Defaults to prod. */
  marketplaceServerUrl?: string
  /** Avatar profile rendered playing the emote. Defaults to `"default"`. */
  profile?: string
  /** Forwarded to the preview iframe (zone assets). */
  dev?: boolean
  children: React.ReactNode
}

export type { EmotePreviewPlayerContextValue, EmotePreviewPlayerProviderProps, EmotePreviewSource }
