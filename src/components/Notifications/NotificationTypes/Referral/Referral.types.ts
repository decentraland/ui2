import {
  CommonNotificationProps,
  ReferralInvitedUsersAcceptedNotificationProps,
  ReferralNewTierReachedNotificationProps
} from '../../Notifications.types'

type ReferralNotificationProps = ReferralNewTierReachedNotificationProps | ReferralInvitedUsersAcceptedNotificationProps

type ReferralCommonNotificationProps = CommonNotificationProps<ReferralNotificationProps> & {
  i18n: Record<string, { title: string; description: string }>
}

export type { ReferralCommonNotificationProps, ReferralNotificationProps }
