import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Network } from '@dcl/schemas'
import { Typography } from '@mui/material'
import { CatalogCardPrice } from './CatalogCardPrice'
import { useAssetPreviewPlayer } from '../../components/AssetPreviewPlayer'
import { RarityBadge } from '../../components/RarityBadge'
import { i18n as rarityBadgeI18nDefault } from '../../components/RarityBadge/RarityBadge.i18n'
import { CatalogCardProps } from './CatalogCard.types'
import {
  AssetAddress,
  AssetHeaderContainer,
  AssetImageContainer,
  AssetTitle,
  BadgeRow,
  BottomActionContainer,
  CardContentContainer,
  CatalogCardContainer,
  CatalogItemInformationContainer,
  CatalogItemInformationContent,
  CatalogRarityChip,
  ExtraInformationContainer,
  ExtraInformationContent,
  InfoBadgesContainer,
  RarityBadgeSlot
} from './CatalogCard.styled'

const CatalogCard = React.memo((props: CatalogCardProps) => {
  const {
    asset,
    imageSrc,
    price,
    owners,
    extraInformation,
    action,
    actionIcon,
    withShadow,
    i18n,
    creatorSlot,
    hideRarityOnHover,
    hoverShadow,
    bottomAction,
    infoBadges,
    disableInfoExpansion,
    subduedRarity,
    hoverPreviewUrn
  } = props
  const showDefaultCreator = creatorSlot === undefined && asset.network === Network.MATIC
  // Live asset preview on hover (marketplace PRs #2640/#2648): emotes are played by the
  // avatar, wearables are shown worn by it. Only when the consumer provided the urn, an
  // enabled AssetPreviewPlayerProvider is mounted above, and the pointer actually hovers
  // (touch taps would race the card's navigation click).
  const containerRef = useRef<HTMLDivElement | null>(null)
  const assetPreviewPlayer = useAssetPreviewPlayer()
  const [supportsHover, setSupportsHover] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches
  )
  // Pointer capability can change at runtime (tablet keyboard detach, external mouse).
  useEffect(() => {
    const mql = window.matchMedia('(hover: hover) and (pointer: fine)')
    const handler = (event: MediaQueryListEvent) => setSupportsHover(event.matches)
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [])
  const canPreviewAsset = Boolean(hoverPreviewUrn && assetPreviewPlayer && supportsHover)
  const handlePreviewHoverEnter = useCallback(() => {
    if (!assetPreviewPlayer || !hoverPreviewUrn) return
    const imageEl = containerRef.current?.querySelector<HTMLElement>('[data-role="catalog-card-image"]')
    if (!imageEl) return
    assetPreviewPlayer.show(imageEl, { urn: hoverPreviewUrn, network: asset.network, rarity: asset.rarity })
  }, [assetPreviewPlayer, hoverPreviewUrn, asset.network, asset.rarity])
  const handlePreviewHoverLeave = useCallback(() => {
    assetPreviewPlayer?.hide()
  }, [assetPreviewPlayer])
  return (
    <CatalogCardContainer
      ref={containerRef}
      withShadow={withShadow}
      hideRarityOnHover={hideRarityOnHover}
      hoverShadow={hoverShadow}
      disableInfoExpansion={disableInfoExpansion}
      onMouseEnter={canPreviewAsset ? handlePreviewHoverEnter : undefined}
      onMouseLeave={canPreviewAsset ? handlePreviewHoverLeave : undefined}
    >
      <AssetImageContainer data-role="catalog-card-image" name={asset.name} rarity={asset.rarity} src={imageSrc} />
      <CardContentContainer>
        <AssetHeaderContainer>
          <AssetTitle variant="body1">{asset.name}</AssetTitle>
          {showDefaultCreator ? <AssetAddress value={asset.creator} /> : creatorSlot}
        </AssetHeaderContainer>
        {action || actionIcon ? (
          <CatalogItemInformationContainer className="CatalogItemInformationContainer" data-role="catalog-card-reveal">
            <CatalogItemInformationContent>
              <Typography variant="body2">{action}</Typography>
              {actionIcon}
            </CatalogItemInformationContent>
          </CatalogItemInformationContainer>
        ) : null}
        {price ? <CatalogCardPrice price={price} asset={asset} /> : owners}
        {extraInformation ? (
          <ExtraInformationContainer className="ExtraInformationContainer" data-role="catalog-card-reveal">
            <ExtraInformationContent>{extraInformation}</ExtraInformationContent>
          </ExtraInformationContainer>
        ) : null}
        <BadgeRow data-role={bottomAction ? 'catalog-card-badge-row' : undefined}>
          <RarityBadgeSlot data-role="catalog-card-rarity">
            {subduedRarity ? (
              <CatalogRarityChip rarity={asset.rarity}>{(i18n ?? rarityBadgeI18nDefault).rarities[asset.rarity]}</CatalogRarityChip>
            ) : (
              <RarityBadge square rarity={asset.rarity} i18n={i18n} />
            )}
          </RarityBadgeSlot>
          {infoBadges ? <InfoBadgesContainer>{infoBadges}</InfoBadgesContainer> : null}
        </BadgeRow>
      </CardContentContainer>
      {bottomAction ? <BottomActionContainer data-role="catalog-card-bottom-action">{bottomAction}</BottomActionContainer> : null}
    </CatalogCardContainer>
  )
})

export { CatalogCard }
