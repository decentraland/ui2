import React from "react"
import { Network } from "@dcl/schemas"
import { Typography } from "@mui/material"
import { CatalogCardPrice } from "./CatalogCardPrice"
import { RarityBadge } from "../../components/RarityBadge"
import { CatalogCardProps } from "./CatalogCard.types"
import {
  AssetAddress,
  AssetHeaderContainer,
  AssetImageContainer,
  AssetTitle,
  CardContentContainer,
  CatalogCardContainer,
  CatalogItemInformationContainer,
  ExtraInformationContainer,
} from "./CatalogCard.styled"

const CatalogCard = React.memo((props: CatalogCardProps) => {
  const {
    asset,
    imageSrc,
    price,
    owners,
    extraInformation,
    action,
    actionIcon,
  } = props
  return (
    <CatalogCardContainer>
      <AssetImageContainer
        className="AssetImageContainer"
        name={asset.name}
        rarity={asset.rarity}
        src={imageSrc}
      />
      <CardContentContainer>
        <AssetHeaderContainer>
          <AssetTitle variant="body1">{asset.name}</AssetTitle>
          {asset.network === Network.MATIC && (
            <AssetAddress value={asset.creator} />
          )}
        </AssetHeaderContainer>
        <CatalogItemInformationContainer className="CatalogItemInformationContainer">
          <Typography variant="body2">{action}</Typography>
          {actionIcon}
        </CatalogItemInformationContainer>
        {price ? <CatalogCardPrice price={price} asset={asset} /> : owners}
        {extraInformation && (
          <ExtraInformationContainer className="ExtraInformationContainer">
            {extraInformation}
          </ExtraInformationContainer>
        )}
        <RarityBadge square rarity={asset.rarity} />
      </CardContentContainer>
    </CatalogCardContainer>
  )
})

export { CatalogCard }
