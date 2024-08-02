import { Typography } from "@mui/material"
import { Blockie } from "./Blockie"
import { shorten } from "../AddressField/utils"
import { Mana } from "../Mana"
import { BlockieProps } from "./Blockie.types"
import type { Meta, StoryObj } from "@storybook/react"

const address = "0x0F5D2fB29fb7d3CFeE444a200298f468908cC942"

const meta: Meta<BlockieProps> = {
  component: Blockie,
  title: "Decentraland UI/Blockie",
  tags: ["autodocs"],
  argTypes: {
    seed: {
      description: "Seed used to generate icon data",
      defaultValue: "",
    },
    color: {
      description: "Icon color",
      defaultValue: "#e449c2",
    },
    spotcolor: {
      description:
        "Color that may appear in each of the pixels with a 13% chance",
      defaultValue: "#e449c2",
    },
    bgcolor: {
      description: "Background color",
      defaultValue: "#3149de",
    },
    size: {
      description: "width/height of the icon in blocks",
      defaultValue: 6,
    },
    scale: {
      description: "width/height of each block in pixels",
      defaultValue: 6,
    },
    className: {
      description: "Custom class name",
      defaultValue: "",
    },
  },
  render: (args) => <Blockie {...args} />,
}

type Story = StoryObj<BlockieProps>

const Single: Story = {
  name: "Single",
  args: {
    seed: address,
  },
}

const Scales: Story = {
  name: "Scales",
  render: () => (
    <>
      <Blockie seed={address} scale={2} />
      <Blockie seed={address} scale={3} />
      <Blockie seed={address} scale={5} />
      <Blockie seed={address} scale={8} />
      <Blockie seed={address} scale={13} />
      <Blockie seed={address} scale={21} />
    </>
  ),
}

const InAParagraph: Story = {
  name: "In a paragraph",
  render: () => (
    <Typography>
      You have transferred <Mana inline>1,000</Mana> to{" "}
      <Blockie scale={3} seed={address}>
        {shorten(address)}
        {/* <Address value={address} strong /> */}
      </Blockie>
      .
    </Typography>
  ),
}

// eslint-disable-next-line import/no-default-export
export default meta
export { Single, Scales, InAParagraph }
