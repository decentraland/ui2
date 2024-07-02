import React from "react"
import { i18n } from "./LandRentedNotification.i18n"
import { LandRentedIcon } from "../../../Icon"
import { IconBadge, IconBadgeIcon } from "../../../IconBadge"
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

    const tenant = renderProfile
      ? renderProfile(notification.metadata.tenant)!
      : notification.metadata.tenant
    return (
      <NotificationItem
        image={{ image: <LandRentedIcon /> }}
        timestamp={notification.timestamp}
        isNew={!notification.read}
        locale={locale}
      >
        <NotificationItemTitle>{i18n[locale].title}</NotificationItemTitle>
        <NotificationItemDescription color="inherit" underline="none">
          {i18n[locale].description.start}{" "}
          <IconBadge
            inline
            icon={IconBadgeIcon.Places}
            text={notification.metadata.land}
            onClick={() => window.open(notification.metadata.link, "_blank")}
          />{" "}
          {i18n[locale].description.end} {tenant}
        </NotificationItemDescription>
      </NotificationItem>
    )
  }
)

export { LandRentedNotification }
