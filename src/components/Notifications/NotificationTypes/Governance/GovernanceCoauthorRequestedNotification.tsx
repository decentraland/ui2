import React from "react"
import { i18n } from "./GovernanceCoauthorRequestedNotification.i18n"
import { CoauthorIcon } from "../../../Icon"
import { NotificationItem } from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
  SpanHighlighted,
} from "../../NotificationItem.styled"
import {
  CommonNotificationProps,
  GovernanceCoauthorRequestedNotificationProps,
} from "../../types"

const GovernanceCoauthorRequestedNotification = React.memo(
  (
    props: CommonNotificationProps<GovernanceCoauthorRequestedNotificationProps>
  ) => {
    const { notification, locale } = props
    return (
      <NotificationItem
        image={{ image: <CoauthorIcon fontSize="inherit" /> }}
        timestamp={notification.timestamp}
        isNew={!notification.read}
        locale={locale}
      >
        <NotificationItemTitle>
          {i18n[locale].title}{" "}
          <SpanHighlighted>
            {notification.metadata.proposalTitle}
          </SpanHighlighted>
        </NotificationItemTitle>
        <NotificationItemDescription color="inherit" underline="none">
          {i18n[locale].description(notification.metadata.link)}
        </NotificationItemDescription>
      </NotificationItem>
    )
  }
)

export { GovernanceCoauthorRequestedNotification }
