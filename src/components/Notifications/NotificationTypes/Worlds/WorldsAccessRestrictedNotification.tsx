import React from "react"
import { i18n } from "./WorldsAccessRestrictedNotification.i18n"
import { AccessRestrictedIcon } from "../../../Icon"
import { NotificationItem } from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
} from "../../NotificationItem.styled"
import {
  CommonNotificationProps,
  WorldsAccessRestrictedNotificationProps,
} from "../../types"

const WorldsAccessRestrictedNotification = React.memo(
  (props: CommonNotificationProps<WorldsAccessRestrictedNotificationProps>) => {
    const { notification, locale } = props
    return (
      <NotificationItem
        image={{ image: <AccessRestrictedIcon /> }}
        timestamp={notification.timestamp}
        isNew={!notification.read}
        locale={locale}
      >
        <NotificationItemTitle>{i18n[locale].title}</NotificationItemTitle>
        <NotificationItemDescription color="inherit" underline="none">
          {i18n[locale].description(notification.metadata.url)}
        </NotificationItemDescription>
      </NotificationItem>
    )
  }
)

export { WorldsAccessRestrictedNotification }
