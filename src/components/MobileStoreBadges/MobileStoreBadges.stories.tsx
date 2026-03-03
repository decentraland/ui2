import { MobileStoreBadges } from './MobileStoreBadges'
import { MobileStoreBadgesProps } from './MobileStoreBadges.types'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<MobileStoreBadgesProps> = {
  title: 'Decentraland UI/Mobile Store Badges',
  component: MobileStoreBadges,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'MobileStoreBadges displays App Store and Google Play badges linking to the Decentraland mobile app.'
      }
    }
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'large'],
      description: 'Badge size',
      table: {
        type: { summary: '"small" | "large"' },
        defaultValue: { summary: 'small' }
      }
    },
    iosLabel: {
      control: 'text',
      description: 'Accessible label for the iOS badge link',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Download on the App Store' }
      }
    },
    androidLabel: {
      control: 'text',
      description: 'Accessible label for the Android badge link',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Get it on Google Play' }
      }
    },
    iosStoreUrl: {
      control: 'text',
      description: 'iOS store URL',
      table: {
        type: { summary: 'string' }
      }
    },
    androidStoreUrl: {
      control: 'text',
      description: 'Android store URL',
      table: {
        type: { summary: 'string' }
      }
    }
  }
} satisfies Meta<typeof MobileStoreBadges>

type Story = StoryObj<typeof meta>

const Small: Story = {
  args: {
    size: 'small'
  },
  parameters: {
    docs: {
      description: {
        story: 'Small badges (40px height) — default size'
      }
    }
  }
}

const Large: Story = {
  args: {
    size: 'large'
  },
  parameters: {
    docs: {
      description: {
        story: 'Large badges (48px height) — used inside modals'
      }
    }
  }
}

const CustomLabels: Story = {
  args: {
    size: 'small',
    iosLabel: 'Descargar en App Store',
    androidLabel: 'Disponible en Google Play'
  },
  parameters: {
    docs: {
      description: {
        story: 'Badges with custom accessible labels for i18n'
      }
    }
  }
}

// eslint-disable-next-line import/no-default-export
export default meta

export { Small, Large, CustomLabels }
