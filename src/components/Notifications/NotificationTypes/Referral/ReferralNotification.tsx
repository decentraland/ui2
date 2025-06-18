import React from "react"
import { NotificationType } from "@dcl/schemas"
import { ReferralCommonNotificationProps } from "./types"
import { ReferralInvitedUserAcceptedIcon, RewardIcon } from "../../../Icon"
import { NotificationItem } from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
} from "../../NotificationItem.styled"
import { getBGColorByRarity } from "../../utils"

const ReferralNotification = React.memo(
  (props: ReferralCommonNotificationProps) => {
    const { notification, locale, i18n } = props

    const isNewTierReached =
      notification.type === NotificationType.REFERRAL_NEW_TIER_REACHED

    return (
      <NotificationItem
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
        timestamp={notification.timestamp}
        isNew={!notification.read}
        locale={locale}
      >
        <NotificationItemTitle>{i18n[locale].title}</NotificationItemTitle>
        <NotificationItemDescription color="inherit" underline="none">
          {i18n[locale].description}
        </NotificationItemDescription>
      </NotificationItem>
    )
  }
)

export { ReferralNotification }
