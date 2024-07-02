import React from "react"
import { i18n } from "./GovernancePitchPassedNotification.i18n"
import { PitchIcon } from "../../../Icon"
import { NotificationItem } from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
} from "../../NotificationItem.styled"
import {
  CommonNotificationProps,
  GovernancePitchPassedNotificationProps,
} from "../../types"

const GovernancePitchPassedNotification = React.memo(
  (props: CommonNotificationProps<GovernancePitchPassedNotificationProps>) => {
    const { notification, locale } = props
    return (
      <NotificationItem
        image={{ image: <PitchIcon /> }}
        timestamp={notification.timestamp}
        isNew={!notification.read}
        locale={locale}
      >
        <NotificationItemTitle>
          {i18n[locale].title(notification.metadata.proposalTitle)}
        </NotificationItemTitle>
        <NotificationItemDescription color="inherit" underline="none">
          {i18n[locale].description(notification.metadata.link)}
        </NotificationItemDescription>
      </NotificationItem>
    )
  }
)

export { GovernancePitchPassedNotification }
