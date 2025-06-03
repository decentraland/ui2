import Download from "@mui/icons-material/Download"
import { Box } from "@mui/material"
import { DownloadButton } from "./DownloadButton"
import { config } from "../../config"
import { CDNSource, getCDNRelease } from "../../modules/cdnReleases"
import { DownloadButtonProps } from "./DownloadButton.types"
import {
  DownloadButtonAppleIcon,
  DownloadButtonWindowsIcon,
} from "./DownloadButton.styled"
import type { Meta, StoryObj } from "@storybook/react"

const links = getCDNRelease(CDNSource.LAUNCHER)

const meta: Meta<DownloadButtonProps> = {
  component: DownloadButton,
  title: "Decentraland UI/Download Button",
  tags: ["autodocs"],
  argTypes: {
    href: {
      description: "URL to download",
      control: "select",
      options: [links!.Windows.amd64, links!.macOS.arm64, links!.macOS.amd64],
    },
    label: {
      description: "Button label text",
      defaultValue: "Download",
    },
    startIcon: {
      description: "Icon to show at start of button",
    },
    endIcon: {
      description: "Icon to show at end of button",
      control: "select",
      options: ["Windows", "macOS", "Download"],
    },
    onClick: {
      description: "Click handler",
    },
  },
  render: (args) => {
    const { endIcon, ...rest } = args
    const icon =
      endIcon === "Windows" ? (
        <DownloadButtonWindowsIcon />
      ) : endIcon === "macOS" ? (
        <DownloadButtonAppleIcon />
      ) : null
    return (
      <DownloadButton
        {...rest}
        endIcon={icon}
        startIcon={!icon && <Download />}
      />
    )
  },
}

type Story = StoryObj<DownloadButtonProps>

const Basic: Story = {
  name: "Basic",
  args: {
    href: config.get("DOWNLOAD_URL"),
    startIcon: <Download />,
  },
}

const WithOS: Story = {
  name: "With OS Icons",
  render: () => (
    <Box display="flex" gap={2}>
      <DownloadButton
        href={links!.Windows.amd64}
        endIcon={<DownloadButtonWindowsIcon />}
        onClick={() => {}}
      />
      <DownloadButton
        href={links!.macOS.arm64}
        endIcon={<DownloadButtonAppleIcon />}
        onClick={() => {}}
      />
    </Box>
  ),
}

// eslint-disable-next-line import/no-default-export
export default meta
export { Basic, WithOS }
