import React from "react"
import { i18n } from "./WorldsAccessRestoredNotification.i18n"
import { AccessRestoredIcon } from "../../../Icon"
import { NotificationItem } from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
} from "../../NotificationItem.styled"
import {
  CommonNotificationProps,
  WorldsAccessRestoredNotificationProps,
} from "../../types"

const WorldsAccessRestoredNotification = React.memo(
  (props: CommonNotificationProps<WorldsAccessRestoredNotificationProps>) => {
    const { notification, locale } = props
    return (
      <NotificationItem
        image={{ image: <AccessRestoredIcon /> }}
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

export { WorldsAccessRestoredNotification }
