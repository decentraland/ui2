import { Meta, StoryObj } from '@storybook/react'
import { JumpIn } from './JumpIn'
import { JumpInProps } from './JumpIn.types'

const meta = {
  title: 'Decentraland UI/Jump In',
  component: JumpIn,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'JumpIn component provides a way to navigate to specific coordinates or worlds in Decentraland. It comes in two variants: a button and a link, with optional compact mode for the link variant.'
      }
    }
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['button', 'link'],
      description: 'Visual variant of the component',
      table: {
        defaultValue: { summary: 'button' }
      }
    },
    position: {
      control: 'text',
      description: "Position coordinates (e.g., '10,20') or world name",
      if: { arg: 'variant', eq: 'link' }
    },
    compact: {
      control: 'boolean',
      description: 'Show only the icon with position on hover',
      if: { arg: 'variant', eq: 'link' }
    },
    loading: {
      control: 'boolean',
      description: 'Loading state of the component'
    },
    buttonText: {
      control: 'text',
      description: 'Text to display in button variant',
      if: { arg: 'variant', eq: 'button' },
      table: {
        defaultValue: { summary: 'Jump In' }
      }
    },
    modalProps: {
      control: 'object',
      description: 'Props for the download modal (title, description, buttonLabel)'
    },
    downloadUrl: {
      control: 'text',
      description: 'Custom URL for the download button',
      table: {
        defaultValue: { summary: 'https://decentraland.org/download' }
      }
    },
    hideIcon: {
      control: 'boolean',
      description: 'Whether to hide the icon',
      table: {
        defaultValue: { summary: false }
      }
    },
    desktopAppOptions: {
      control: 'object',
      description: 'Options for the desktop app (position, realm)'
    },
    onTrack: {
      action: 'onTrack',
      description: 'Callback for tracking events'
    }
  }
} satisfies Meta<JumpInProps>

type Story = StoryObj<typeof meta>

const defaultModalProps = {
  title: 'Download Decentraland',
  description: "To jump in, you'll need to download the Decentraland app",
  buttonLabel: 'Download Now'
}

const Button: Story = {
  args: {
    variant: 'button',
    buttonText: 'Jump In',
    modalProps: defaultModalProps
  }
}

const ButtonLoading: Story = {
  args: {
    ...Button.args,
    loading: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Loading state while waiting for the launcher check'
      }
    }
  }
}

const Link: Story = {
  args: {
    variant: 'link',
    position: '10,20',
    modalProps: defaultModalProps
  }
}

const CompactLink: Story = {
  args: {
    ...Link.args,
    compact: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Compact version shows only the icon, position appears on hover'
      }
    }
  }
}

const WorldLink: Story = {
  args: {
    variant: 'link',
    position: 'Genesis Plaza',
    modalProps: defaultModalProps
  },
  parameters: {
    docs: {
      description: {
        story: 'Link variant can also display world names instead of coordinates'
      }
    }
  }
}

const CustomModal: Story = {
  args: {
    variant: 'button',
    modalProps: {
      title: 'Custom Download Title',
      description: 'This is a custom description for the download modal',
      buttonLabel: 'Get App Now'
    }
  }
}

const WithTracking: Story = {
  args: {
    variant: 'button',
    modalProps: defaultModalProps
  },
  parameters: {
    docs: {
      description: {
        story: 'Example with tracking data. Open the console to see tracking events.'
      }
    }
  }
}

const IconHidden: Story = {
  args: {
    variant: 'button',
    hideIcon: true,
    modalProps: defaultModalProps
  }
}

const AllVariants: Story = {
  args: {
    variant: 'button',
    buttonText: 'Jump In',
    modalProps: defaultModalProps
  },
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <JumpIn variant="button" buttonText="Jump In" modalProps={defaultModalProps} />
      <JumpIn variant="link" position="10,20" modalProps={defaultModalProps} />
      <JumpIn variant="link" position="Genesis Plaza" compact modalProps={defaultModalProps} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All variants side by side for comparison'
      }
    }
  }
}

// eslint-disable-next-line import/no-default-export
export default meta

export { Button, ButtonLoading, Link, CompactLink, WorldLink, CustomModal, WithTracking, IconHidden, AllVariants }
