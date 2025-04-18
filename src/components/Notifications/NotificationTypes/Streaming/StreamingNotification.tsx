import React from "react"
import { Link } from "@mui/material"
import { StreamingCommonNotificationProps } from "./types"
import { StreamingIcon } from "../../../Icon"
import { IconBadge, IconBadgeIcon } from "../../../IconBadge"
import { NotificationItem } from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
} from "../../NotificationItem.styled"
import { replaceWithValues } from "../../utils"

const StreamingNotification = React.memo(
  (props: StreamingCommonNotificationProps) => {
    const { notification, locale, i18n } = props
    return (
      <NotificationItem
        image={<StreamingIcon width={48} height={48} />}
        timestamp={notification.timestamp}
        isNew={!notification.read}
        locale={locale}
      >
        <NotificationItemTitle>{i18n[locale].title}</NotificationItemTitle>
        <NotificationItemDescription color="inherit" underline="none">
          {replaceWithValues(i18n[locale].description, {
            place: notification.metadata.isWorld ? (
              <Link
                href={notification.metadata.url}
                target="_blank"
                rel="noreferrer"
              >
                {notification.metadata.worldName}
              </Link>
            ) : (
              <IconBadge
                inline
                icon={IconBadgeIcon.Places}
                text={notification.metadata.position}
                onClick={() => window.open(notification.metadata.url, "_blank")}
              />
            ),
          })}
        </NotificationItemDescription>
      </NotificationItem>
    )
  }
)

export { StreamingNotification }
