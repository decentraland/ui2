import React from "react"
import { Link } from "@mui/material"
import { i18n } from "./WorldsPermissionGrantedNotification.i18n"
import { config } from "../../../../config"
import { AccessRestoredIcon, PermissionGrantedIcon } from "../../../Icon"
import { NotificationItem } from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
} from "../../NotificationItem.styled"
import {
  CommonNotificationProps,
  WorldsPermissionGrantedNotificationProps,
} from "../../types"
import { replaceWithValues } from "../../utils"

const WORLDS_COLLABORATOR_URL = `${config.get(
  "BUILDER_URL"
)}/worlds?tab=collaborator`

const WORLD_WITH_REALM_URL = `${config.get("EXPLORER_URL")}?realm=`

const WorldsPermissionGrantedNotification = React.memo(
  (
    props: CommonNotificationProps<WorldsPermissionGrantedNotificationProps>
  ) => {
    const { notification, locale } = props
    const permission = notification.metadata.permissions[0] // for now only one permission is allowed per notification
    const isAccessNotification = permission === "access"
    const world = notification.metadata.world
    const Icon = isAccessNotification
      ? AccessRestoredIcon
      : PermissionGrantedIcon
    return (
      <NotificationItem
        image={{ image: <Icon fontSize="inherit" /> }}
        timestamp={notification.timestamp}
        isNew={!notification.read}
        locale={locale}
      >
        <NotificationItemTitle>
          {isAccessNotification ? i18n[locale].accessTitle : i18n[locale].title}
        </NotificationItemTitle>
        <NotificationItemDescription color="inherit" underline="none">
          {replaceWithValues(i18n[locale][permission], {
            world: (
              <Link
                href={
                  isAccessNotification
                    ? `${WORLD_WITH_REALM_URL}${world}`
                    : WORLDS_COLLABORATOR_URL
                }
                target="_blank"
                rel="noreferrer"
              >
                {world}
              </Link>
            ),
          })}
        </NotificationItemDescription>
      </NotificationItem>
    )
  }
)

export { WorldsPermissionGrantedNotification }
