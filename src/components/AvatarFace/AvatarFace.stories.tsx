import { Typography } from "@mui/material"
import type { Meta, StoryObj } from "@storybook/react"
import Mana from "../Mana/Mana"
import AvatarFace from "./AvatarFace"
import { avatar } from "../../data/avatar"
import { AvatarFaceProps } from "./AvatarFace.types"

const meta: Meta<AvatarFaceProps> = {
  component: AvatarFace,
  title: "Decentraland UI/AvatarFace",
  tags: ["autodocs"],
  argTypes: {
    size: {
      description: "Size of the avatar face",
    },
    inline: {
      description: "Avatar component should be displayed inline",
    },
  },
  render: (args) => <AvatarFace {...args} />,
}

export default meta
type Story = StoryObj<AvatarFaceProps>

export const Guest: Story = {
  args: {},
}

export const Simple: Story = {
  args: {
    size: "large",
    avatar,
  },
}

export const Sizes: Story = {
  args: {
    avatar,
  },
  render: (args) => (
    <>
      <AvatarFace size="tiny" {...args} />
      <AvatarFace size="small" {...args} />
      <AvatarFace size="medium" {...args} />
      <AvatarFace size="large" {...args} />
      <AvatarFace size="responsive" {...args} />
    </>
  ),
}

export const InParagraph: Story = {
  name: "In a paragraph",
  args: {
    avatar,
    inline: true,
    size: "tiny",
  },
  render: (args) => (
    <Typography>
      You've transferred <Mana inline>1,000</Mana> to <AvatarFace {...args} />{" "}
      <strong>cazala</strong>
    </Typography>
  ),
}
