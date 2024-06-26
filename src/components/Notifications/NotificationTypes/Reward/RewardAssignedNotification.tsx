import React from "react"
import { i18n } from "./RewardAssignedNotification.i18n"
import { RewardIcon } from "../../../Icon"
import { NotificationItem } from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
} from "../../NotificationItem.styled"
import {
  CommonNotificationProps,
  RewardAssignedNotificationProps,
} from "../../types"
import { getBGColorByRarity } from "../../utils"

const RewardAssignedNotification = React.memo(
  (props: CommonNotificationProps<RewardAssignedNotificationProps>) => {
    const { notification, locale } = props
    return (
      <NotificationItem
        image={{
          image: notification.metadata.tokenImage,
          backgroundColor: getBGColorByRarity(
            notification.metadata.tokenRarity
          ),
          icon: <RewardIcon />,
        }}
        timestamp={notification.timestamp}
        isNew={!notification.read}
        locale={locale}
      >
        <NotificationItemTitle>{i18n[locale].title}</NotificationItemTitle>
        <NotificationItemDescription color="inherit" underline="none">
          {i18n[locale].description(notification.metadata)}
        </NotificationItemDescription>
      </NotificationItem>
    )
  }
)

export { RewardAssignedNotification }
