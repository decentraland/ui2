import React from "react"
import { i18n } from "./RewardAssignedNotification.i18n"
import { config } from "../../../../config"
import { RewardIcon } from "../../../Icon"
import { NotificationItem } from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
} from "../../NotificationItem.styled"
import { NotificationItemNFTLink } from "../../NotificationItemNFTLink"
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
        image={notification.metadata.tokenImage}
        imageBackgroundColor={getBGColorByRarity(
          notification.metadata.tokenRarity
        )}
        badgeIcon={<RewardIcon />}
        timestamp={notification.timestamp}
        isNew={!notification.read}
        locale={locale}
      >
        <NotificationItemTitle>{i18n[locale].title}</NotificationItemTitle>
        <NotificationItemDescription color="inherit" underline="none">
          {i18n[locale].description.start}{" "}
          <NotificationItemNFTLink
            rarity={notification.metadata.tokenRarity}
            name={notification.metadata.tokenName}
            link={config.get("EXPLORER_URL")}
          />{" "}
          {i18n[locale].description.end}
        </NotificationItemDescription>
      </NotificationItem>
    )
  }
)

export { RewardAssignedNotification }
