import React from "react"
import { i18n } from "./GovernanceTenderPassedNotification.i18n"
import { TenderIcon } from "../../../Icon"
import { NotificationItem } from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
} from "../../NotificationItem.styled"
import {
  CommonNotificationProps,
  GovernanceTenderPassedNotificationProps,
} from "../../types"

const GovernanceTenderPassedNotification = React.memo(
  (props: CommonNotificationProps<GovernanceTenderPassedNotificationProps>) => {
    const { notification, locale } = props

    return (
      <NotificationItem
        image={{ image: <TenderIcon /> }}
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

export { GovernanceTenderPassedNotification }
