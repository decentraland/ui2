import React from "react"
import { Link } from "@mui/material"
import { Countdown } from "./Countdown"
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
        image={{ image: <EventStartsSoonIcon /> }}
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
          {new Date(notification.metadata.startsAt).getTime() > Date.now() ? (
            <>
              {i18n[locale].description.aboutToStart.start}{" "}
              <Link href={notification.metadata.link}>
                {notification.metadata.name}
              </Link>{" "}
              {i18n[locale].description.aboutToStart.end}{" "}
              <Countdown startDate={notification.metadata.startsAt} />
            </>
          ) : (
            <>
              {i18n[locale].description.startsInOneHour.start}{" "}
              <Link href={notification.metadata.link}>
                {notification.metadata.name}
              </Link>{" "}
              {i18n[locale].description.startsInOneHour.end}
            </>
          )}
        </NotificationItemDescription>
      </NotificationItem>
    )
  }
)

export { EventsStartsSoonNotification }
