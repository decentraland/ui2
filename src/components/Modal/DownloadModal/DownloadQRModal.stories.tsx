import { DownloadQRModal } from './DownloadQRModal'
import qrAndroid from '../../../Assets/qr-android.svg'
import qrIos from '../../../Assets/qr-ios.svg'
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
          'The QR images are static SVGs — regenerate with `node scripts/generate-qr-codes.cjs` if URLs change. ' +
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
      description: 'Target platform — drives the title text'
    },
    qrImageUrl: {
      description: 'QR code image URL (static SVG, PNG, or data URI)'
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
    os: 'android',
    qrImageUrl: qrAndroid
  }
}

const IOS: Story = {
  name: 'iOS',
  args: {
    open: true,
    os: 'ios',
    qrImageUrl: qrIos
  }
}

const WithoutLogo: Story = {
  args: {
    open: true,
    os: 'android',
    qrImageUrl: qrAndroid,
    logoUrl: undefined
  }
}

// eslint-disable-next-line import/no-default-export
export default meta

export { Android, IOS, WithoutLogo }
