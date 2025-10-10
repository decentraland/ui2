import { DiscordIcon } from "./DiscordIcon"
import { GitHubIcon } from "./GitHubIcon"
import { RedditIcon } from "./RedditIcon"
import { XIcon } from "./XIcon"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof DiscordIcon> = {
  title: "Decentraland UI/Icons/Social",
  component: DiscordIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

type Story = StoryObj<typeof DiscordIcon>

const Discord: Story = {}

const GitHub: Story = {
  render: () => <GitHubIcon />,
}

const Reddit: Story = {
  render: () => <RedditIcon />,
}

const X: Story = {
  render: () => <XIcon />,
}

const AllSocialIcons: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <DiscordIcon />
      <RedditIcon />
      <GitHubIcon />
      <XIcon />
    </div>
  ),
}

const LargeSocialIcons: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <DiscordIcon fontSize="large" />
      <RedditIcon fontSize="large" />
      <GitHubIcon fontSize="large" />
      <XIcon fontSize="large" />
    </div>
  ),
}

// eslint-disable-next-line import/no-default-export
export default meta
export { Discord, GitHub, Reddit, X, AllSocialIcons, LargeSocialIcons }
