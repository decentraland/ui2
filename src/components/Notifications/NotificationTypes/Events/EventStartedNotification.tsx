import React from "react"
import { Link } from "@mui/material"
import { i18n } from "./EventStartedNotification.i18n"
import { EventStartedIcon } from "../../../Icon"
import { NotificationItem } from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
} from "../../NotificationItem.styled"
import {
  CommonNotificationProps,
  EventsStartedNotificationProps,
} from "../../types"

const EventsStartedNotification = React.memo(
  (props: CommonNotificationProps<EventsStartedNotificationProps>) => {
    const { notification, locale } = props
    return (
      <NotificationItem
        image={{ image: <EventStartedIcon /> }}
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
          {i18n[locale].description.start}{" "}
          <Link href={notification.metadata.link}>
            {notification.metadata.name}
          </Link>{" "}
          {i18n[locale].description.end}
        </NotificationItemDescription>
      </NotificationItem>
    )
  }
)

export { EventsStartedNotification }
