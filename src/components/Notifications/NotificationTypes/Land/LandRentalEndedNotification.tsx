import React from "react"
import { i18n } from "./LandRentalEndedNotification.i18n"
import { RentPeriodEndingIcon } from "../../../Icon"
import { IconBadge, IconBadgeIcon } from "../../../IconBadge"
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
        image={<RentPeriodEndingIcon />}
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
          {i18n[locale].description.end}
        </NotificationItemDescription>
      </NotificationItem>
    )
  }
)

export { LandRentalEndedNotification }
