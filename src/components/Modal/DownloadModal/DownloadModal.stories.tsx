import { DownloadModal } from "./DownloadModal"
import { DownloadModalProps } from "./DownloadModal.types"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<DownloadModalProps> = {
  title: "Decentraland UI/Download Modal",
  component: DownloadModal,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "DownloadModal is used to prompt users to download the Decentraland app when they try to jump in without having the launcher installed.",
      },
    },
  },
  argTypes: {
    open: {
      control: "boolean",
      description: "Controls the visibility of the modal",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    title: {
      control: "text",
      description: "Modal title text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Download Decentraland" },
      },
    },
    description: {
      control: "text",
      description: "Modal description text",
      table: {
        type: { summary: "string" },
      },
    },
    buttonLabel: {
      control: "text",
      description: "Download button label",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Download Now" },
      },
    },
    onClose: {
      action: "onClose",
      description: "Callback when modal is closed",
      table: {
        type: { summary: "function" },
      },
    },
    onDownloadClick: {
      action: "onDownloadClick",
      description: "Callback when download button is clicked",
      table: {
        type: { summary: "function" },
      },
    },
  },
  args: {
    open: false,
  },
} satisfies Meta<typeof DownloadModal>

type Story = StoryObj<typeof meta>

const Default: Story = {
  args: {
    title: "Download Decentraland",
    description: "To jump in, you'll need to download the Decentraland app",
    buttonLabel: "Download Now",
    open: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Default modal configuration with standard messaging",
      },
    },
  },
}

const CustomContent: Story = {
  args: {
    open: true,
    title: "Get Started with Decentraland",
    description: "Experience the metaverse by downloading our app",
    buttonLabel: "Get the App",
  },
  parameters: {
    docs: {
      description: {
        story: "Modal with custom content and messaging",
      },
    },
  },
  render: (args) => {
    return <DownloadModal {...args} />
  },
}

const WithActions: Story = {
  args: {
    ...Default.args,
    onDownloadClick: () =>
      window.open("https://decentraland.org/download", "_blank"),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example with custom download handler that opens the download page in a new tab",
      },
    },
  },
  render: (args) => {
    return <DownloadModal {...args} />
  },
}

const DirectDownload: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Modal without custom handler - will try direct download first, fallback to default download page if not possible",
      },
    },
  },
  render: (args) => {
    return <DownloadModal {...args} />
  },
}

// eslint-disable-next-line import/no-default-export
export default meta

export { Default, CustomContent, WithActions, DirectDownload }
