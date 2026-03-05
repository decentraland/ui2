import { AppStoreBadge } from '../AppStoreBadge'
import { GooglePlayBadge } from '../GooglePlayBadge'
import { IconsContainer } from '../Icons.stories.styled'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof AppStoreBadge> = {
  title: 'Decentraland UI/Icons/Badges',
  component: AppStoreBadge,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

type Story = StoryObj<typeof AppStoreBadge>

const AppStore: Story = {}

const GooglePlay: Story = {
  render: () => <GooglePlayBadge />
}

const AllBadgeIcons: Story = {
  render: () => (
    <IconsContainer>
      <AppStoreBadge />
      <GooglePlayBadge />
    </IconsContainer>
  )
}

const LargeBadgeIcons: Story = {
  render: () => (
    <IconsContainer>
      <AppStoreBadge fontSize="large" />
      <GooglePlayBadge fontSize="large" />
    </IconsContainer>
  )
}

// eslint-disable-next-line import/no-default-export
export default meta
export { AppStore, GooglePlay, AllBadgeIcons, LargeBadgeIcons }
