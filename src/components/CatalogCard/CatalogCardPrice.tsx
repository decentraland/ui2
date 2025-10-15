import React from "react"
import { Typography } from "@mui/material"
import { Mana } from "../../components/Mana"
import { CatalogCardProps } from "./CatalogCard.types"
import { CatalogCardPriceContainer } from "./CatalogCard.styled"

const CatalogCardPrice = React.memo(
  (props: Pick<CatalogCardProps, "price" | "asset">) => {
    const { price, asset } = props
    return (
      <CatalogCardPriceContainer>
        <Mana size="large" network={asset.network} />
        <Typography variant="h4">{price}</Typography>
      </CatalogCardPriceContainer>
    )
  }
)

export { CatalogCardPrice }
