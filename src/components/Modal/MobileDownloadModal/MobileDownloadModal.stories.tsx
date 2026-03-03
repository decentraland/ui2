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
        component: 'MobileDownloadModal prompts mobile users to download the Decentraland app from the App Store or Google Play.'
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
    badgeSize: {
      control: 'radio',
      options: ['small', 'large'],
      description: 'Size of the store badges',
      table: {
        type: { summary: '"small" | "large"' },
        defaultValue: { summary: 'large' }
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

const Default: Story = {
  args: {
    title: 'Download Decentraland to Jump In',
    description: "To jump in, you'll need to download the Decentraland app",
    open: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Default modal with standard messaging and large store badges'
      }
    }
  }
}

const SmallBadges: Story = {
  args: {
    title: 'Get the Mobile App',
    description: 'Experience Decentraland on your phone',
    badgeSize: 'small',
    open: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal with small store badges'
      }
    }
  }
}

// eslint-disable-next-line import/no-default-export
export default meta

export { Default, SmallBadges }
