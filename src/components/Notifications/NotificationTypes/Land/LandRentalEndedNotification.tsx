import React from "react"
import { i18n } from "./LandRentalEndedNotification.i18n"
import { RentPeriodEndingIcon } from "../../../Icon"
import { NotificationItem } from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
} from "../../NotificationItem.styled"
import {
  CommonNotificationProps,
  LandRentalEndedNotificationProps,
} from "../../types"

const LandRentalEndedNotification = React.memo(
  (props: CommonNotificationProps<LandRentalEndedNotificationProps>) => {
    const { notification, locale } = props
    return (
      <NotificationItem
        image={{ image: <RentPeriodEndingIcon fontSize="inherit" /> }}
        timestamp={notification.timestamp}
        isNew={!notification.read}
        locale={locale}
      >
        <NotificationItemTitle>{i18n[locale].title}</NotificationItemTitle>
        <NotificationItemDescription color="inherit" underline="none">
          {i18n[locale].description(
            notification.metadata.land,
            notification.metadata.link
          )}
        </NotificationItemDescription>
      </NotificationItem>
    )
  }
)

export { LandRentalEndedNotification }
