import { NotificationType } from '@dcl/schemas'
import { RawDecentralandNotification } from 'components/Notifications/Notifications.types'

type CreditsNotificationsProps =
  | CreditsCompleteYourWeeklyGoalsNotificationProps
  | CreditsDoNotMissOutNotificationProps
  | CreditsClaimReminderNotificationProps
  | CreditsOnDemandGrantedNotificationProps
  | CreditsExpireSoonReminderNotificationProps
  | CreditsExpireIn24HrsReminderNotificationProps

type CreditsExpirationCommonProps = {
  expirationDate: string
}

type CreditsCompleteYourWeeklyGoalsNotificationProps = RawDecentralandNotification<NotificationType.CREDITS_REMINDER_COMPLETE_GOALS, {}>

type CreditsDoNotMissOutNotificationProps = RawDecentralandNotification<NotificationType.CREDITS_REMINDER_DO_NOT_MISS_OUT, {}>

type CreditsClaimReminderNotificationProps = RawDecentralandNotification<NotificationType.CREDITS_REMINDER_CLAIM_CREDITS, {}>

type CreditsExpireSoonReminderNotificationProps = RawDecentralandNotification<
  NotificationType.CREDITS_REMINDER_USAGE,
  CreditsExpirationCommonProps
>

type CreditsExpireIn24HrsReminderNotificationProps = RawDecentralandNotification<
  NotificationType.CREDITS_REMINDER_USAGE_24_HOURS,
  CreditsExpirationCommonProps
>

type CreditsOnDemandGrantedNotificationProps = RawDecentralandNotification<
  NotificationType.CREDITS_ON_DEMAND_GRANTED,
  {
    creditsGranted: number
    /** `'USD'` for Shop credits, which never expire. Absent on a retired season grant. */
    denomination?: string
    /** The studio that gave them, on a studio's gift. */
    studioName?: string
    /** Where the notification leads: the Shop for Shop credits. */
    link?: string
  }
>

export type {
  CreditsNotificationsProps,
  CreditsCompleteYourWeeklyGoalsNotificationProps,
  CreditsDoNotMissOutNotificationProps,
  CreditsClaimReminderNotificationProps,
  CreditsExpireSoonReminderNotificationProps,
  CreditsExpireIn24HrsReminderNotificationProps,
  CreditsOnDemandGrantedNotificationProps
}
