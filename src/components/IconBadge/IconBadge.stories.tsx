import { IconBadge } from "./IconBadge"
import { ManaEthIcon } from "../Icon"
import { IconBadgeIcon, IconBadgeProps } from "./IconBadge.types"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<IconBadgeProps> = {
  component: IconBadge,
  title: "Decentraland UI/IconBadge",
  tags: ["autodocs"],
  argTypes: {
    inline: {
      description: "IconBadge component should be displayed inline",
    },
    icon: {
      description: "Icon used in component",
    },
  },
  render: (args) => <IconBadge {...args} />,
}

// eslint-disable-next-line import/no-default-export
export default meta
type Story = StoryObj<IconBadgeProps>

export const WithIcon: Story = {
  name: "With Icon",
  args: {
    icon: IconBadgeIcon.Utility,
    text: "Utility",
    onClick: () => console.log("Clicked!"),
  },
}

export const WithCustomIcon: Story = {
  name: "With Custom Icon",
  args: {
    children: <ManaEthIcon />,
    text: "Custom Icon Component",
    onClick: () => console.log("Clicked!"),
  },
}

export const WithoutText: Story = {
  name: "Without Text",
  args: {
    icon: IconBadgeIcon.Tiara,
    onClick: () => console.log("Clicked!"),
  },
}

export const WithoutIcon: Story = {
  name: "Without Icon",
  args: {
    text: "No Icon",
    onClick: () => console.log("Clicked!"),
  },
}
