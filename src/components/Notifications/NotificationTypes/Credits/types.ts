import { NotificationType } from "@dcl/schemas"
import { RawDecentralandNotification } from "components/Notifications/types"

// type CommonCreditsNotificationMetadataProps = {
//   title: string
//   description: string
// }

type CreditsNotificationsProps = CreditsCompleteYourWeeklyGoalsNotificationProps

type CreditsCompleteYourWeeklyGoalsNotificationProps =
  RawDecentralandNotification<
    NotificationType.CREDITS_REMINDER_COMPLETE_GOALS,
    {}
  >

export type {
  CreditsNotificationsProps,
  CreditsCompleteYourWeeklyGoalsNotificationProps,
}
