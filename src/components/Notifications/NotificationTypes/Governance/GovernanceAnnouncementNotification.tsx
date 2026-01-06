import React from "react"
import { GovernanceIcon } from "../../../Icon"
import { NotificationItemText } from "../../NotificationItem"
import {
  CommonNotificationProps,
  GovernanceAnnouncementNotificationProps,
} from "../../Notifications.types"

const GovernanceAnnouncementNotification = React.memo(
  (props: CommonNotificationProps<GovernanceAnnouncementNotificationProps>) => {
    const { notification, locale } = props
    return (
      <NotificationItemText
        image={<GovernanceIcon />}
        locale={locale}
        notification={notification}
        title={notification.metadata.title}
        description={notification.metadata.description}
        descriptionHref={notification.metadata.link}
      />
    )
  }
)

export { GovernanceAnnouncementNotification }
