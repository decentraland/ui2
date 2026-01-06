import React from "react"
import { Link } from "@mui/material"
import { Countdown } from "./Countdown"
import { eventStartsSoonI18n } from "./Events.i18n"
import { EventStartsSoonIcon } from "../../../Icon"
import { NotificationItemText } from "../../NotificationItem"
import {
  CommonNotificationProps,
  EventsStartsSoonNotificationProps,
} from "../../Notifications.types"

const EventsStartsSoonNotification = React.memo(
  (props: CommonNotificationProps<EventsStartsSoonNotificationProps>) => {
    const { notification, locale } = props
    return (
      <NotificationItemText
        image={<EventStartsSoonIcon />}
        locale={locale}
        notification={notification}
        title={eventStartsSoonI18n[locale].title}
        descriptionHref={notification.metadata.link}
        description={
          new Date(notification.metadata.startsAt).getTime() > Date.now() ? (
            <>
              {eventStartsSoonI18n[locale].description.aboutToStart.start}{" "}
              <Link href={notification.metadata.link}>
                {notification.metadata.name}
              </Link>{" "}
              {eventStartsSoonI18n[locale].description.aboutToStart.end}{" "}
              <Countdown startDate={notification.metadata.startsAt} />
            </>
          ) : (
            <>
              {eventStartsSoonI18n[locale].description.startsInOneHour.start}{" "}
              <Link href={notification.metadata.link}>
                {notification.metadata.name}
              </Link>{" "}
              {eventStartsSoonI18n[locale].description.startsInOneHour.end}
            </>
          )
        }
      />
    )
  }
)

export { EventsStartsSoonNotification }
