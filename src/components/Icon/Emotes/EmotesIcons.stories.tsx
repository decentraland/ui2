import { MuteIcon } from "./MuteIcon"
import { PropsIcon } from "./PropsIcon"
import { SoundIcon } from "./SoundIcon"
import { VolumeIcon } from "./VolumeIcon"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof MuteIcon> = {
  title: "Decentraland UI/Icons/Emotes",
  component: MuteIcon,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
}

type Story = StoryObj<typeof MuteIcon>

const Mute: Story = {}

const Props: Story = {
  render: () => <PropsIcon />,
}

const Sound: Story = {
  render: () => <SoundIcon />,
}

const Volume: Story = {
  render: () => <VolumeIcon />,
}

const AllEmotesIcons: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <MuteIcon />
      <PropsIcon />
      <SoundIcon />
      <VolumeIcon />
    </div>
  ),
}

const LargeEmotesIcons: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <MuteIcon fontSize="large" />
      <PropsIcon fontSize="large" />
      <SoundIcon fontSize="large" />
      <VolumeIcon fontSize="large" />
    </div>
  ),
}

// eslint-disable-next-line import/no-default-export
export default meta
export { Mute, Props, Sound, Volume, AllEmotesIcons, LargeEmotesIcons }
