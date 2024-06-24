import { Network } from "@dcl/schemas"

type NetworksNames = {
  [key in Network]: string
}

const networksNames: NetworksNames = {
  [Network.ETHEREUM]: "Ethereum",
  [Network.MATIC]: "Polygon",
  [Network.ARBITRUM]: "Arbitrum",
  [Network.AVALANCHE]: "Avalanche",
  [Network.FANTOM]: "Fantom",
  [Network.BSC]: "Binance Smart Chain",
  [Network.OPTIMISM]: "Optimism",
}

const getNetworkName = (network: Network): string | undefined =>
  networksNames[network]

const getNetworkMANADescription = (network: Network): string | undefined => {
  const networkName = getNetworkName(network)
  return networkName ? `${networkName} MANA` : `MANA`
}

export {
  getNetworkMANADescription,
  getNetworkName,
  NetworksNames,
  networksNames,
}
