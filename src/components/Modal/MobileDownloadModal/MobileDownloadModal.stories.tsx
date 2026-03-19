import { MobileDownloadModal } from './MobileDownloadModal'
import { MobileDownloadModalProps } from './MobileDownloadModal.types'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<MobileDownloadModalProps> = {
  title: 'Decentraland UI/Mobile Download Modal',
  component: MobileDownloadModal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'MobileDownloadModal prompts mobile users to download the Decentraland app.'
      }
    }
  },
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Controls the visibility of the modal',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    title: {
      control: 'text',
      description: 'Modal title text',
      table: {
        type: { summary: 'string' }
      }
    },
    description: {
      control: 'text',
      description: 'Modal description text',
      table: {
        type: { summary: 'string' }
      }
    },
    platform: {
      control: 'radio',
      options: ['android', 'ios'],
      description: 'Target mobile platform',
      table: {
        type: { summary: '"android" | "ios"' }
      }
    },
    onClose: {
      action: 'onClose',
      description: 'Callback when modal is closed',
      table: {
        type: { summary: 'function' }
      }
    }
  },
  args: {
    open: false
  }
} satisfies Meta<typeof MobileDownloadModal>

type Story = StoryObj<typeof meta>

const AndroidPlatform: Story = {
  args: {
    title: 'Download Decentraland to jump in',
    description: 'To Jump in, you\u2019ll need to download the Decentraland app.',
    platform: 'android',
    open: true
  }
}

const IOSPlatform: Story = {
  args: {
    title: 'Download Decentraland to jump in',
    description: 'Switch to a computer to download.',
    platform: 'ios',
    open: true
  }
}

// eslint-disable-next-line import/no-default-export
export default meta

export { AndroidPlatform, IOSPlatform }
