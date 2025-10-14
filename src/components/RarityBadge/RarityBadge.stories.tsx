import { Rarity } from "@dcl/schemas"
import { RarityBadge } from "./RarityBadge"
import { i18n as rarityBadgeI18n } from "./RarityBadge.i18n"
import { RarityBadgeProps } from "./RarityBadge.types"
import { RarityBadgeContainer } from "./RarityBadge.stories.styled"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<RarityBadgeProps> = {
  component: RarityBadge,
  title: "Decentraland UI/Rarity Badge",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  argTypes: {
    rarity: {
      description: "The rarity of the badge",
      control: "select",
      options: Rarity.getRarities(),
      defaultValue: Rarity.COMMON,
    },
    size: {
      description: "The size of the badge",
      control: "select",
      options: ["small", "medium"],
      defaultValue: "medium",
    },
    square: {
      description: "Whether the badge should have a square shape",
      control: "boolean",
      defaultValue: false,
    },
    withTooltip: {
      description: "Whether the badge should have a tooltip",
      control: "boolean",
      defaultValue: false,
    },
    onClick: {
      description: "The function to call when the badge is clicked",
      control: "function",
      defaultValue: () => console.log("Clicked!"),
    },
    i18n: {
      description: "The i18n object to use for the badge",
      control: "object",
      defaultValue: rarityBadgeI18n,
      table: {
        type: {
          summary: "Record<string, Record<Rarity, string>>",
          detail: JSON.stringify(rarityBadgeI18n, null, 2),
        },
      },
    },
  },
  render: (args) => <RarityBadge {...args} />,
}

type Story = StoryObj<RarityBadgeProps>

const Common: Story = {
  name: "Common",
  args: {
    rarity: Rarity.COMMON,
  },
}

const Uncommon: Story = {
  name: "Uncommon",
  args: {
    rarity: Rarity.UNCOMMON,
  },
}

const Rare: Story = {
  name: "Rare",
  args: {
    rarity: Rarity.RARE,
  },
}

const Epic: Story = {
  name: "Epic",
  args: {
    rarity: Rarity.EPIC,
  },
}

const Legendary: Story = {
  name: "Legendary",
  args: {
    rarity: Rarity.LEGENDARY,
  },
}

const Exotic: Story = {
  name: "Exotic",
  args: {
    rarity: Rarity.EXOTIC,
  },
}

const Mythic: Story = {
  name: "Mythic",
  args: {
    rarity: Rarity.MYTHIC,
  },
}

const Unique: Story = {
  name: "Unique",
  args: {
    rarity: Rarity.UNIQUE,
  },
}

const Square: Story = {
  name: "Square",
  args: {
    rarity: Rarity.EXOTIC,
    square: true,
  },
}

const WithTooltip: Story = {
  name: "With Tooltip",
  args: {
    rarity: Rarity.UNIQUE,
    withTooltip: true,
  },
}

const Medium: Story = {
  name: "Medium",
  render: () => {
    return (
      <RarityBadgeContainer>
        {Rarity.getRarities().map((rarity) => (
          <RarityBadge rarity={rarity as Rarity} key={rarity as string} />
        ))}
      </RarityBadgeContainer>
    )
  },
}

const Small: Story = {
  name: "Small",
  render: () => {
    return (
      <RarityBadgeContainer>
        {Rarity.getRarities().map((rarity) => (
          <RarityBadge
            rarity={rarity as Rarity}
            key={rarity as string}
            size="small"
          />
        ))}
      </RarityBadgeContainer>
    )
  },
}

const MediumSquare: Story = {
  name: "Medium Square",
  render: () => {
    return (
      <RarityBadgeContainer>
        {Rarity.getRarities().map((rarity) => (
          <RarityBadge
            rarity={rarity as Rarity}
            key={rarity as string}
            size="medium"
            square
          />
        ))}
      </RarityBadgeContainer>
    )
  },
}

const SmallSquare: Story = {
  name: "Small Square",
  render: () => {
    return (
      <RarityBadgeContainer>
        {Rarity.getRarities().map((rarity) => (
          <RarityBadge
            rarity={rarity as Rarity}
            key={rarity as string}
            size="small"
            square
          />
        ))}
      </RarityBadgeContainer>
    )
  },
}

// eslint-disable-next-line import/no-default-export
export default meta
export {
  Common,
  Uncommon,
  Rare,
  Epic,
  Legendary,
  Exotic,
  Mythic,
  Unique,
  Square,
  WithTooltip,
  Medium,
  Small,
  MediumSquare,
  SmallSquare,
}
