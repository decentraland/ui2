import ItemSoldIcon from "../../../Icon/Notifications/ItemSoldIcon"
import NotificationItem from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
} from "../../NotificationItem.styled"
import NotificationItemNFTLink from "../../NotificationItemNFTLink"
import { CommonNotificationProps, ItemSoldNotificationProps } from "../../types"
import { getBGColorByRarity } from "../../utils"

const i18N = {
  en: { description: "Someone just bought your ", title: "Item Sold" },
  es: { description: "Alguien acaba de comprar tu ", title: "Item vendido" },
  zh: { description: "有人刚买了你的 ", title: "已售商品" },
}

export default function ItemSoldNotification(
  props: CommonNotificationProps<ItemSoldNotificationProps>
) {
  const { notification, locale } = props
  return (
    <NotificationItem
      image={{
        image: notification.metadata.image,
        backgroundColor: getBGColorByRarity(notification.metadata.rarity),
        icon: <ItemSoldIcon />,
      }}
      timestamp={notification.timestamp}
      isNew={!notification.read}
      locale={locale}
    >
      <NotificationItemTitle>{i18N[locale].title}</NotificationItemTitle>
      <NotificationItemDescription color="inherit" underline="none">
        {i18N[locale].description}{" "}
        <NotificationItemNFTLink
          rarity={notification.metadata.rarity}
          name={notification.metadata.nftName}
          link={notification.metadata.link}
        />
      </NotificationItemDescription>
    </NotificationItem>
  )
}
