import { AddressProps } from "./Address.types"
import { Address } from "./"
import type { Meta, StoryObj } from "@storybook/react"

const address = "0x0F5D2fB29fb7d3CFeE444a200298f468908cC942"

const meta: Meta<AddressProps> = {
  component: Address,
  title: "Decentraland UI/Address",
  tags: ["autodocs"],
  argTypes: {
    value: {
      description: "The Ethereum address to display (required)",
      defaultValue: "",
    },
    strong: {
      description: "Bold the address text",
      defaultValue: false,
    },
    shorten: {
      description: "Shorten the address for display",
      defaultValue: true,
    },
    tooltip: {
      description: "Show full address on hover",
    },
    showCopyButton: {
      description: "Show a copy-to-clipboard button",
      defaultValue: false,
    },
  },
  render: (args) => <Address {...args} />,
}

type Story = StoryObj<AddressProps>

const FullAddress: Story = {
  name: "Full Address",
  args: {
    value: address,
    shorten: false,
  },
}

const ShortAddress: Story = {
  name: "Short Address",
  args: {
    value: address,
    shorten: true,
  },
}

const StrongStyleAddress: Story = {
  name: "Strong Style Address",
  args: {
    value: address,
    strong: true,
  },
}

const WithTooltip: Story = {
  name: "With Tooltip",
  args: {
    value: address,
    tooltip: true,
  },
}

const WithCopyButton: Story = {
  name: "With Copy Button",
  args: {
    value: address,
    showCopyButton: true,
  },
}

// eslint-disable-next-line import/no-default-export
export default meta
export {
  FullAddress,
  ShortAddress,
  StrongStyleAddress,
  WithTooltip,
  WithCopyButton,
}
