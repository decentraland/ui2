import React from "react"
import { Network } from "@dcl/schemas"
import { useTheme } from "@mui/material"
import { i18n } from "./RoyaltiesEarnedNotification.i18n"
import { ManaMainnetIcon, ManaPolygonIcon } from "../../../Icon"
import { Mana } from "../../../Mana"
import { NotificationItem } from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
} from "../../NotificationItem.styled"
import { NotificationItemNFTLink } from "../../NotificationItemNFTLink"
import {
  CommonNotificationProps,
  RoyalitesEarnedNotificationProps,
} from "../../types"
import { formatMana, getBGColorByRarity } from "../../utils"

const RoyaltiesEarnedNotification = React.memo(
  (props: CommonNotificationProps<RoyalitesEarnedNotificationProps>) => {
    const { notification, locale } = props
    const theme = useTheme()
    return (
      <NotificationItem
        image={notification.metadata.image}
        imageBackgroundColor={getBGColorByRarity(notification.metadata.rarity)}
        badgeIcon={
          notification.metadata.network === "ethereum" ? (
            <ManaMainnetIcon />
          ) : (
            <ManaPolygonIcon />
          )
        }
        timestamp={notification.timestamp}
        isNew={!notification.read}
        locale={locale}
      >
        <NotificationItemTitle>{i18n[locale].title}</NotificationItemTitle>
        <NotificationItemDescription color="inherit" underline="none">
          {i18n[locale].description.start}{" "}
          <Mana
            inline
            network={
              notification.metadata.network === "polygon"
                ? Network.MATIC
                : Network.ETHEREUM
            }
            color={theme.palette.text.secondary}
          >
            {formatMana(notification.metadata.royaltiesCut)}
          </Mana>{" "}
          {i18n[locale].description.middle}{" "}
          <NotificationItemNFTLink
            name={notification.metadata.nftName}
            rarity={notification.metadata.rarity}
            link={notification.metadata.link}
          />
        </NotificationItemDescription>
      </NotificationItem>
    )
  }
)

export { RoyaltiesEarnedNotification }
