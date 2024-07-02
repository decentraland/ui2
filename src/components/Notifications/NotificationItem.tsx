import React from "react"
import { formatDistanceToNow } from "date-fns"
import { enUS, es, zhCN } from "date-fns/locale"
import { NotificationItemImage } from "./NotificationItemImage"
import { NotificationLocale } from "./types"
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
    const usedLocale = locale === "en" ? enUS : locale === "es" ? es : zhCN

    return (
      <NotificationItemContainer>
        <NotificationItemImageContainer>
          <NotificationItemImage {...image} />
        </NotificationItemImageContainer>
        <NotificationItemContent>
          {children}
          <NotificationItemTimestamp>
            {formatDistanceToNow(timestamp, { locale: usedLocale })}
          </NotificationItemTimestamp>
        </NotificationItemContent>
        {isNew && <NewNotificationIcon fontStyle={12} />}
      </NotificationItemContainer>
    )
  }
)

export { NotificationItem }
