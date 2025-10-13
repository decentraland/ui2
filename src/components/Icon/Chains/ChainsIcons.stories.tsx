import { ArbitrumIcon } from "./ArbitrumIcon"
import { AvalancheIcon } from "./AvalancheIcon"
import { BinanceIcon } from "./BinanceIcon"
import { EthereumIcon } from "./EthereumIcon"
import { FantomIcon } from "./FantomIcon"
import { OptimismIcon } from "./OptimismIcon"
import { PolygonIcon } from "./PolygonIcon"
import { IconsContainer } from "../Icons.stories.styled"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof ArbitrumIcon> = {
  title: "Decentraland UI/Icons/Chains",
  component: ArbitrumIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

type Story = StoryObj<typeof ArbitrumIcon>

const Arbitrum: Story = {}

const Avalanche: Story = {
  render: () => <AvalancheIcon />,
}

const Binance: Story = {
  render: () => <BinanceIcon />,
}

const Ethereum: Story = {
  render: () => <EthereumIcon />,
}

const Fantom: Story = {
  render: () => <FantomIcon />,
}

const Optimism: Story = {
  render: () => <OptimismIcon />,
}

const Polygon: Story = {
  render: () => <PolygonIcon />,
}

const AllChainsIcons: Story = {
  render: () => (
    <IconsContainer>
      <ArbitrumIcon />
      <AvalancheIcon />
      <BinanceIcon />
      <EthereumIcon />
      <FantomIcon />
      <OptimismIcon />
      <PolygonIcon />
    </IconsContainer>
  ),
}

const LargeChainsIcons: Story = {
  render: () => (
    <IconsContainer>
      <ArbitrumIcon fontSize="large" />
      <AvalancheIcon fontSize="large" />
      <BinanceIcon fontSize="large" />
      <EthereumIcon fontSize="large" />
      <FantomIcon fontSize="large" />
      <OptimismIcon fontSize="large" />
      <PolygonIcon fontSize="large" />
    </IconsContainer>
  ),
}

// eslint-disable-next-line import/no-default-export
export default meta
export {
  Arbitrum,
  Avalanche,
  Binance,
  Ethereum,
  Fantom,
  Optimism,
  Polygon,
  AllChainsIcons,
  LargeChainsIcons,
}
