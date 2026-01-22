import React from "react"
import { Link } from "@mui/material"
import { tipI18n } from "./Transfer.i18n"
import { config } from "../../../../config"
import { TipIcon } from "../../../Icon"
import { NotificationItemText } from "../../NotificationItem"
import {
  CommonNotificationProps,
  TipNotificationProps,
} from "../../Notifications.types"
import { replaceWithValues } from "../../utils"

const TipNotification = React.memo(
  (props: CommonNotificationProps<TipNotificationProps>) => {
    const { notification, locale, renderProfile } = props

    const senderAddress = notification.metadata.senderAddress
    const playerName =
      renderProfile?.(senderAddress) ??
      `${senderAddress.slice(0, 6)}…${senderAddress.slice(-4)}`
    const manaAmount = Number(notification.metadata.amount).toString()
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
      <NotificationItemText
        image={<TipIcon width={48} height={48} />}
        locale={locale}
        notification={notification}
        title={replaceWithValues(tipI18n[locale].title, {
          playerName: playerLink,
          manaAmount: manaAmountLink,
        })}
        description={tipI18n[locale].description}
      />
    )
  }
)

export { TipNotification }
