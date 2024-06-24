import { Typography } from "@mui/material"
import { AvatarFace } from "./AvatarFace"
import { avatar } from "../../data/avatar"
import { Mana } from "../Mana"
import { AvatarFaceProps } from "./AvatarFace.types"
import type { Meta, StoryObj } from "@storybook/react"

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

// eslint-disable-next-line import/no-default-export
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
      You&apos;ve transferred <Mana inline>1,000</Mana> to{" "}
      <AvatarFace {...args} /> <strong>cazala</strong>
    </Typography>
  ),
}
