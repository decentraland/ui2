import React, { useCallback, useMemo, useRef } from 'react'
import { Network, Rarity } from '@dcl/schemas'
import { Typography } from '@mui/material'
import { CatalogCardPrice } from './CatalogCardPrice'
import { useEmotePreviewPlayer } from '../../components/EmotePreviewPlayer'
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
  CatalogRarityChip,
  ExtraInformationContainer,
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
    emotePreviewUrn
  } = props
  const showDefaultCreator = creatorSlot === undefined && asset.network === Network.MATIC
  // Animated emote preview on hover (marketplace PRs #2640/#2648): only when the consumer
  // provided the emote urn, an enabled EmotePreviewPlayerProvider is mounted above, and the
  // pointer actually hovers (touch taps would race the card's navigation click).
  const containerRef = useRef<HTMLDivElement | null>(null)
  const emotePreviewPlayer = useEmotePreviewPlayer()
  const supportsHover = useMemo(() => typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches, [])
  const canPreviewEmote = Boolean(emotePreviewUrn && emotePreviewPlayer && supportsHover)
  const handleEmoteHoverEnter = useCallback(() => {
    if (!emotePreviewPlayer || !emotePreviewUrn) return
    const imageEl = containerRef.current?.querySelector<HTMLElement>('.AssetImageContainer')
    if (!imageEl) return
    emotePreviewPlayer.show(imageEl, { urn: emotePreviewUrn, network: asset.network as Network, rarity: asset.rarity as Rarity })
  }, [emotePreviewPlayer, emotePreviewUrn, asset.network, asset.rarity])
  const handleEmoteHoverLeave = useCallback(() => {
    emotePreviewPlayer?.hide()
  }, [emotePreviewPlayer])
  return (
    <CatalogCardContainer
      ref={containerRef}
      withShadow={withShadow}
      hideRarityOnHover={hideRarityOnHover}
      hoverShadow={hoverShadow}
      disableInfoExpansion={disableInfoExpansion}
      onMouseEnter={canPreviewEmote ? handleEmoteHoverEnter : undefined}
      onMouseLeave={canPreviewEmote ? handleEmoteHoverLeave : undefined}
    >
      <AssetImageContainer className="AssetImageContainer" name={asset.name} rarity={asset.rarity} src={imageSrc} />
      <CardContentContainer>
        <AssetHeaderContainer>
          <AssetTitle variant="body1">{asset.name}</AssetTitle>
          {showDefaultCreator ? <AssetAddress value={asset.creator} /> : creatorSlot}
        </AssetHeaderContainer>
        <CatalogItemInformationContainer className="CatalogItemInformationContainer">
          <Typography variant="body2">{action}</Typography>
          {actionIcon}
        </CatalogItemInformationContainer>
        {price ? <CatalogCardPrice price={price} asset={asset} /> : owners}
        {extraInformation && (
          <ExtraInformationContainer className="ExtraInformationContainer">{extraInformation}</ExtraInformationContainer>
        )}
        <BadgeRow>
          <RarityBadgeSlot data-role="catalog-card-rarity">
            {subduedRarity ? (
              <CatalogRarityChip rarity={asset.rarity as Rarity}>
                {(i18n ?? rarityBadgeI18nDefault).rarities[asset.rarity]}
              </CatalogRarityChip>
            ) : (
              <RarityBadge square rarity={asset.rarity} i18n={i18n} />
            )}
          </RarityBadgeSlot>
          {infoBadges ? <InfoBadgesContainer>{infoBadges}</InfoBadgesContainer> : null}
        </BadgeRow>
        {bottomAction ? <BottomActionContainer data-role="catalog-card-bottom-action">{bottomAction}</BottomActionContainer> : null}
      </CardContentContainer>
    </CatalogCardContainer>
  )
})

export { CatalogCard }
