import { Network } from "@dcl/schemas"

import { Typography } from "@mui/material"

import Mana from "./Mana"
import { ManaProps } from "./Mana.types"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<ManaProps> = {
  component: Mana,
  title: "Decentraland UI/Mana",
  tags: ["autodocs"],
  argTypes: {
    size: {
      description: "Size of the mana icon",
    },
    inline: {
      description: "Mana component should be displayed inline",
    },
    network: {
      description: "Network to display the mana icon",
      defaultValue: Network.ETHEREUM,
    },
    primary: {
      description: "Switch the color of the icon to primary",
    },
    showTooltip: {
      description: "Show tooltip on hover",
    },
  },
  render: (args) => <Mana {...args} />,
}

export default meta
type Story = StoryObj<ManaProps>

export const Symbol: Story = {
  args: {},
}

export const SymbolMana: Story = {
  name: "Symbol + MANA",
  args: { children: "MANA" },
}

export const SymbolVoted: Story = {
  name: "Total voted",
  args: { children: "MANA" },
  render: (args) => (
    <>
      <Typography>Total voted</Typography>
      <Mana {...args}>1,235,345</Mana>
    </>
  ),
}

export const SymbolSizes: Story = {
  name: "Sizes",
  args: { children: "1,000" },
  render: (args) => (
    <>
      <Mana {...args} size="large" />
      <Mana {...args} size="medium" />
      <Mana {...args} size="small" />
    </>
  ),
}

export const SymbolInline: Story = {
  name: "Inline",
  args: { children: "1,000", inline: true },
  render: (args) => (
    <p>
      You&apos;ve voted with <Mana {...args} />.
    </p>
  ),
}

export const SymbolMatic: Story = {
  name: "Matic",
  args: {
    children: "1,000",
    inline: true,
    network: Network.MATIC,
  },
  render: (args) => (
    <p>
      You deposited <Mana {...args} /> into Matic Network.
    </p>
  ),
}

export const SymbolMaticPrimary: Story = {
  name: "Matic primary",
  args: {
    children: "1,000",
    inline: true,
    network: Network.MATIC,
    primary: true,
  },
  render: (args) => (
    <p>
      You deposited <Mana {...args} /> into Matic Network.
    </p>
  ),
}

export const SymbolMaticSizes: Story = {
  name: "Matic sizes",
  args: {
    children: "1,000",
    network: Network.MATIC,
  },
  render: (args) => (
    <>
      <Mana {...args} size="large" />
      <Mana {...args} size="medium" />
      <Mana {...args} size="small" />
    </>
  ),
}

export const ManaTooltip: Story = {
  name: "Mana + Tooltip",
  args: {
    children: "1,000",
    network: Network.MATIC,
    showTooltip: true,
    size: "small",
  },
}
