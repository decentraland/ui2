import { FooterLanding } from './FooterLanding'
import { FooterLandingProps } from './FooterLanding.types'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof FooterLanding> = {
  title: 'Decentraland UI/Footer Landing',
  component: FooterLanding,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {
    subscriptionSrc: {
      control: 'text',
      description: 'Source URL for the Beehiiv subscription iframe (overrides config)'
    },
    hideSubscription: {
      control: 'boolean',
      description: 'Hide the subscription iframe'
    },
    onLinkClick: {
      action: 'linkClicked',
      description: 'Callback function when a link is clicked'
    },
    trackingContext: {
      control: 'text',
      description: 'Context for tracking analytics'
    }
  }
}

type Story = StoryObj<FooterLandingProps>

const Default: Story = {
  args: {}
}

const Minimal: Story = {
  args: {
    hideInstagram: true,
    hideYoutube: true,
    hideTiktok: true,
    hideLinkedin: true,
    hideDiscord: true,
    hideGithub: true,
    hideX: true,
    hideCreatorHub: true,
    hideDocs: true,
    hideEvents: true,
    hideBlog: true,
    hideSupport: true,
    hideEmail: true,
    hideFaq: true
  }
}

const WithoutSubscription: Story = {
  args: {
    hideSubscription: true
  }
}

const WithTracking: Story = {
  args: {
    trackingContext: 'landing-footer',
    onLinkClick: event => {
      const href =
        event.currentTarget instanceof HTMLAnchorElement
          ? event.currentTarget.href
          : (event.currentTarget as HTMLButtonElement).getAttribute('href') || ''
      console.log('Link clicked:', href)
    }
  }
}

// eslint-disable-next-line import/no-default-export
export default meta
export { Default, Minimal, WithoutSubscription, WithTracking }
