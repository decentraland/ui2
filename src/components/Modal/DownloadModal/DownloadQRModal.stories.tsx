import { DownloadQRModal } from './DownloadQRModal'
import { DownloadQRModalProps } from './DownloadQRModal.types'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<DownloadQRModalProps> = {
  title: 'Decentraland UI/Download QR Modal',
  component: DownloadQRModal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Modal that displays a QR code linking to the App Store or Google Play store. ' +
          'Used on desktop to let users scan and download the mobile app. ' +
          'QR images are built-in for iOS and Android — no need to pass `qrImageUrl` unless overriding. ' +
          'A DCL logo is overlaid at the center of the QR by default (`dcl-logo-qr.svg`).'
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
      options: ['android', 'ios'],
      description: 'Target platform — drives the title text and default QR code'
    },
    qrImageUrl: {
      description: 'Optional QR code image URL override. Built-in QRs are used by default.'
    },
    logoUrl: {
      description: 'Optional logo overlaid at the center of the QR. Defaults to DCL logo.'
    },
    open: {
      control: 'boolean'
    }
  }
} satisfies Meta<typeof DownloadQRModal>

type Story = StoryObj<typeof meta>

const Android: Story = {
  args: {
    open: true,
    os: 'android'
  }
}

const IOS: Story = {
  name: 'iOS',
  args: {
    open: true,
    os: 'ios'
  }
}

const WithoutLogo: Story = {
  args: {
    open: true,
    os: 'android',
    logoUrl: undefined
  }
}

// eslint-disable-next-line import/no-default-export
export default meta

export { Android, IOS, WithoutLogo }
