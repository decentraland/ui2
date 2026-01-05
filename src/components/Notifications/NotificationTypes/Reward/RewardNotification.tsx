import React from "react"
import { config } from "../../../../config"
import { RewardIcon } from "../../../Icon"
import { NotificationItemText } from "../../NotificationItem"
import { NotificationItemNFTLink } from "../../NotificationItemNFTLink"
import { getBGColorByRarity } from "../../utils"
import { RewardNotificationProps } from "./Reward.types"

const RewardNotification = React.memo((props: RewardNotificationProps) => {
  const { notification, locale, i18n } = props
  return (
    <NotificationItemText
      image={notification.metadata.tokenImage}
      imageBackgroundColor={getBGColorByRarity(
        notification.metadata.tokenRarity
      )}
      badgeIcon={<RewardIcon />}
      locale={locale}
      notification={notification}
      title={i18n[locale].title}
      description={
        <>
          {i18n[locale].description.start}{" "}
          <NotificationItemNFTLink
            rarity={notification.metadata.tokenRarity}
            name={notification.metadata.tokenName}
            link={config.get("EXPLORER_URL")}
          />{" "}
          {i18n[locale].description.end}
        </>
      }
    />
  )
})

export { RewardNotification }
