enum ChainIconOption {
  ETHEREUM = 'ethereum',
  POLYGON = 'polygon',
  ARBITRUM = 'arbitrum',
  OPTIMISM = 'optimism',
  FANTOM = 'fantom',
  BSC = 'bsc',
  AVALANCHE = 'avalanche'
}

type IconChainProps = {
  icon?: ChainIconOption
}

export { ChainIconOption, IconChainProps }
