import { UserMenuActions } from './UserMenuSignedIn'
import { avatar } from '../../../data/avatar'
import { i18n } from '../UserMenu.i18n'
import { UserMenuActionsProps } from './UserMenuSignedIn.types'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<UserMenuActionsProps> = {
  component: UserMenuActions,
  title: 'Decentraland UI/User Menu Actions',
  tags: ['autodocs'],
  argTypes: {},
  args: {
    onClickMarketplaceAuthorization: () => console.log,
    onClickMyAssets: () => console.log,
    onClickProfile: () => console.log,
    onClickSignOut: () => console.log,
    onClickAccount: () => console.log,
    trackingId: '',
    i18n: i18n
  },
  render: args => <UserMenuActions {...args} />
}

type Story = StoryObj<UserMenuActionsProps>

const Sample: Story = {
  args: {
    avatar: avatar
  }
}

const Guest: Story = {
  args: {
    avatar: { ...avatar, hasClaimedName: false }
  }
}

const WithoutProfile: Story = {
  args: {
    address: avatar.ethAddress
  }
}

// eslint-disable-next-line import/no-default-export
export default meta
export { Sample, Guest, WithoutProfile }
