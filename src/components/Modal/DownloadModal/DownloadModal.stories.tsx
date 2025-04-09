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
    title: "Default title",
    description: "Default description text",
    buttonLabel: "Default button label",
  },
}

const WithCustomTexts: Story = {
  args: {
    open: true,
    title: "Custom Download Title",
    description: "Custom download description text",
    buttonLabel: "Custom button label",
  },
}

const WithCustomDownloadHandler: Story = {
  args: {
    open: true,
    title: "Download Title",
    description: "download description text",
    buttonLabel: "Download Now",
    onDownloadClick: () => console.log("Download clicked"),
  },
}

// eslint-disable-next-line import/no-default-export
export default meta
export { Default, WithCustomTexts, WithCustomDownloadHandler }
