import { AppleIcon } from "./AppleIcon"
import { CreditsIcon } from "./CreditsIcon"
import { JumpInIcon } from "./JumpInIcon"
import { LocationIcon } from "./LocationIcon"
import { ManaEthIcon } from "./ManaEthIcon"
import { ManaMaticIcon } from "./ManaMaticIcon"
import { MintIcon } from "./MintIcon"
import { PlacesIcon } from "./PlacesIcon"
import { SparklesIcon } from "./SparklesIcon"
import { UtilityIcon } from "./UtilityIcon"
import { WindowsIcon } from "./WindowsIcon"
import { IconsContainer } from "./Icons.stories.styled"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof AppleIcon> = {
  title: "Decentraland UI/Icons/Misc",
  component: AppleIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

type Story = StoryObj<typeof AppleIcon>

const Apple: Story = {}

const Credits: Story = {
  render: () => <CreditsIcon />,
}

const JumpIn: Story = {
  render: () => <JumpInIcon />,
}

const Location: Story = {
  render: () => <LocationIcon />,
}

const ManaEth: Story = {
  render: () => <ManaEthIcon />,
}

const ManaMatic: Story = {
  render: () => <ManaMaticIcon />,
}

const Places: Story = {
  render: () => <PlacesIcon />,
}

const Sparkles: Story = {
  render: () => <SparklesIcon />,
}

const Utility: Story = {
  render: () => <UtilityIcon />,
}

const Windows: Story = {
  render: () => <WindowsIcon />,
}

const Mint: Story = {
  render: () => <MintIcon />,
}

const AllIcons: Story = {
  render: () => (
    <IconsContainer>
      <AppleIcon />
      <CreditsIcon />
      <JumpInIcon />
      <LocationIcon />
      <ManaEthIcon />
      <ManaMaticIcon />
      <PlacesIcon />
      <SparklesIcon />
      <UtilityIcon />
      <WindowsIcon />
      <MintIcon />
    </IconsContainer>
  ),
}

const LargeIcons: Story = {
  render: () => (
    <IconsContainer>
      <AppleIcon fontSize="large" />
      <CreditsIcon fontSize="large" />
      <JumpInIcon fontSize="large" />
      <LocationIcon fontSize="large" />
      <ManaEthIcon fontSize="large" />
      <ManaMaticIcon fontSize="large" />
      <PlacesIcon fontSize="large" />
      <SparklesIcon fontSize="large" />
      <UtilityIcon fontSize="large" />
      <WindowsIcon fontSize="large" />
      <MintIcon fontSize="large" />
    </IconsContainer>
  ),
}

// eslint-disable-next-line import/no-default-export
export default meta
export {
  Apple,
  Credits,
  JumpIn,
  Location,
  ManaEth,
  ManaMatic,
  Places,
  Sparkles,
  Utility,
  Windows,
  Mint,
  AllIcons,
  LargeIcons,
}
