import React from "react"
import { worldsAccessRestoredI18n } from "./Worlds.i18n"
import { AccessRestoredIcon } from "../../../Icon"
import { NotificationItemText } from "../../NotificationItem"
import {
  CommonNotificationProps,
  WorldsAccessRestoredNotificationProps,
} from "../../Notifications.types"

const WorldsAccessRestoredNotification = React.memo(
  (props: CommonNotificationProps<WorldsAccessRestoredNotificationProps>) => {
    const { notification, locale } = props
    return (
      <NotificationItemText
        image={<AccessRestoredIcon />}
        locale={locale}
        notification={notification}
        title={worldsAccessRestoredI18n[locale].title}
        description={worldsAccessRestoredI18n[locale].description}
      />
    )
  }
)

export { WorldsAccessRestoredNotification }
