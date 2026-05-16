import React from 'react'
import { Network, Rarity } from '@dcl/schemas'
import { Typography } from '@mui/material'
import { CatalogCardPrice } from './CatalogCardPrice'
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
    subduedRarity
  } = props
  const showDefaultCreator = creatorSlot === undefined && asset.network === Network.MATIC
  return (
    <CatalogCardContainer
      withShadow={withShadow}
      hideRarityOnHover={hideRarityOnHover}
      hoverShadow={hoverShadow}
      disableInfoExpansion={disableInfoExpansion}
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
