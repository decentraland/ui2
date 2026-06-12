import React from 'react'
import { Mana } from '../../components/Mana'
import { CatalogCardProps } from './CatalogCard.types'
import { CatalogCardPriceContainer, PriceText } from './CatalogCard.styled'

const CatalogCardPrice = React.memo((props: Pick<CatalogCardProps, 'price' | 'asset'>) => {
  const { price, asset } = props
  return (
    <CatalogCardPriceContainer>
      <Mana size="large" network={asset.network} />
      <PriceText variant="h4">{price}</PriceText>
    </CatalogCardPriceContainer>
  )
})

export { CatalogCardPrice }
