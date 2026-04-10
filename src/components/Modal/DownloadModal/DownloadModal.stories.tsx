import { DownloadModal } from './DownloadModal'
import { DownloadModalProps } from './DownloadModal.types'
import type { Meta, StoryObj } from '@storybook/react'

const EPIC_GAMES_URL = 'https://store.epicgames.com/en-US/p/decentraland-b692fb'
const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=org.decentraland.godotexplorer'

const meta: Meta<DownloadModalProps> = {
  title: 'Decentraland UI/Download Modal',
  component: DownloadModal,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof DownloadModal>

type Story = StoryObj<typeof meta>

const Apple: Story = {
  args: {
    open: true,
    os: 'apple',
    downloadUrl: 'https://explorer-artifacts.decentraland.org/launcher-rust/Decentraland_installer.dmg',
    epicUrl: EPIC_GAMES_URL,
    googlePlayUrl: GOOGLE_PLAY_URL
  }
}

const Windows: Story = {
  args: {
    open: true,
    os: 'windows',
    downloadUrl: 'https://explorer-artifacts.decentraland.org/launcher-rust/Decentraland_installer.exe',
    epicUrl: EPIC_GAMES_URL,
    googlePlayUrl: GOOGLE_PLAY_URL
  }
}

// eslint-disable-next-line import/no-default-export
export default meta

export { Apple, Windows }
