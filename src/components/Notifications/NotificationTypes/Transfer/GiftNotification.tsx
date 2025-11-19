import React from "react"
import { i18n } from "./GiftNotification.i18n"
import { GiftIcon } from "../../../Icon"
import { NotificationItem } from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
} from "../../NotificationItem.styled"
import { CommonNotificationProps, GiftNotificationProps } from "../../types"
import { replaceWithValues } from "../../utils"

const GiftNotification = React.memo(
  (props: CommonNotificationProps<GiftNotificationProps>) => {
    const { notification, locale, renderProfile } = props
    const sender =
      renderProfile?.(notification.metadata.senderAddress) ??
      notification.metadata.senderAddress
    return (
      <NotificationItem
        image={<GiftIcon width={48} height={48} />}
        timestamp={notification.timestamp}
        isNew={!notification.read}
        locale={locale}
      >
        <NotificationItemTitle>
          {replaceWithValues(i18n[locale].title, { sender })}
        </NotificationItemTitle>
        <NotificationItemDescription color="inherit" underline="none">
          {i18n[locale].description}
        </NotificationItemDescription>
      </NotificationItem>
    )
  }
)

export { GiftNotification }
