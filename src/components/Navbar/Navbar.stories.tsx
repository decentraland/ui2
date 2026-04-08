import { useState } from 'react'
import { ChainId } from '@dcl/schemas'
import { Network } from '@dcl/schemas/dist/dapps/network'
import { BellIcon } from './icons'
import { Navbar } from './Navbar'
import {
  BellButton,
  NotificationBadge,
  NotificationDot,
  NotificationHeader,
  NotificationItemContent,
  NotificationItemDescription,
  NotificationItemImage,
  NotificationItemTime,
  NotificationItemTitle,
  NotificationList,
  NotificationListItem,
  NotificationPanel,
  NotificationTitle,
  NotificationWrapper
} from './NotificationBell.styled'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Navbar> = {
  title: 'Decentraland UI/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen'
  }
}

// eslint-disable-next-line import/no-default-export, import/exports-last
export default meta
type Story = StoryObj<typeof Navbar>

const exampleAvatar = {
  name: 'CryptoUser',
  avatar: {
    snapshots: {
      face256: 'https://profile-images.decentraland.org/entities/bafkreicsrqz4raw5fwkihldnu6ofs7de43oux2bhiehfscbroirnwbdrei/face.png',
      body: 'https://profile-images.decentraland.org/entities/bafkreicsrqz4raw5fwkihldnu6ofs7de43oux2bhiehfscbroirnwbdrei/body.png'
    }
  }
}

const NotificationDemo = ({ isOpen, onToggle }: { isOpen?: boolean; onToggle?: () => void }) => {
  const [localOpen, setLocalOpen] = useState(false)
  const open = isOpen !== undefined ? isOpen : localOpen
  const toggle = onToggle ?? (() => setLocalOpen(prev => !prev))
  return (
    <NotificationWrapper>
      <BellButton onClick={toggle} className={open ? '' : 'has-unread'}>
        <BellIcon />
        <NotificationBadge>3</NotificationBadge>
      </BellButton>
      {open && (
        <NotificationPanel>
          <NotificationHeader>
            <NotificationTitle>Notifications</NotificationTitle>
          </NotificationHeader>
          <NotificationList>
            <NotificationListItem>
              <NotificationItemImage>
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" rx="8" fill="rgba(255,45,85,0.2)" />
                  <path d="M20 12L14 22H26L20 12Z" fill="#FF2D55" />
                </svg>
              </NotificationItemImage>
              <NotificationItemContent>
                <NotificationItemTitle>Bid Received</NotificationItemTitle>
                <NotificationItemDescription>Someone placed a bid of 100 MANA on your wearable</NotificationItemDescription>
                <NotificationItemTime>2 hours ago</NotificationItemTime>
              </NotificationItemContent>
              <NotificationDot />
            </NotificationListItem>
            <NotificationListItem>
              <NotificationItemImage>
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" rx="8" fill="rgba(164,75,243,0.2)" />
                  <circle cx="20" cy="20" r="8" fill="#A14BF3" />
                </svg>
              </NotificationItemImage>
              <NotificationItemContent>
                <NotificationItemTitle>Item Sold</NotificationItemTitle>
                <NotificationItemDescription>Your Genesis City Hat was sold for 500 MANA</NotificationItemDescription>
                <NotificationItemTime>5 hours ago</NotificationItemTime>
              </NotificationItemContent>
              <NotificationDot />
            </NotificationListItem>
            <NotificationListItem>
              <NotificationItemImage>
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" rx="8" fill="rgba(52,206,118,0.2)" />
                  <path d="M15 20L18 23L25 16" stroke="#34CE76" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </NotificationItemImage>
              <NotificationItemContent>
                <NotificationItemTitle>Proposal Enacted</NotificationItemTitle>
                <NotificationItemDescription>A governance proposal you voted on has been enacted</NotificationItemDescription>
                <NotificationItemTime>1 day ago</NotificationItemTime>
              </NotificationItemContent>
              <NotificationDot style={{ backgroundColor: 'transparent' }} />
            </NotificationListItem>
          </NotificationList>
        </NotificationPanel>
      )}
    </NotificationWrapper>
  )
}

const PageContent = () => (
  <div
    style={{
      paddingTop: 92,
      minHeight: '200vh',
      background: 'linear-gradient(180deg, #1a0a2e 0%, #0a0a0a 100%)',
      padding: '120px 40px 40px'
    }}
  >
    <div style={{ color: 'white', fontSize: 32, fontWeight: 700, marginBottom: 8 }}>Page Content</div>
    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, maxWidth: 500 }}>Scroll down to test navbar behavior.</div>
  </div>
)

const SignedOut: Story = {
  args: {
    isSignedIn: false,
    onClickSignIn: () => console.log('Sign In clicked'),
    onClickSignOut: () => console.log('Sign Out clicked')
  },
  render: args => (
    <>
      <Navbar {...args} />
      <PageContent />
    </>
  )
}

const SignedIn: Story = {
  args: {
    isSignedIn: true,
    address: '0xe3fc7040653768efb2941a6c26fdb868ed36ca99',
    avatar: exampleAvatar,
    onClickSignIn: () => console.log('Sign In clicked'),
    onClickSignOut: () => console.log('Sign Out clicked')
  },
  render: args => (
    <>
      <Navbar {...args} />
      <PageContent />
    </>
  )
}

const WithNotifications: Story = {
  args: {
    isSignedIn: true,
    address: '0xe3fc7040653768efb2941a6c26fdb868ed36ca99',
    avatar: exampleAvatar,
    onClickSignIn: () => console.log('Sign In clicked'),
    onClickSignOut: () => console.log('Sign Out clicked')
  },
  render: args => {
    const [notifOpen, setNotifOpen] = useState(false)
    return (
      <>
        <Navbar
          {...args}
          notificationSlot={<NotificationDemo isOpen={notifOpen} onToggle={() => setNotifOpen(prev => !prev)} />}
          onToggleUserCard={isOpen => {
            if (isOpen) setNotifOpen(false)
          }}
        />
        <PageContent />
      </>
    )
  }
}

const MarketplaceExample: Story = {
  args: {
    isSignedIn: true,
    address: '0xe3fc7040653768efb2941a6c26fdb868ed36ca99',
    avatar: exampleAvatar,
    selectedChain: ChainId.ETHEREUM_MAINNET,
    chains: [
      ChainId.ETHEREUM_MAINNET,
      ChainId.MATIC_MAINNET,
      ChainId.ARBITRUM_MAINNET,
      ChainId.OPTIMISM_MAINNET,
      ChainId.BSC_MAINNET,
      ChainId.AVALANCHE_MAINNET,
      ChainId.FANTOM_MAINNET
    ],
    onSelectChain: (chain: ChainId) => console.log('Selected chain', chain),
    manaBalances: { [Network.ETHEREUM]: 1234, [Network.MATIC]: 5678 },
    onClickBalance: (network: Network) => console.log('Clicked balance', network),
    creditsBalance: { balance: 4200, expiresAt: Date.now() + 86400000 * 30 },
    onClickCredits: () => console.log('Credits clicked'),
    onClickSignIn: () => console.log('Sign In clicked'),
    onClickSignOut: () => console.log('Sign Out clicked')
  },
  render: args => {
    const [notifOpen, setNotifOpen] = useState(false)
    return (
      <>
        <Navbar
          {...args}
          notificationSlot={<NotificationDemo isOpen={notifOpen} onToggle={() => setNotifOpen(prev => !prev)} />}
          onToggleUserCard={isOpen => {
            if (isOpen) setNotifOpen(false)
          }}
        />
        <PageContent />
      </>
    )
  }
}

const CustomI18n: Story = {
  args: {
    isSignedIn: false,
    i18n: {
      signIn: 'Ingresar',
      signingIn: 'Ingresando...',
      shop: 'Comprar',
      create: 'Crear',
      learn: 'Aprender'
    },
    onClickSignIn: () => console.log('Sign In clicked'),
    onClickSignOut: () => console.log('Sign Out clicked')
  },
  render: args => (
    <>
      <Navbar {...args} />
      <PageContent />
    </>
  )
}

export { SignedOut, SignedIn, WithNotifications, MarketplaceExample, CustomI18n }
