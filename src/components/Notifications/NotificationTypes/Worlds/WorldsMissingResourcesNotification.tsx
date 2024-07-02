import React from "react"
import { i18n } from "./WorldsMissingResourcesNotification.i18n"
import { MissingResourcesIcon } from "../../../Icon"
import { NotificationItem } from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
} from "../../NotificationItem.styled"
import {
  CommonNotificationProps,
  WorldsMissingResourcesNotificationProps,
} from "../../types"

const WorldsMissingResourcesNotification = React.memo(
  (props: CommonNotificationProps<WorldsMissingResourcesNotificationProps>) => {
    const { notification, locale } = props
    return (
      <NotificationItem
        image={{ image: <MissingResourcesIcon /> }}
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

export { WorldsMissingResourcesNotification }
