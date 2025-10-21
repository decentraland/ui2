import { Rarity } from "@dcl/schemas"
import { AssetImage } from "./AssetImage"
import { item } from "../../data/item"
import { AssetImageProps } from "./AssetImage.types"
import { AssetImageContainer } from "./AssetImage.stories.styled"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<AssetImageProps> = {
  component: AssetImage,
  title: "Decentraland UI/Asset Image",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    rarity: {
      control: "select",
      options: Rarity.getRarities(),
      defaultValue: item.rarity,
      description: "The rarity of the asset",
    },
    name: {
      control: "text",
      defaultValue: item.name,
      description: "The name of the asset",
    },
    src: {
      control: "text",
      defaultValue: item.thumbnail,
      description: "The source of the asset",
    },
  },
  render: (args) => (
    <AssetImageContainer>
      <AssetImage {...args} />
    </AssetImageContainer>
  ),
}

type Story = StoryObj<AssetImageProps>

const Default: Story = {
  name: "Default",
  args: {
    src: item.thumbnail,
    name: item.name,
    rarity: item.rarity,
  },
}

// eslint-disable-next-line import/no-default-export
export default meta
export { Default }
