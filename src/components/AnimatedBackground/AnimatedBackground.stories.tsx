import { Box } from '@mui/material'
import { AnimatedBackground } from './AnimatedBackground'
import { AnimatedBackgroundProps } from './AnimatedBackground.types'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<AnimatedBackgroundProps> = {
  title: 'Decentraland UI/Animated Background',
  component: AnimatedBackground,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Animated WebGL background with a gradient shader and overlay texture. Falls back to a static image when WebGL is not available.'
      }
    }
  },
  decorators: [
    Story => (
      <Box sx={{ position: 'relative', width: '800px', height: '500px', overflow: 'hidden' }}>
        <Story />
      </Box>
    )
  ],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['fixed', 'absolute'],
      description: 'Positioning strategy for the background',
      table: {
        type: { summary: '"fixed" | "absolute"' },
        defaultValue: { summary: 'fixed' }
      }
    },
    color: {
      control: 'color',
      description: 'Main color for the gradient (hex). The outer color is derived as a darker shade.',
      table: {
        type: { summary: 'string' }
      }
    },
    patternUrl: {
      control: 'text',
      description: 'URL for the overlay pattern texture',
      table: {
        type: { summary: 'string' }
      }
    }
  }
} satisfies Meta<typeof AnimatedBackground>

type Story = StoryObj<typeof meta>

const Fixed: Story = {
  args: {
    variant: 'fixed'
  },
  parameters: {
    docs: {
      description: {
        story: 'Fixed variant — covers the full viewport and stays in place on scroll'
      }
    }
  }
}

const Absolute: Story = {
  args: {
    variant: 'absolute'
  },
  parameters: {
    docs: {
      description: {
        story: 'Absolute variant — fills its parent container. Useful for sections or cards.'
      }
    }
  }
}

const CustomColor: Story = {
  args: {
    variant: 'absolute',
    color: '#ff4444'
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom color — the outer color is automatically derived as a darker shade'
      }
    }
  }
}

// eslint-disable-next-line import/no-default-export
export default meta

export { Absolute, CustomColor, Fixed }
