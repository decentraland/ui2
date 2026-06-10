import { UserMenuI18N } from './UserMenu.types'

const i18n = {
  account: 'Account Settings',
  activity: 'Activity',
  guest: 'Guest',
  download: 'Download',
  marketplaceAuthorizations: 'Marketplace Authorizations',
  myAssets: 'My Assets',
  myLists: 'My Lists',
  profile: 'Profile',
  signIn: 'Sign In',
  signOut: 'Log Out',
  viewProfile: 'View Profile',
  inviteFriends: 'Invite Friends',
  getCredits: 'Earn Credits',
  creditsExpiringSoon: 'Expiring soon',
  creditsValue: '(1 Credit = 1 MANA in value)',
  creditsExpiringIn: (value: string) => `Expiring in ${value} days`
} as UserMenuI18N

export { i18n }
