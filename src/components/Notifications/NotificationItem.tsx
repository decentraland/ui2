import React from "react"
import { formatDistanceToNow } from "date-fns"
import { enUS, es, zhCN } from "date-fns/locale"
import { NotificationItemImage } from "./NotificationItemImage"
import { NewNotificationIcon } from "../Icon"
import { NotificationItemProps } from "./NotificationItem.types"
import {
  NotificationItemContainer,
  NotificationItemContent,
  NotificationItemImageContainer,
  NotificationItemTimestamp,
} from "./NotificationItem.styled"

const NotificationItem = React.memo(
  (props: React.PropsWithChildren<NotificationItemProps>) => {
    const {
      image,
      imageBackgroundColor,
      badgeIcon,
      timestamp,
      isNew,
      children,
      locale,
    } = props
    const usedLocale = locale === "en" ? enUS : locale === "es" ? es : zhCN

    return (
      <NotificationItemContainer>
        <NotificationItemImageContainer>
          <NotificationItemImage
            image={image}
            imageBackgroundColor={imageBackgroundColor}
            badgeIcon={badgeIcon}
          />
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
