import type { NavbarI18n } from './Navbar.types'

const DEFAULT_I18N: NavbarI18n = {
  signIn: 'SIGN IN',
  signingIn: 'SIGNING IN...',
  whatsOn: "What's On",
  shop: 'Shop',
  shopAll: 'Shop All',
  wearables: 'Wearables',
  emotes: 'Emotes',
  names: 'Names',
  land: 'Land',
  merch: 'Merch',
  create: 'Create',
  createInDecentraland: 'Create in Decentraland',
  publishWearablesEmotes: 'Publish Wearables & Emotes',
  publishLand: 'Manage Land',
  learn: 'Learn',
  getStarted: 'Get Started',
  startCreating: 'Start Creating',
  seeWhatsNew: "See What's New",
  viewProfile: 'View Profile',
  myAssets: 'My Assets',
  accountSettings: 'Account Settings',
  marketplaceAuthorizations: 'Marketplace Authorizations',
  walletAddress: 'Wallet address',
  addressCopied: 'Copied!',
  logout: 'Log Out',
  creditsExpiringIn: 'Expiring in {days} days',
  creditsValueNote: '(1 Credit = 1 MANA in value)'
}

type MenuItem = {
  label: keyof NavbarI18n
  url: string
  isExternal?: boolean
}

type MenuSection = {
  label: keyof NavbarI18n
  url?: string
  items?: MenuItem[]
}

type MenuConfig = {
  whatsOn: MenuSection
  shop: MenuSection
  create: MenuSection
  learn: MenuSection
}

/**
 * URLs are hardcoded to production on purpose. All Decentraland dApps share the
 * same production URLs for cross-app navigation (marketplace, builder, docs, etc.).
 * Dev/staging environments only differ in API endpoints, not in navigation links,
 * so a configurable `urls` prop would add complexity without practical benefit.
 */
const MENU_CONFIG: MenuConfig = {
  whatsOn: {
    label: 'whatsOn',
    url: 'https://decentraland.org/events'
  },
  shop: {
    label: 'shop',
    items: [
      { label: 'shopAll', url: 'https://decentraland.org/marketplace' },
      {
        label: 'wearables',
        url: 'https://decentraland.org/marketplace/browse?assetType=item&section=wearables&status=on_sale'
      },
      {
        label: 'emotes',
        url: 'https://decentraland.org/marketplace/browse?assetType=item&section=emotes&status=on_sale'
      },
      { label: 'names', url: 'https://decentraland.org/marketplace/names/claim' },
      { label: 'land', url: 'https://decentraland.org/marketplace/lands' },
      { label: 'merch', url: 'https://store.decentraland.org/', isExternal: true }
    ]
  },
  create: {
    label: 'create',
    items: [
      { label: 'createInDecentraland', url: 'https://decentraland.org/create/' },
      { label: 'publishWearablesEmotes', url: 'https://decentraland.org/builder/collections' },
      { label: 'publishLand', url: 'https://decentraland.org/builder/land' }
    ]
  },
  learn: {
    label: 'learn',
    items: [
      { label: 'getStarted', url: 'https://docs.decentraland.org/player/', isExternal: true },
      { label: 'startCreating', url: 'https://docs.decentraland.org/creator/', isExternal: true },
      { label: 'seeWhatsNew', url: 'https://decentraland.org/blog/' }
    ]
  }
}

type UserMenuItem = {
  label: keyof NavbarI18n
  url: string
  icon: 'account' | 'wearable' | 'settings' | 'shopping'
}

const USER_MENU_ITEMS: UserMenuItem[] = [
  { label: 'viewProfile', url: 'https://decentraland.org/profile', icon: 'account' },
  { label: 'myAssets', url: 'https://decentraland.org/marketplace/account', icon: 'wearable' },
  { label: 'accountSettings', url: 'https://decentraland.org/account', icon: 'settings' },
  {
    label: 'marketplaceAuthorizations',
    url: 'https://decentraland.org/marketplace/settings',
    icon: 'shopping'
  }
]

const DROPDOWN_SECTIONS = ['shop', 'create', 'learn'] as const
type DropdownSection = (typeof DROPDOWN_SECTIONS)[number]

export { DEFAULT_I18N, DROPDOWN_SECTIONS, MENU_CONFIG, USER_MENU_ITEMS }
export type { DropdownSection, MenuConfig, MenuItem, MenuSection, UserMenuItem }
