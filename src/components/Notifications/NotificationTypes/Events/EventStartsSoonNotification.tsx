import React from "react"
import { i18n } from "./EventStartsSoonNotification.i18n"
import { EventStartsSoonIcon } from "../../../Icon"
import { NotificationItem } from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
} from "../../NotificationItem.styled"
import {
  CommonNotificationProps,
  EventsStartsSoonNotificationProps,
} from "../../types"

const EventsStartsSoonNotification = React.memo(
  (props: CommonNotificationProps<EventsStartsSoonNotificationProps>) => {
    const { notification, locale } = props
    return (
      <NotificationItem
        image={{ image: <EventStartsSoonIcon fontSize="inherit" /> }}
        timestamp={notification.timestamp}
        isNew={!notification.read}
        locale={locale}
      >
        <NotificationItemTitle>{i18n[locale].title}</NotificationItemTitle>
        <NotificationItemDescription
          href={notification.metadata.link}
          color="inherit"
          underline="none"
        >
          {i18n[locale].description(notification.metadata)}
        </NotificationItemDescription>
      </NotificationItem>
    )
  }
)

export { EventsStartsSoonNotification }
