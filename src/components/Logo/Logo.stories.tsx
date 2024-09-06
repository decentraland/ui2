import { SvgIconProps } from "@mui/material"
import { Logo } from "./Logo"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta = {
  component: Logo,
  title: "Decentraland UI/Logo",
  render: () => <Logo />,
}

type Story = StoryObj<SvgIconProps>

const Decentraland: Story = {}

// eslint-disable-next-line import/no-default-export
export default meta
export { Decentraland }
