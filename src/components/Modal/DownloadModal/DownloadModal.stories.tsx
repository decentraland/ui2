import { DownloadModal } from "./DownloadModal"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof DownloadModal> = {
  component: DownloadModal,
  title: "Decentraland UI/Modal/DownloadModal",
  tags: ["autodocs"],
}

type Story = StoryObj<typeof DownloadModal>

const Default: Story = {
  args: {
    open: true,
  },
}

const WithCustomTitle: Story = {
  args: {
    open: true,
    title: "Custom Download Title",
  },
}

const WithCustomDescription: Story = {
  args: {
    open: true,
    title: "Custom Download Title",
    description: "Custom download description text",
  },
}

const WithCustomButtonLabel: Story = {
  args: {
    open: true,
    title: "Custom Download Title",
    description: "Custom download description text",
    buttonLabel: "Download Now",
  },
}

const WithCustomDownloadHandler: Story = {
  args: {
    open: true,
    onDownloadClick: () => console.log("Download clicked"),
  },
}

// eslint-disable-next-line import/no-default-export
export default meta
export {
  Default,
  WithCustomTitle,
  WithCustomDescription,
  WithCustomButtonLabel,
  WithCustomDownloadHandler,
}
