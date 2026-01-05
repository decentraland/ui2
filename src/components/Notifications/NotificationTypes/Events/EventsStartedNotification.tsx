import React from "react"
import { Link } from "@mui/material"
import { eventStartedI18n } from "./Events.i18n"
import { EventStartedIcon } from "../../../Icon"
import { NotificationItemText } from "../../NotificationItem"
import {
  CommonNotificationProps,
  EventsStartedNotificationProps,
} from "../../Notifications.types"

const EventsStartedNotification = React.memo(
  (props: CommonNotificationProps<EventsStartedNotificationProps>) => {
    const { notification, locale } = props
    return (
      <NotificationItemText
        image={<EventStartedIcon />}
        locale={locale}
        notification={notification}
        title={eventStartedI18n[locale].title}
        descriptionHref={notification.metadata.link}
        description={
          <>
            {eventStartedI18n[locale].description.start}{" "}
            <Link href={notification.metadata.link}>
              {notification.metadata.name}
            </Link>{" "}
            {eventStartedI18n[locale].description.end}
          </>
        }
      />
    )
  }
)

export { EventsStartedNotification }
