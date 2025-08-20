import {
  CommonNotificationProps,
  NotificationLocale,
  ReferralInvitedUsersAcceptedNotificationProps,
  ReferralNewTierReachedNotificationProps,
} from "components/Notifications/types"

type ReferralNotificationProps =
  | ReferralNewTierReachedNotificationProps
  | ReferralInvitedUsersAcceptedNotificationProps

type i18nProps = {
  title: string
  description: string
}

type ReferralCommonNotificationProps =
  CommonNotificationProps<ReferralNotificationProps> & {
    i18n: Record<NotificationLocale, i18nProps>
  }

export type {
  ReferralNotificationProps,
  ReferralCommonNotificationProps,
  i18nProps,
}
