import { Meta, StoryObj } from "@storybook/react"
import { Message } from "./Message"

const meta: Meta<typeof Message> = {
  title: "Decentraland UI/Message",
  component: Message,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["error", "warning", "success", "info"],
    },
    visible: {
      control: { type: "boolean" },
    },
    dismissible: {
      control: { type: "boolean" },
    },
    content: {
      control: { type: "text" },
    },
    header: {
      control: { type: "text" },
    },
  },
}

export default meta
type Story = StoryObj<typeof Message>

export const Error: Story = {
  args: {
    variant: "error",
    visible: true,
    content: "An error occurred!",
    header: "Metamask error",
  },
}

export const Warning: Story = {
  args: {
    variant: "warning",
    visible: true,
    content: "A warning!",
    header: "Metamask warning",
  },
}

export const Success: Story = {
  args: {
    variant: "success",
    visible: true,
    content: "Success!",
    header: "Metamask success",
  },
}

export const Info: Story = {
  args: {
    variant: "info",
    visible: true,
    content: "Information message",
    header: "Info",
  },
}

export const Dismissible: Story = {
  args: {
    variant: "error",
    visible: true,
    content: "This message can be dismissed",
    header: "Dismissible Message",
    dismissible: true,
    onDismiss: () => alert("Message dismissed!"),
  },
}

export const WithoutHeader: Story = {
  args: {
    variant: "info",
    visible: true,
    content: "This message has no header",
  },
}

export const Hidden: Story = {
  args: {
    variant: "error",
    visible: false,
    content: "This message is hidden",
    header: "Hidden Message",
  },
}
