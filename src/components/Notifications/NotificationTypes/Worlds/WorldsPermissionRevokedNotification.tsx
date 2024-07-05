import React from "react"
import { i18n } from "./WorldsPermissionRevokedNotification.i18n"
import { AccessRestrictedIcon, PermissionRevokedIcon } from "../../../Icon"
import { NotificationItem } from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
} from "../../NotificationItem.styled"
import {
  CommonNotificationProps,
  WorldsPermissionRevokedNotificationProps,
} from "../../types"
import { replaceWithValues } from "../../utils"

const WorldsPermissionRevokedNotification = React.memo(
  (
    props: CommonNotificationProps<WorldsPermissionRevokedNotificationProps>
  ) => {
    const { notification, locale } = props
    const permission = notification.metadata.permissions[0]
    const isAccessNotification = permission === "access"
    const Icon = isAccessNotification
      ? AccessRestrictedIcon
      : PermissionRevokedIcon

    return (
      <NotificationItem
        image={<Icon />}
        timestamp={notification.timestamp}
        isNew={!notification.read}
        locale={locale}
      >
        <NotificationItemTitle>
          {isAccessNotification ? i18n[locale].accessTitle : i18n[locale].title}
        </NotificationItemTitle>
        <NotificationItemDescription color="inherit" underline="none">
          {replaceWithValues(i18n[locale][permission], {
            world: <strong>{notification.metadata.world}</strong>,
          })}
        </NotificationItemDescription>
      </NotificationItem>
    )
  }
)

export { WorldsPermissionRevokedNotification }
