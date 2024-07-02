import React from "react"
import { GovernanceIcon } from "../../../Icon"
import { NotificationItem } from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
} from "../../NotificationItem.styled"
import {
  CommonNotificationProps,
  GovernanceAnnouncementNotificationProps,
} from "../../types"

const GovernanceAnnouncementNotification = React.memo(
  (props: CommonNotificationProps<GovernanceAnnouncementNotificationProps>) => {
    const { notification, locale } = props
    return (
      <NotificationItem
        image={{ image: <GovernanceIcon /> }}
        timestamp={notification.timestamp}
        isNew={!notification.read}
        locale={locale}
      >
        <NotificationItemTitle>
          {notification.metadata.title}
        </NotificationItemTitle>
        <NotificationItemDescription
          href={notification.metadata.link}
          color="inherit"
          underline="none"
        >
          {notification.metadata.description}
        </NotificationItemDescription>
      </NotificationItem>
    )
  }
)

export { GovernanceAnnouncementNotification }
