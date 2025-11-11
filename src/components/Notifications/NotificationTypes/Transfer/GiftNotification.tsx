import React from "react"
import { i18n } from "./GiftNotification.i18n"
import { GiftIcon } from "../../../Icon"
import { NotificationItem } from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
} from "../../NotificationItem.styled"
import { CommonNotificationProps, GiftNotificationProps } from "../../types"

const GiftNotification = React.memo(
  (props: CommonNotificationProps<GiftNotificationProps>) => {
    const { notification, locale, renderProfile } = props
    return (
      <NotificationItem
        image={<GiftIcon width={48} height={48} />}
        timestamp={notification.timestamp}
        isNew={!notification.read}
        locale={locale}
      >
        <NotificationItemTitle>{i18n[locale].title}</NotificationItemTitle>
        <NotificationItemDescription color="inherit" underline="none">
          {i18n[locale].description.start}
          {notification.metadata.itemName}
          {` ${i18n[locale].description.middle} `}
          {renderProfile
            ? renderProfile(notification.metadata.from)
            : notification.metadata.from}
          {i18n[locale].description.end}
        </NotificationItemDescription>
      </NotificationItem>
    )
  }
)

export { GiftNotification }
