import React from 'react'
import { Network } from '@dcl/schemas'
import { Typography } from '@mui/material'
import { CatalogCardPrice } from './CatalogCardPrice'
import { RarityBadge } from '../../components/RarityBadge'
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
    infoBadges
  } = props
  const showDefaultCreator = creatorSlot === undefined && asset.network === Network.MATIC
  return (
    <CatalogCardContainer withShadow={withShadow} hideRarityOnHover={hideRarityOnHover} hoverShadow={hoverShadow}>
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
            <RarityBadge square rarity={asset.rarity} i18n={i18n} />
          </RarityBadgeSlot>
          {infoBadges ? <InfoBadgesContainer>{infoBadges}</InfoBadgesContainer> : null}
        </BadgeRow>
        {bottomAction ? <BottomActionContainer data-role="catalog-card-bottom-action">{bottomAction}</BottomActionContainer> : null}
      </CardContentContainer>
    </CatalogCardContainer>
  )
})

export { CatalogCard }
