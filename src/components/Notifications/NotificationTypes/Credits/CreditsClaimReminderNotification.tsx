import React from "react"
import { CommonNotificationProps } from "components/Notifications/types"
import { i18n } from "./CreditsClaimReminderNotification.i18n"
import { CreditsClaimReminderNotificationProps } from "./types"
import { CreditsIcon } from "../../../Icon/Notifications/CreditsIcon"
import { NotificationItem } from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
} from "../../NotificationItem.styled"

const CreditsClaimReminderNotification = React.memo(
  (props: CommonNotificationProps<CreditsClaimReminderNotificationProps>) => {
    const { notification, locale } = props
    return (
      <NotificationItem
        image={<CreditsIcon width={48} height={48} />}
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

export { CreditsClaimReminderNotification }
