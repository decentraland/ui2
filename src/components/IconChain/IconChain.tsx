import React from 'react'
import { SvgIconOwnProps } from '@mui/material'
import { ArbitrumIcon } from '../Icon/Chains/ArbitrumIcon'
import { AvalancheIcon } from '../Icon/Chains/AvalancheIcon'
import { BinanceIcon } from '../Icon/Chains/BinanceIcon'
import { EthereumIcon } from '../Icon/Chains/EthereumIcon'
import { FantomIcon } from '../Icon/Chains/FantomIcon'
import { OptimismIcon } from '../Icon/Chains/OptimismIcon'
import { PolygonIcon } from '../Icon/Chains/PolygonIcon'
import { ChainIconOption, IconChainProps } from './IconChain.types'

const IconChain = React.memo((props: IconChainProps) => {
  const { icon } = props
  const commonProps: Pick<SvgIconOwnProps, 'fontSize' | 'color'> = {
    fontSize: 'small',
    color: 'inherit'
  }
  switch (icon) {
    case ChainIconOption.ARBITRUM:
      return <ArbitrumIcon {...commonProps} />
    case ChainIconOption.AVALANCHE:
      return <AvalancheIcon {...commonProps} />
    case ChainIconOption.BSC:
      return <BinanceIcon {...commonProps} />
    case ChainIconOption.ETHEREUM:
      return <EthereumIcon {...commonProps} />
    case ChainIconOption.FANTOM:
      return <FantomIcon {...commonProps} />
    case ChainIconOption.OPTIMISM:
      return <OptimismIcon {...commonProps} />
    case ChainIconOption.POLYGON:
      return <PolygonIcon {...commonProps} />
    default:
      return <></>
  }
})

export { IconChain }
