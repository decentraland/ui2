import { config } from '../../config'
import type { NavbarI18n } from './Navbar.types'

const DEFAULT_I18N: NavbarI18n = {
  signIn: 'SIGN IN',
  signingIn: 'SIGNING IN...',
  whatsOn: 'Explore',
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
  walletAddress: 'User ID',
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
 * URLs resolved from the ui-env config system so they point to the correct
 * environment (zone for dev, today for staging, org for production).
 */
function buildMenuConfig(): MenuConfig {
  const marketplaceUrl = config.get('MARKETPLACE_URL')
  const builderUrl = config.get('BUILDER_URL')
  const eventsUrl = config.get('EVENTS_URL')
  const createUrl = config.get('CREATE_URL')
  const blogUrl = config.get('BLOG_URL')
  const namesUrl = config.get('MARKETPLACE_NAMES_URL')
  const landsUrl = config.get('MARKETPLACE_LANDS_URL')

  return {
    whatsOn: {
      label: 'whatsOn',
      url: eventsUrl
    },
    shop: {
      label: 'shop',
      items: [
        { label: 'shopAll', url: marketplaceUrl },
        { label: 'wearables', url: `${marketplaceUrl}/browse?assetType=item&section=wearables&status=on_sale` },
        { label: 'emotes', url: `${marketplaceUrl}/browse?assetType=item&section=emotes&status=on_sale` },
        { label: 'names', url: namesUrl },
        { label: 'land', url: landsUrl },
        { label: 'merch', url: 'https://store.decentraland.org/', isExternal: true }
      ]
    },
    create: {
      label: 'create',
      items: [
        { label: 'createInDecentraland', url: createUrl },
        { label: 'publishWearablesEmotes', url: `${builderUrl}/collections` },
        { label: 'publishLand', url: `${builderUrl}/land` }
      ]
    },
    learn: {
      label: 'learn',
      url: blogUrl
    }
  }
}

type UserMenuItem = {
  label: keyof NavbarI18n
  url: string
  icon: 'account' | 'wearable' | 'settings' | 'shopping'
}

/**
 * Lazy singleton getters — config.get() is deferred until first call
 * to avoid issues in SSR, test environments, or lazy-import scenarios
 * where the env config may not be initialized at module load time.
 */
let _menuConfig: MenuConfig | null = null
function getMenuConfig(): MenuConfig {
  if (!_menuConfig) {
    _menuConfig = buildMenuConfig()
  }
  return _menuConfig
}

let _userMenuItems: UserMenuItem[] | null = null
function getUserMenuItems(): UserMenuItem[] {
  if (!_userMenuItems) {
    _userMenuItems = [
      { label: 'viewProfile', url: config.get('PROFILE_URL'), icon: 'account' },
      { label: 'myAssets', url: config.get('MARKETPLACE_MY_ASSETS_URL'), icon: 'wearable' },
      { label: 'accountSettings', url: config.get('ACCOUNT_URL'), icon: 'settings' },
      { label: 'marketplaceAuthorizations', url: config.get('MARKETPLACE_SETTINGS_URL'), icon: 'shopping' }
    ]
  }
  return _userMenuItems
}

const DROPDOWN_SECTIONS = ['shop', 'create'] as const
type DropdownSection = (typeof DROPDOWN_SECTIONS)[number]

export { DEFAULT_I18N, DROPDOWN_SECTIONS, getMenuConfig, getUserMenuItems }
export type { DropdownSection, MenuConfig, MenuItem, MenuSection, UserMenuItem }
