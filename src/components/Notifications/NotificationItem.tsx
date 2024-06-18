import React from "react"
import NotificationItemImage, {
  NotificationItemImageProps,
} from "./NotificationItemImage"
import { NotificationLocale } from "./types"
import Time from "../../lib/time"
import NewNotificationIcon from "../Icon/Notifications/NewNotificationIcon"
import {
  NotificationItemContainer,
  NotificationItemContent,
  NotificationItemImageContainer,
  NotificationItemTimestamp,
} from "./NotificationItem.styled"

interface NotificationItemProps {
  image: NotificationItemImageProps
  timestamp: number
  isNew: boolean
  locale: NotificationLocale
}

export default function NotificationItem({
  image,
  timestamp,
  isNew,
  children,
  locale,
}: React.PropsWithChildren<NotificationItemProps>) {
  return (
    <NotificationItemContainer>
      <NotificationItemImageContainer>
        <NotificationItemImage {...image} />
      </NotificationItemImageContainer>
      <NotificationItemContent>
        {children}
        <NotificationItemTimestamp>
          {Time(timestamp).locale(locale).fromNow()}
        </NotificationItemTimestamp>
      </NotificationItemContent>
      {/* Do we really need this icon that only a red dot? */}
      {isNew && <NewNotificationIcon width="12px" height="12px" />}
    </NotificationItemContainer>
  )
}
