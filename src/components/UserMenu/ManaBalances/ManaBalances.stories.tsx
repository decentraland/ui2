import { Network } from "@dcl/schemas"
import { ManaBalances } from "./ManaBalances"
import { ManaBalancesProps } from "./ManaBalances.types"
import type { Meta, StoryObj } from "@storybook/react"

const balance = {
  [Network.ETHEREUM]: 8888.88,
  [Network.MATIC]: 8888.88,
}

const meta: Meta<ManaBalancesProps> = {
  component: ManaBalances,
  title: "Decentraland UI/Mana Balances",
  tags: ["autodocs"],
  argTypes: {
    manaBalances: {
      description: "Balance of MANA in different networks",
      control: {
        type: "object",
      },
      options: [balance],
    },
  },
  render: (args) => <ManaBalances manaBalances={balance} {...args} />,
}

type Story = StoryObj<ManaBalancesProps>

// eslint-disable-next-line import/no-default-export
export default meta

export const Simple: Story = {
  args: {},
}
