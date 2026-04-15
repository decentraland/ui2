import { DownloadModal } from './DownloadModal'
import { DOWNLOAD_URLS } from '../../../modules/downloadUrls'
import { DownloadModalProps } from './DownloadModal.types'
import type { Meta, StoryObj } from '@storybook/react'

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
    downloadUrl: DOWNLOAD_URLS.apple,
    epicUrl: DOWNLOAD_URLS.epic,
    googlePlayUrl: DOWNLOAD_URLS.googlePlay,
    appStoreUrl: DOWNLOAD_URLS.appStore
  }
}

const Windows: Story = {
  args: {
    open: true,
    os: 'windows',
    downloadUrl: DOWNLOAD_URLS.windows,
    epicUrl: DOWNLOAD_URLS.epic,
    googlePlayUrl: DOWNLOAD_URLS.googlePlay,
    appStoreUrl: DOWNLOAD_URLS.appStore
  }
}

const MobileAndroid: Story = {
  args: {
    open: true,
    os: 'android',
    downloadUrl: DOWNLOAD_URLS.googlePlay,
    epicUrl: DOWNLOAD_URLS.epic,
    googlePlayUrl: DOWNLOAD_URLS.googlePlay,
    appStoreUrl: DOWNLOAD_URLS.appStore
  }
}

const MobileIOS: Story = {
  args: {
    open: true,
    os: 'ios',
    downloadUrl: DOWNLOAD_URLS.appStore,
    epicUrl: DOWNLOAD_URLS.epic,
    googlePlayUrl: DOWNLOAD_URLS.googlePlay,
    appStoreUrl: DOWNLOAD_URLS.appStore
  }
}

// eslint-disable-next-line import/no-default-export
export default meta

export { Apple, Windows, MobileAndroid, MobileIOS }
