import React from "react"
import { NotificationType } from "@dcl/schemas"
import { ReferralInvitedUserAcceptedIcon, RewardIcon } from "../../../Icon"
import { NotificationItemText } from "../../NotificationItem"
import { getBGColorByRarity } from "../../utils"
import { ReferralCommonNotificationProps } from "./Referral.types"

const ReferralNotification = React.memo(
  (props: ReferralCommonNotificationProps) => {
    const { notification, locale, i18n } = props

    const isNewTierReached =
      notification.type === NotificationType.REFERRAL_NEW_TIER_REACHED

    return (
      <NotificationItemText
        image={
          isNewTierReached ? (
            notification.metadata.image
          ) : (
            <ReferralInvitedUserAcceptedIcon width={48} height={48} />
          )
        }
        imageBackgroundColor={
          isNewTierReached && notification.metadata.rarity
            ? getBGColorByRarity(notification.metadata.rarity)
            : "transparent"
        }
        badgeIcon={isNewTierReached && <RewardIcon />}
        locale={locale}
        notification={notification}
        title={i18n[locale].title}
        description={i18n[locale].description}
      />
    )
  }
)

export { ReferralNotification }
