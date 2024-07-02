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
        image={{
          image: notification.metadata.image,
          backgroundColor: getBGColorByRarity(notification.metadata.rarity),
          icon:
            notification.metadata.network === "ethereum" ? (
              <ManaMainnetIcon />
            ) : (
              <ManaPolygonIcon />
            ),
        }}
        timestamp={notification.timestamp}
        isNew={!notification.read}
        locale={locale}
      >
        <NotificationItemTitle>{i18n[locale].title}</NotificationItemTitle>
        <NotificationItemDescription color="inherit" underline="none">
          {i18n[locale].description(
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
            </Mana>,
            <NotificationItemNFTLink
              link={notification.metadata.link}
              rarity={notification.metadata.rarity}
              name={notification.metadata.nftName}
            />
          )}
        </NotificationItemDescription>
      </NotificationItem>
    )
  }
)

export { RoyaltiesEarnedNotification }
