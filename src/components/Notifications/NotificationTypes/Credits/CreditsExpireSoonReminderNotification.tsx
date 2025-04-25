import React from "react"
import { CommonNotificationProps } from "components/Notifications/types"
import { i18n } from "./CreditsExpireSoonReminderNotification.i18n"
import { CreditsExpireSoonReminderNotificationProps } from "./types"
import { CreditsExpireSoonReminderIcon } from "../../../Icon/Notifications/CreditsExpireSoonReminderIcon"
import { NotificationItem } from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
} from "../../NotificationItem.styled"
import { replaceWithValues } from "../../utils"

const CreditsExpireSoonReminderNotification = React.memo(
  (
    props: CommonNotificationProps<CreditsExpireSoonReminderNotificationProps>
  ) => {
    const { notification, locale } = props
    return (
      <NotificationItem
        image={<CreditsExpireSoonReminderIcon width={48} height={48} />}
        timestamp={notification.timestamp}
        isNew={!notification.read}
        locale={locale}
      >
        <NotificationItemTitle>{i18n[locale].title}</NotificationItemTitle>
        <NotificationItemDescription color="inherit" underline="none">
          {replaceWithValues(i18n[locale].description, {
            date: notification.metadata.expirationDate,
          })}
        </NotificationItemDescription>
      </NotificationItem>
    )
  }
)

export { CreditsExpireSoonReminderNotification }
