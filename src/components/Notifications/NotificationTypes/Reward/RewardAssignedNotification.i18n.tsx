import React from "react"
import { config } from "../../../../config"
import { NotificationItemNFTLink } from "../../NotificationItemNFTLink"
import { RewardAssignedNotificationProps } from "../../types"

const i18n = {
  en: {
    description: (
      reward: RewardAssignedNotificationProps["metadata"]
    ): React.ReactNode => (
      <>
        This{" "}
        <NotificationItemNFTLink
          rarity={reward.tokenRarity}
          name={reward.tokenName}
          link={config.get("EXPLORER_URL")}
        />{" "}
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
        El item{" "}
        <NotificationItemNFTLink
          rarity={reward.tokenRarity}
          name={reward.tokenName}
          link={config.get("EXPLORER_URL")}
        />{" "}
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
        这{" "}
        <NotificationItemNFTLink
          rarity={reward.tokenRarity}
          name={reward.tokenName}
          link={config.get("EXPLORER_URL")}
        />{" "}
        已经在您的背包里
      </>
    ),
    title: "收到的新项目",
  },
}

export { i18n }
