import React from "react"
import { NotificationItemImage } from "./NotificationItemImage"
import { NotificationLocale } from "./types"
import { Time } from "../../lib/time"
import { NewNotificationIcon } from "../Icon"
import { NotificationItemImageProps } from "./NotificationItemImage.types"
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

const NotificationItem = React.memo(
  (props: React.PropsWithChildren<NotificationItemProps>) => {
    const { image, timestamp, isNew, children, locale } = props
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
        {isNew && <NewNotificationIcon fontStyle={12} />}
      </NotificationItemContainer>
    )
  }
)

export { NotificationItem }
