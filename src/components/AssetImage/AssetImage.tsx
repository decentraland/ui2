import React from 'react'
import { AssetImageProps } from './AssetImage.types'
import { AssetImageContainer, AssetImageStyled } from './AssetImage.styled'

const AssetImage = React.memo((props: AssetImageProps) => {
  const { rarity, name, src, ...restProps } = props
  return (
    <AssetImageContainer rarity={rarity} {...restProps}>
      <AssetImageStyled src={src} alt={name} />
    </AssetImageContainer>
  )
})

export { AssetImage }
