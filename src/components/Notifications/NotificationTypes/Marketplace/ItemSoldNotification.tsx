import React from "react"
import { itemSoldI18n } from "./Marketplace.i18n"
import { ItemSoldIcon } from "../../../Icon"
import { NotificationItemText } from "../../NotificationItem"
import { NotificationItemNFTLink } from "../../NotificationItemNFTLink"
import {
  CommonNotificationProps,
  ItemSoldNotificationProps,
} from "../../Notifications.types"
import { getBGColorByRarity } from "../../utils"

const ItemSoldNotification = React.memo(
  (props: CommonNotificationProps<ItemSoldNotificationProps>) => {
    const { notification, locale } = props
    return (
      <NotificationItemText
        image={notification.metadata.image}
        imageBackgroundColor={getBGColorByRarity(notification.metadata.rarity)}
        badgeIcon={<ItemSoldIcon />}
        locale={locale}
        notification={notification}
        title={itemSoldI18n[locale].title}
        description={
          <>
            {itemSoldI18n[locale].description}{" "}
            <NotificationItemNFTLink
              rarity={notification.metadata.rarity}
              name={notification.metadata.nftName}
              link={notification.metadata.link}
            />
          </>
        }
      />
    )
  }
)

export { ItemSoldNotification }
