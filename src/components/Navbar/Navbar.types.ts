import type { ReactNode } from 'react'
import type { ChainId } from '@dcl/schemas'
import type { Network } from '@dcl/schemas/dist/dapps/network'

type NavbarI18n = {
  signIn: string
  signingIn: string
  whatsOn: string
  shop: string
  shopAll: string
  wearables: string
  emotes: string
  names: string
  land: string
  merch: string
  create: string
  createInDecentraland: string
  publishWearablesEmotes: string
  publishLand: string
  learn: string
  getStarted: string
  startCreating: string
  seeWhatsNew: string
  viewProfile: string
  myAssets: string
  accountSettings: string
  marketplaceAuthorizations: string
  walletAddress: string
  addressCopied: string
  logout: string
  creditsExpiringIn: string
  creditsValueNote: string
}

type NavbarProps = {
  isSignedIn: boolean
  isSigningIn?: boolean
  isLoadingProfile?: boolean
  address?: string
  avatar?: { name?: string; avatar?: { snapshots?: { face256?: string; body?: string } } }
  i18n?: Partial<NavbarI18n>
  notificationSlot?: ReactNode
  /** Currently selected chain id */
  selectedChain?: ChainId
  /** List of chains available for selection */
  chains?: ChainId[]
  /** Called when the user picks a different chain */
  onSelectChain?: (chain: ChainId) => void
  /** MANA balances keyed by network */
  manaBalances?: Partial<Record<Network, number>>
  /** Called when the user clicks a balance entry */
  onClickBalance?: (network: Network) => void
  /** Credits balance to display in the navbar top bar */
  creditsBalance?: { balance: number; expiresAt: number }
  /** Called when the user clicks the credits balance */
  onClickCredits?: () => void
  /** Called when the user card panel is toggled open or closed.
   *  Consumers can use this to close other panels (e.g. notifications). */
  onToggleUserCard?: (isOpen: boolean) => void
  /** When set, the matching navigation tab receives a visual highlight. */
  activePage?: 'whatsOn' | 'shop' | 'create' | 'learn'
  onClickSignIn: () => void
  onClickSignOut: () => void
}

export type { NavbarI18n, NavbarProps }
