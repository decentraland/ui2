import { ChainId } from "@dcl/schemas"
import { ChainSelector } from "./ChainSelector"
import { ChainSelectorProps } from "./ChainSelector.types"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta = {
  component: ChainSelector,
  title: "Decentraland UI/Chain Selector",
  argTypes: {
    chains: {
      table: {
        disable: true,
      },
    },
    i18n: {
      description: "Internationalization",
      control: "object",
    },
  },
  render: (args) => (
    <ChainSelector
      onSelectChain={(chain) => console.log(chain)}
      selectedChain={ChainId.ETHEREUM_MAINNET}
      chains={[
        ChainId.ETHEREUM_MAINNET,
        ChainId.MATIC_MAINNET,
        ChainId.ARBITRUM_MAINNET,
        ChainId.OPTIMISM_MAINNET,
        ChainId.BSC_MAINNET,
        ChainId.FANTOM_MAINNET,
        ChainId.AVALANCHE_MAINNET,
      ]}
      i18n={{
        title: "Select Network",
        connected: "Connected",
        confirmInWallet: "Confirm in wallet",
      }}
      {...args}
    />
  ),
}

type Story = StoryObj<ChainSelectorProps>

const Simple: Story = {}
const Confirmed: Story = {
  name: "With chain being confirmed",
  args: {
    chainBeingConfirmed: ChainId.MATIC_MAINNET,
  },
}

// eslint-disable-next-line import/no-default-export
export default meta
export { Simple, Confirmed }
