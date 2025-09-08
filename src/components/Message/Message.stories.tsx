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

type Story = StoryObj<typeof Message>

const Error: Story = {
  args: {
    variant: "error",
    visible: true,
    content: "An error occurred!",
    header: "Metamask error",
  },
}

const Warning: Story = {
  args: {
    variant: "warning",
    visible: true,
    content: "A warning!",
    header: "Metamask warning",
  },
}

const Success: Story = {
  args: {
    variant: "success",
    visible: true,
    content: "Success!",
    header: "Metamask success",
  },
}

const Info: Story = {
  args: {
    variant: "info",
    visible: true,
    content: "Information message",
    header: "Info",
  },
}

const Dismissible: Story = {
  args: {
    variant: "error",
    visible: true,
    content: "This message can be dismissed",
    header: "Dismissible Message",
    dismissible: true,
    onDismiss: () => alert("Message dismissed!"),
  },
}

const WithoutHeader: Story = {
  args: {
    variant: "info",
    visible: true,
    content: "This message has no header",
  },
}

const Hidden: Story = {
  args: {
    variant: "error",
    visible: false,
    content: "This message is hidden",
    header: "Hidden Message",
  },
}

// eslint-disable-next-line import/no-default-export
export default meta
export { Error, Warning, Success, Info, Dismissible, WithoutHeader, Hidden }
