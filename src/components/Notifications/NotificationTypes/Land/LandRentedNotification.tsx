import React from "react"
import { i18n } from "./LandRentedNotification.i18n"
import { LandRentedIcon } from "../../../Icon"
import { NotificationItem } from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
} from "../../NotificationItem.styled"
import {
  CommonNotificationProps,
  LandRentedNotificationProps,
} from "../../types"

const LandRentedNotification = React.memo(
  (props: CommonNotificationProps<LandRentedNotificationProps>) => {
    const { notification, locale, renderProfile } = props
    return (
      <NotificationItem
        image={{ image: <LandRentedIcon fontSize="inherit" /> }}
        timestamp={notification.timestamp}
        isNew={!notification.read}
        locale={locale}
      >
        <NotificationItemTitle>{i18n[locale].title}</NotificationItemTitle>
        <NotificationItemDescription color="inherit" underline="none">
          {i18n[locale].description(
            notification.metadata.land,
            renderProfile
              ? renderProfile(notification.metadata.tenant)!
              : notification.metadata.tenant,
            notification.metadata.link
          )}
        </NotificationItemDescription>
      </NotificationItem>
    )
  }
)

export { LandRentedNotification }
