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

const Simple: Story = {
  args: {},
}

const WithCredits: Story = {
  args: {
    creditsBalance: {
      balance: 100,
      expiresAt: Date.now() + 1000 * 60 * 60 * 24 * 30,
    },
    i18n: {
      getCredits: "Earn Credits",
      creditsExpiringSoon: "Expiring soon",
      creditsExpiringIn: (value: string) => `Expiring in ${value} days`,
      creditsValue: "(1 Credit = 1 MANA in value)",
    },
  },
}

const WithCreditsExpiringSoon: Story = {
  args: {
    creditsBalance: {
      balance: 100,
      expiresAt: Date.now() + 1000 * 60 * 60 * 24 * 3,
    },
    i18n: {
      getCredits: "Earn Credits",
      creditsExpiringSoon: "Expiring soon",
      creditsExpiringIn: (value: string) => `Expiring in ${value} days`,
      creditsValue: "(1 Credit = 1 MANA in value)",
    },
  },
}

const WithNoCredits: Story = {
  args: {
    creditsBalance: {
      balance: 0,
      expiresAt: Date.now() + 1000 * 60 * 60 * 24 * 30,
    },
    i18n: {
      getCredits: "Earn Credits",
      creditsExpiringSoon: "Expiring soon",
      creditsExpiringIn: (value: string) => `Expiring in ${value} days`,
      creditsValue: "(1 Credit = 1 MANA in value)",
    },
  },
}

export { Simple, WithCredits, WithNoCredits, WithCreditsExpiringSoon }

// eslint-disable-next-line import/no-default-export
export default meta
