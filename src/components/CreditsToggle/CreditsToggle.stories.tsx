import { useState } from 'react'
import { CreditsToggle } from './CreditsToggle'
import { CreditsToggleProps } from './CreditsToggle.types'
import type { Meta, StoryObj } from '@storybook/react'

// Helper to convert ETH to Wei (avoiding ethers dependency)
const parseEther = (value: string): string => {
  return (BigInt(value) * BigInt('1000000000000000000')).toString()
}

const meta: Meta<typeof CreditsToggle> = {
  title: 'Decentraland UI/CreditsToggle',
  component: CreditsToggle,
  tags: ['autodocs'],
  argTypes: {
    totalCredits: {
      control: 'text',
      description: 'Total credits available in wei'
    },
    assetPrice: {
      control: 'text',
      description: 'Price of the asset/item in wei'
    },
    useCredits: {
      control: 'boolean',
      description: 'Whether credits are currently being used'
    },
    showLearnMore: {
      control: 'boolean',
      description: 'Show "Learn More" button instead of credits amount when user has no credits'
    },
    label: {
      control: 'text',
      description: 'Custom text for the toggle label'
    },
    showTooltip: {
      control: 'boolean',
      description: 'Show tooltip with credit value explanation'
    }
  }
}

type Story = StoryObj<typeof CreditsToggle>

// Interactive wrapper to handle state
const InteractiveCreditsToggle = (args: CreditsToggleProps) => {
  const [useCredits, setUseCredits] = useState(args.useCredits)

  return (
    <div style={{ maxWidth: '600px', padding: '20px' }}>
      <CreditsToggle {...args} useCredits={useCredits} onToggle={setUseCredits} />
    </div>
  )
}

const WithCredits: Story = {
  render: args => <InteractiveCreditsToggle {...args} />,
  args: {
    totalCredits: parseEther('100'),
    assetPrice: parseEther('50'),
    useCredits: false,
    label: 'Use Credits',
    showTooltip: true,
    tooltipContent: 'Credits value'
  }
}

const Active: Story = {
  render: args => <InteractiveCreditsToggle {...args} />,
  args: {
    totalCredits: parseEther('100'),
    assetPrice: parseEther('50'),
    useCredits: true,
    label: 'Use Credits',
    showTooltip: true
  }
}

const InsufficientCredits: Story = {
  render: args => <InteractiveCreditsToggle {...args} />,
  args: {
    totalCredits: parseEther('10'),
    assetPrice: parseEther('50'),
    useCredits: false,
    label: 'Use Credits',
    showTooltip: true
  }
}

const NoCreditsWithLearnMore: Story = {
  render: args => <InteractiveCreditsToggle {...args} />,
  args: {
    totalCredits: '0',
    assetPrice: parseEther('50'),
    useCredits: false,
    showLearnMore: true,
    label: 'Get with Credits',
    learnMoreUrl: 'https://decentraland.org/blog/announcements/marketplace-credits'
  }
}

const NoCreditsHidden: Story = {
  render: args => <InteractiveCreditsToggle {...args} />,
  args: {
    totalCredits: '0',
    assetPrice: parseEther('50'),
    useCredits: false,
    showLearnMore: false
  }
}

const CustomLabel: Story = {
  render: args => <InteractiveCreditsToggle {...args} />,
  args: {
    totalCredits: parseEther('75'),
    assetPrice: parseEther('50'),
    useCredits: false,
    label: 'Pagar con Créditos',
    showTooltip: true,
    tooltipContent: 'Valor de los créditos'
  }
}

export { WithCredits, Active, InsufficientCredits, NoCreditsWithLearnMore, NoCreditsHidden, CustomLabel }

// eslint-disable-next-line import/no-default-export
export default meta
