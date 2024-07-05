import React from "react"
import { i18n } from "./ItemSoldNotification.i18n"
import { ItemSoldIcon } from "../../../Icon"
import { NotificationItem } from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
} from "../../NotificationItem.styled"
import { NotificationItemNFTLink } from "../../NotificationItemNFTLink"
import { CommonNotificationProps, ItemSoldNotificationProps } from "../../types"
import { getBGColorByRarity } from "../../utils"

const ItemSoldNotification = React.memo(
  (props: CommonNotificationProps<ItemSoldNotificationProps>) => {
    const { notification, locale } = props
    return (
      <NotificationItem
        image={notification.metadata.image}
        imageBackgroundColor={getBGColorByRarity(notification.metadata.rarity)}
        badgeIcon={<ItemSoldIcon />}
        timestamp={notification.timestamp}
        isNew={!notification.read}
        locale={locale}
      >
        <NotificationItemTitle>{i18n[locale].title}</NotificationItemTitle>
        <NotificationItemDescription color="inherit" underline="none">
          {i18n[locale].description}{" "}
          <NotificationItemNFTLink
            rarity={notification.metadata.rarity}
            name={notification.metadata.nftName}
            link={notification.metadata.link}
          />
        </NotificationItemDescription>
      </NotificationItem>
    )
  }
)

export { ItemSoldNotification }
