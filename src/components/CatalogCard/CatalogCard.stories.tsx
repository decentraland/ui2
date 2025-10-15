import { Typography } from "@mui/material"
import { CatalogCard } from "./CatalogCard"
import { item } from "../../data/item"
import { MintIcon } from "../Icon"
import { CatalogCardProps } from "./CatalogCard.types"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<CatalogCardProps> = {
  component: CatalogCard,
  title: "Decentraland UI/Catalog Card",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
}

type Story = StoryObj<CatalogCardProps>

const Default: Story = {
  name: "Default",
  args: {
    asset: item,
    imageSrc: item.thumbnail,
    action: "Buy directly from creator",
    actionIcon: <MintIcon fontSize="small" />,
    extraInformation: <Typography variant="body2">1 listing</Typography>,
    notForSale: false,
    price: "10",
    owners: "3 owners",
  },
}

// eslint-disable-next-line import/no-default-export
export default meta
export { Default }
