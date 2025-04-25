import React from "react"
import { CommonNotificationProps } from "components/Notifications/types"
import { i18n } from "./CreditsExpireIn24HrsReminderNotification.i18n"
import { CreditsExpireIn24HrsReminderNotificationProps } from "./types"
import { CreditsExpireSoonReminderIcon } from "../../../Icon/Notifications/CreditsExpireSoonReminderIcon"
import { NotificationItem } from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
} from "../../NotificationItem.styled"
import { replaceWithValues } from "../../utils"

const CreditsExpireIn24HrsReminderNotification = React.memo(
  (
    props: CommonNotificationProps<CreditsExpireIn24HrsReminderNotificationProps>
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

export { CreditsExpireIn24HrsReminderNotification }
