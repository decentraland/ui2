import React from 'react'
import { Network } from '@dcl/schemas'
import { Tooltip } from '@mui/material'
import { getNetworkMANADescription } from '../../lib/network'
import { ManaEthIcon, ManaMaticIcon } from '../Icon'
import { ManaProps } from './Mana.types'
import { ImageContainer, ManaButtonContainer } from './Mana.styled'

const ManaButton = React.memo((props: Omit<ManaProps, 'showTooltip'>) => {
  const { children, size, network, primary, color, ...rest } = props
  return (
    <ManaButtonContainer fontSize={size} {...rest}>
      <ImageContainer primary={primary} color={color}>
        {!network || network !== Network.MATIC ? (
          <ManaEthIcon fontSize={size || 'inherit'} />
        ) : (
          <ManaMaticIcon fontSize={size || 'inherit'} />
        )}
      </ImageContainer>
      {children}
    </ManaButtonContainer>
  )
})

const Mana = React.memo((props: ManaProps) => {
  const { showTooltip, ...manaButtonProps } = props
  return showTooltip ? (
    <Tooltip placement="top" title={getNetworkMANADescription(manaButtonProps.network || Network.ETHEREUM)}>
      <ManaButton {...manaButtonProps} />
    </Tooltip>
  ) : (
    <ManaButton {...manaButtonProps} />
  )
})

export { Mana }
