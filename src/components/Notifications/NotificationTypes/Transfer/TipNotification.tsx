import React from "react"
import { Link } from "@mui/material"
import { i18n } from "./TipNotification.i18n"
import { config } from "../../../../config"
import { TipIcon } from "../../../Icon"
import { NotificationItem } from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
} from "../../NotificationItem.styled"
import { CommonNotificationProps, TipNotificationProps } from "../../types"
import { formatMana, replaceWithValues } from "../../utils"

const TipNotification = React.memo(
  (props: CommonNotificationProps<TipNotificationProps>) => {
    const { notification, locale, renderProfile } = props
    const senderAddress = notification.metadata.senderAddress
    const playerName = renderProfile?.(senderAddress) ?? senderAddress
    const manaAmount = formatMana(notification.metadata.manaAmount)
    const sceneName = notification.metadata.sceneName
    const profileUrl = `${config.get("PROFILE_URL")}/accounts/${senderAddress}`
    const marketplaceActivityUrl = `${config.get("MARKETPLACE_URL")}/activity`

    const playerLink = (
      <Link
        href={profileUrl}
        target="_blank"
        rel="noreferrer"
        onClick={(e) => e.stopPropagation()}
      >
        {playerName}
      </Link>
    )

    const manaAmountLink = (
      <Link
        href={marketplaceActivityUrl}
        target="_blank"
        rel="noreferrer"
        onClick={(e) => e.stopPropagation()}
      >
        {manaAmount} MANA
      </Link>
    )

    return (
      <NotificationItem
        image={<TipIcon width={48} height={48} />}
        timestamp={notification.timestamp}
        isNew={!notification.read}
        locale={locale}
      >
        <NotificationItemTitle>
          {replaceWithValues(i18n[locale].title, {
            playerName: playerLink,
            manaAmount: manaAmountLink,
            sceneName: sceneName,
          })}
        </NotificationItemTitle>
        <NotificationItemDescription color="inherit" underline="none">
          {i18n[locale].description}
        </NotificationItemDescription>
      </NotificationItem>
    )
  }
)

export { TipNotification }
