import { Network, Rarity } from '@dcl/schemas'

/** Identifies the asset to render in the shared preview iframe. */
type AssetPreviewSource = {
  /** Preferred identifier — resolves any collections item (wearable or emote). */
  urn?: string | null
  /** Legacy identifier pair, used when no `urn` is available. */
  contractAddress?: string
  itemId?: string | null
  tokenId?: string | null
  network?: Network
  /** Drives the overlay/iframe background color while the asset loads. */
  rarity?: Rarity
}

type AssetPreviewPlayerContextValue = {
  /**
   * Shows the preview overlay on top of `target`, rendering `source`: the avatar
   * plays the asset when it is an emote and wears it when it is a wearable.
   */
  show: (target: HTMLElement, source: AssetPreviewSource) => void
  /** Hides the overlay (the iframe stays warm for the next hover). */
  hide: () => void
}

type AssetPreviewPlayerProviderProps = {
  /** Master switch — when false no iframe is mounted and `useAssetPreviewPlayer()` returns null. */
  enabled: boolean
  /** Catalyst peer used by the preview to resolve profiles/content. Defaults to prod. */
  peerUrl?: string
  /** Marketplace API used by the preview to resolve items. Defaults to prod. */
  marketplaceServerUrl?: string
  /** Avatar profile rendered wearing/playing the asset. Defaults to `"default"`. */
  profile?: string
  /** Forwarded to the preview iframe (zone assets). */
  dev?: boolean
  /**
   * z-index of the floating preview overlay. Defaults to `1050` — above page content
   * but below app chrome (MUI `appBar` 1100 / `modal` 1300 / `snackbar` 1400 /
   * `tooltip` 1500) — so the preview never covers a fixed navbar, dialog or toast.
   * When the previewed cards live inside a modal, pass a value above the modal layer
   * (e.g. `1600`) so the preview floats over that modal's content.
   */
  overlayZIndex?: number
  children: React.ReactNode
}

export type { AssetPreviewPlayerContextValue, AssetPreviewPlayerProviderProps, AssetPreviewSource }
