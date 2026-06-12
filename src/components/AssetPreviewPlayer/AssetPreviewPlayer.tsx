import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Network, PreviewMessageType, Rarity, sendMessage } from '@dcl/schemas'
import { PreviewOptions } from '@dcl/schemas/dist/dapps/preview'
import { CircularProgress } from '@mui/material'
import { WearablePreview } from '../WearablePreview'
import { AssetPreviewPlayerContextValue, AssetPreviewPlayerProviderProps, AssetPreviewSource } from './AssetPreviewPlayer.types'
import { PlayerOverlay, SpinnerContainer } from './AssetPreviewPlayer.styled'

const PREVIEW_IFRAME_ID = 'asset-preview-player-iframe'
const DEFAULT_PEER_URL = 'https://peer.decentraland.org'
const DEFAULT_MARKETPLACE_SERVER_URL = 'https://marketplace-api.decentraland.org'

const AssetPreviewPlayerContext = createContext<AssetPreviewPlayerContextValue | null>(null)

/** Returns the player controls, or `null` when no enabled provider is mounted above. */
function useAssetPreviewPlayer(): AssetPreviewPlayerContextValue | null {
  return useContext(AssetPreviewPlayerContext)
}

type PreviewEnvConfig = {
  profile: string
  peerUrl: string
  marketplaceServerUrl: string
}

const sourceToOptions = (src: AssetPreviewSource, env: PreviewEnvConfig): PreviewOptions => {
  const base: PreviewOptions = {
    profile: env.profile,
    peerUrl: env.peerUrl,
    marketplaceServerUrl: env.marketplaceServerUrl,
    background: Rarity.getColor(src.rarity ?? Rarity.COMMON)
  }
  if (src.urn) {
    return { ...base, urns: [src.urn] }
  }
  return {
    ...base,
    contractAddress: src.contractAddress ?? null,
    itemId: src.itemId ?? null,
    tokenId: src.tokenId ?? null
  }
}

/**
 * The iframe only rebuilds (and therefore only emits LOAD) when the asset identity
 * changes — tracking it by key keeps the spinner honest on re-hovers of an
 * already-rendered asset (marketplace PR #2648).
 */
const keyOf = (src: AssetPreviewSource): string => {
  if (src.urn) {
    return `urn:${src.urn}`
  }
  if (src.network === Network.ETHEREUM) {
    return `eth:${src.contractAddress ?? ''}:${src.tokenId ?? ''}`
  }
  return `${src.contractAddress ?? ''}:${src.itemId ?? src.tokenId ?? ''}`
}

type OverlayRect = { top: number; left: number; width: number; height: number }

/**
 * Single pre-warmed `WearablePreview` iframe shared by every card: it boots hidden,
 * gets repositioned over the hovered card image and receives each asset via
 * `postMessage(UPDATE)` — never one iframe per card (marketplace PRs #2640/#2648).
 * Emotes are played by the avatar; wearables are rendered worn by the avatar.
 */
function AssetPreviewPlayerProvider({
  enabled,
  peerUrl = DEFAULT_PEER_URL,
  marketplaceServerUrl = DEFAULT_MARKETPLACE_SERVER_URL,
  profile = 'default',
  dev = false,
  children
}: AssetPreviewPlayerProviderProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isControllable, setIsControllable] = useState(false)
  const [isAssetLoading, setIsAssetLoading] = useState(false)
  const [rect, setRect] = useState<OverlayRect | null>(null)
  const [overlayRarity, setOverlayRarity] = useState<Rarity>(Rarity.COMMON)

  const targetRef = useRef<HTMLElement | null>(null)
  const hasInitiallyLoadedRef = useRef(false)
  const pendingSourceRef = useRef<AssetPreviewSource | null>(null)
  const currentKeyRef = useRef<string | null>(null)
  const loadedKeyRef = useRef<string | null>(null)

  const envConfig = useMemo<PreviewEnvConfig>(() => ({ profile, peerUrl, marketplaceServerUrl }), [profile, peerUrl, marketplaceServerUrl])

  const dispatchUpdate = useCallback(
    (src: AssetPreviewSource): boolean => {
      const iframe = document.getElementById(PREVIEW_IFRAME_ID) as HTMLIFrameElement | null
      if (!iframe?.contentWindow) {
        return false
      }
      sendMessage(iframe.contentWindow, PreviewMessageType.UPDATE, { options: sourceToOptions(src, envConfig) })
      return true
    },
    [envConfig]
  )

  const show = useCallback(
    (target: HTMLElement, source: AssetPreviewSource) => {
      targetRef.current = target
      setOverlayRarity(source.rarity ?? Rarity.COMMON)
      setIsVisible(true)
      const key = keyOf(source)
      currentKeyRef.current = key
      // If this asset is already rendered in the iframe the UPDATE won't trigger a
      // rebuild (no LOAD will follow), so don't show a spinner that would never clear.
      setIsAssetLoading(key !== loadedKeyRef.current)
      if (!isControllable || !dispatchUpdate(source)) {
        pendingSourceRef.current = source
      }
    },
    [isControllable, dispatchUpdate]
  )

  const hide = useCallback(() => {
    // Keep loadedKeyRef so re-hovering the same asset stays instant.
    targetRef.current = null
    setIsVisible(false)
    setRect(null)
  }, [])

  // Follow the hovered image rect (cards animate/scroll under the fixed overlay).
  useEffect(() => {
    if (!isVisible) {
      return undefined
    }
    let rafId = 0
    const tick = () => {
      const el = targetRef.current
      if (el) {
        const r = el.getBoundingClientRect()
        setRect(prev => {
          if (prev && prev.top === r.top && prev.left === r.left && prev.width === r.width && prev.height === r.height) {
            return prev
          }
          return { top: r.top, left: r.left, width: r.width, height: r.height }
        })
      }
      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [isVisible])

  const handlePreviewLoad = useCallback(() => {
    if (!hasInitiallyLoadedRef.current) {
      // First LOAD is the iframe boot — it becomes controllable now.
      hasInitiallyLoadedRef.current = true
      setIsControllable(true)
      return
    }
    loadedKeyRef.current = currentKeyRef.current
    setIsAssetLoading(false)
  }, [])

  const handlePreviewError = useCallback(() => {
    setIsAssetLoading(false)
  }, [])

  // A hover that raced the iframe boot is flushed as soon as it becomes controllable.
  useEffect(() => {
    if (isControllable && pendingSourceRef.current) {
      const pending = pendingSourceRef.current
      pendingSourceRef.current = null
      dispatchUpdate(pending)
    }
  }, [isControllable, dispatchUpdate])

  // Disabling tears the iframe down — reset every ref so the next boot is treated as such.
  useEffect(() => {
    if (!enabled) {
      hasInitiallyLoadedRef.current = false
      pendingSourceRef.current = null
      currentKeyRef.current = null
      loadedKeyRef.current = null
      targetRef.current = null
      setIsControllable(false)
      setIsVisible(false)
      setIsAssetLoading(false)
      setRect(null)
    }
  }, [enabled])

  const contextValue = useMemo<AssetPreviewPlayerContextValue | null>(() => (enabled ? { show, hide } : null), [enabled, show, hide])

  const [lightColor, regularColor] = Rarity.getGradient(overlayRarity)
  const overlayStyle: React.CSSProperties | undefined =
    isVisible && rect
      ? {
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
          backgroundImage: `radial-gradient(${lightColor}, ${regularColor})`
        }
      : undefined

  return (
    <AssetPreviewPlayerContext.Provider value={contextValue}>
      {children}
      {enabled
        ? createPortal(
            <PlayerOverlay visible={Boolean(isVisible && rect)} style={overlayStyle} aria-hidden>
              <WearablePreview
                id={PREVIEW_IFRAME_ID}
                profile={profile}
                peerUrl={peerUrl}
                marketplaceServerUrl={marketplaceServerUrl}
                background={Rarity.getColor(Rarity.COMMON)}
                disableAutoRotate
                disableFadeEffect
                dev={dev}
                onLoad={handlePreviewLoad}
                onError={handlePreviewError}
              />
              {isAssetLoading ? (
                <SpinnerContainer>
                  <CircularProgress size={28} />
                </SpinnerContainer>
              ) : null}
            </PlayerOverlay>,
            document.body
          )
        : null}
    </AssetPreviewPlayerContext.Provider>
  )
}

export { AssetPreviewPlayerProvider, useAssetPreviewPlayer, PREVIEW_IFRAME_ID }
