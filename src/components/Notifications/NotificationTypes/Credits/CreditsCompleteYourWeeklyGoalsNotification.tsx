import React from "react"
import { CommonNotificationProps } from "components/Notifications/types"
import { i18n } from "./CreditsCompleteYourWeeklyGoalsNotification.i18n"
import { CreditsCompleteYourWeeklyGoalsNotificationProps } from "./types"
import { CreditsCompleteYourGoalsReminderIcon } from "../../../Icon/Notifications/CreditsCompleteYourGoalsReminderIcon"
import { NotificationItem } from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
} from "../../NotificationItem.styled"

const CreditsCompleteYourWeeklyGoalsNotification = React.memo(
  (
    props: CommonNotificationProps<CreditsCompleteYourWeeklyGoalsNotificationProps>
  ) => {
    const { notification, locale } = props
    return (
      <NotificationItem
        image={<CreditsCompleteYourGoalsReminderIcon width={48} height={48} />}
        timestamp={notification.timestamp}
        isNew={!notification.read}
        locale={locale}
      >
        <NotificationItemTitle>{i18n[locale].title}</NotificationItemTitle>
        <NotificationItemDescription color="inherit" underline="none">
          {i18n[locale].description}
        </NotificationItemDescription>
      </NotificationItem>
    )
  }
)

export { CreditsCompleteYourWeeklyGoalsNotification }
