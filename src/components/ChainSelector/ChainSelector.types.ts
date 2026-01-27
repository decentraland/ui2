import { ChainId } from '@dcl/schemas'

type ChainSelectori18n = {
  title: string
  connected: React.ReactNode
  confirmInWallet: React.ReactNode
}

type ChainSelectorProps = {
  selectedChain: ChainId
  chainBeingConfirmed?: ChainId
  chains: ChainId[]
  onSelectChain: (chain: ChainId) => void
  i18n: ChainSelectori18n
}

const ChainNameIconMap = {
  [ChainId.ETHEREUM_MAINNET]: 'ethereum',
  [ChainId.ETHEREUM_SEPOLIA]: 'ethereum',
  [ChainId.MATIC_MAINNET]: 'polygon',
  [ChainId.MATIC_MUMBAI]: 'polygon',
  [ChainId.MATIC_AMOY]: 'polygon',
  [ChainId.ARBITRUM_MAINNET]: 'arbitrum',
  [ChainId.OPTIMISM_MAINNET]: 'optimism',
  [ChainId.FANTOM_MAINNET]: 'fantom',
  [ChainId.BSC_MAINNET]: 'bsc',
  [ChainId.AVALANCHE_MAINNET]: 'avalanche'
}

export { ChainNameIconMap }
export type { ChainSelectori18n, ChainSelectorProps }
