import ImageOutlined from '@mui/icons-material/ImageOutlined'
import SearchOffOutlined from '@mui/icons-material/SearchOffOutlined'
import { EmptyState } from './EmptyState'
import { EmptyStateProps } from './EmptyState.types'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Decentraland UI/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Presentational empty-state / not-found panel: an optional bordered icon, a title, an optional subtitle and an optional primary CTA. Routing, analytics and i18n stay at the call site.'
      }
    }
  },
  argTypes: {
    title: { control: 'text', description: 'Primary heading' },
    subtitle: { control: 'text', description: 'Optional supporting copy' },
    action: { control: 'object', description: 'Optional primary CTA — external `href` or in-app `onClick` (never both)' }
  }
} satisfies Meta<EmptyStateProps>

type Story = StoryObj<typeof meta>

const WithIconAndLink: Story = {
  args: {
    icon: <ImageOutlined />,
    title: 'No collectibles yet',
    subtitle: 'Explore the marketplace to start your collection.',
    action: { label: 'Browse Marketplace', href: 'https://decentraland.org/marketplace' }
  }
}

const WithClickHandler: Story = {
  args: {
    icon: <ImageOutlined />,
    title: 'No communities yet',
    subtitle: 'Jump into Decentraland to find your people.',
    action: { label: 'Jump In', onClick: () => alert('launch') }
  },
  parameters: {
    docs: {
      description: {
        story: 'In-app CTA: the consumer wires `onClick` (e.g. a launcher or a router navigation).'
      }
    }
  }
}

const NotFound: Story = {
  args: {
    icon: <SearchOffOutlined />,
    title: 'Page not found',
    subtitle: "The page you're looking for doesn't exist or has moved.",
    action: { label: 'Go Home', href: '/' }
  },
  parameters: {
    docs: {
      description: {
        story: 'Reused as a not-found panel inside an area layout.'
      }
    }
  }
}

const WithoutIcon: Story = {
  args: {
    title: 'Nothing here',
    subtitle: 'This tab is empty.'
  }
}

const TitleOnly: Story = {
  args: {
    title: 'No results'
  }
}

// eslint-disable-next-line import/no-default-export
export default meta
export { WithIconAndLink, WithClickHandler, NotFound, WithoutIcon, TitleOnly }
