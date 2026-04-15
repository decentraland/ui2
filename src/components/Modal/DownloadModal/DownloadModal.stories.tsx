import { DownloadModal } from './DownloadModal'
import { DownloadModalProps } from './DownloadModal.types'
import type { Meta, StoryObj } from '@storybook/react'

const EPIC_GAMES_URL = 'https://store.epicgames.com/en-US/p/decentraland-b692fb'
const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=org.decentraland.godotexplorer'
const APP_STORE_URL = 'https://apps.apple.com/app/id6478403840'

const meta: Meta<DownloadModalProps> = {
  title: 'Decentraland UI/Download Modal',
  component: DownloadModal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Download modal for Decentraland. Shows platform-specific install options.\n\n' +
          '- **apple / windows**: Desktop layout with primary download button, Epic Games button, and "Also Available on" store badges (App Store + Google Play)\n' +
          '- **android / ios**: Mobile layout with a single store CTA button and total downloads stat'
      },
      story: {
        inline: false,
        iframeHeight: 100
      }
    }
  },
  argTypes: {
    os: {
      control: 'radio',
      options: ['apple', 'windows', 'android', 'ios'],
      description: 'Target platform — drives layout and primary button'
    },
    downloadUrl: {
      description: 'Primary download URL (OS-specific installer)'
    },
    epicUrl: {
      description: 'Epic Games store URL (desktop only)'
    },
    googlePlayUrl: {
      description: 'Google Play store URL'
    },
    appStoreUrl: {
      description: 'App Store URL (defaults to Decentraland iOS app)'
    },
    open: {
      control: 'boolean'
    }
  }
} satisfies Meta<typeof DownloadModal>

type Story = StoryObj<typeof meta>

const Apple: Story = {
  args: {
    open: true,
    os: 'apple',
    downloadUrl: 'https://explorer-artifacts.decentraland.org/launcher-rust/Decentraland_installer.dmg',
    epicUrl: EPIC_GAMES_URL,
    googlePlayUrl: GOOGLE_PLAY_URL,
    appStoreUrl: APP_STORE_URL
  }
}

const Windows: Story = {
  args: {
    open: true,
    os: 'windows',
    downloadUrl: 'https://explorer-artifacts.decentraland.org/launcher-rust/Decentraland_installer.exe',
    epicUrl: EPIC_GAMES_URL,
    googlePlayUrl: GOOGLE_PLAY_URL,
    appStoreUrl: APP_STORE_URL
  }
}

const MobileAndroid: Story = {
  args: {
    open: true,
    os: 'android',
    downloadUrl: GOOGLE_PLAY_URL,
    epicUrl: EPIC_GAMES_URL,
    googlePlayUrl: GOOGLE_PLAY_URL,
    appStoreUrl: APP_STORE_URL
  }
}

const MobileIOS: Story = {
  args: {
    open: true,
    os: 'ios',
    downloadUrl: APP_STORE_URL,
    epicUrl: EPIC_GAMES_URL,
    googlePlayUrl: GOOGLE_PLAY_URL,
    appStoreUrl: APP_STORE_URL
  }
}

// eslint-disable-next-line import/no-default-export
export default meta

export { Apple, Windows, MobileAndroid, MobileIOS }
