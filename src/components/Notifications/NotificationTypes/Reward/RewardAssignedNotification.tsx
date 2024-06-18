import React from "react"
import { config } from "../../../../config"
import RewardIcon from "../../../Icon/Notifications/RewardIcon"
import NotificationItem from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
} from "../../NotificationItem.styled"
import NotificationItemNFTLink from "../../NotificationItemNFTLink"
import {
  CommonNotificationProps,
  RewardAssignedNotificationProps,
} from "../../types"
import { getBGColorByRarity } from "../../utils"

const i18N = {
  en: {
    description: (
      reward: RewardAssignedNotificationProps["metadata"]
    ): React.ReactNode => (
      <>
        This
        <NotificationItemNFTLink
          rarity={reward.tokenRarity}
          name={reward.tokenName}
          link={config.get("EXPLORER_URL")}
        />
        is already in your backpack
      </>
    ),
    title: "New Item Received",
  },
  es: {
    description: (
      reward: RewardAssignedNotificationProps["metadata"]
    ): React.ReactNode => (
      <>
        El item
        <NotificationItemNFTLink
          rarity={reward.tokenRarity}
          name={reward.tokenName}
          link={config.get("EXPLORER_URL")}
        />
        ya esta disponible en tu backpack
      </>
    ),
    title: "Nuevo artículo recibido",
  },
  zh: {
    description: (
      reward: RewardAssignedNotificationProps["metadata"]
    ): React.ReactNode => (
      <>
        这
        <NotificationItemNFTLink
          rarity={reward.tokenRarity}
          name={reward.tokenName}
          link={config.get("EXPLORER_URL")}
        />
        已经在您的背包里
      </>
    ),
    title: "收到的新项目",
  },
}

export default function RewardAssignedNotification(
  props: CommonNotificationProps<RewardAssignedNotificationProps>
) {
  const { notification, locale } = props
  return (
    <NotificationItem
      image={{
        image: notification.metadata.tokenImage,
        backgroundColor: getBGColorByRarity(notification.metadata.tokenRarity),
        icon: <RewardIcon />,
      }}
      timestamp={notification.timestamp}
      isNew={!notification.read}
      locale={locale}
    >
      <NotificationItemTitle>{i18N[locale].title}</NotificationItemTitle>
      <NotificationItemDescription color="inherit" underline="none">
        {i18N[locale].description(notification.metadata)}
      </NotificationItemDescription>
    </NotificationItem>
  )
}
