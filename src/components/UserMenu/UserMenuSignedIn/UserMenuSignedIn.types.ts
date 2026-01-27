import { Avatar } from '@dcl/schemas'
import { ManaBalancesProps } from '../../UserMenu/ManaBalances/ManaBalances.types'
import { UserMenuI18N } from '../UserMenu.types'
import type { NotificationsProps } from '../../Notifications/NotificationsToggle/Notifications.types'

type UserMenuSignedInProps = ManaBalancesProps & {
  avatar?: Avatar
  address?: string
  isOpen?: boolean
  trackingId?: string
  hasActivity?: boolean
  creditsBalance?: ManaBalancesProps['creditsBalance']
  notifications?: NotificationsProps
  i18n: UserMenuI18N
  onClickMarketplaceAuthorization?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  onClickActivity?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  onClickClose?: () => void
  onClickMyAssets?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  onClickProfile?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  onClickSignOut?: (event: React.MouseEvent<HTMLElement, MouseEvent>, trackingId: string) => void
  onClickToggle?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  onClickAccount?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  onClickUserMenuItem?: (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    options: { type: string; url?: string; track_uuid?: string }
  ) => void
  balances?: React.ReactNode
}

type UserMenuActionsProps = Pick<
  UserMenuSignedInProps,
  | 'avatar'
  | 'address'
  | 'i18n'
  | 'trackingId'
  | 'onClickUserMenuItem'
  | 'onClickMarketplaceAuthorization'
  | 'onClickMyAssets'
  | 'onClickProfile'
  | 'onClickSignOut'
  | 'onClickAccount'
  | 'balances'
>

export type { UserMenuSignedInProps, UserMenuActionsProps }
