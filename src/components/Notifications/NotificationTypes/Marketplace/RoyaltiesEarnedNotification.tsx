import React from "react"
import { Network } from "@dcl/schemas"
import { useTheme } from "@mui/material"
import ManaMainnetIcon from "../../../Icon/Notifications/ManaMainnetIcon"
import ManaPolygonIcon from "../../../Icon/Notifications/ManaPolygonIcon"
import Mana from "../../../Mana/Mana"
import NotificationItem from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
} from "../../NotificationItem.styled"
import NotificationItemNFTLink from "../../NotificationItemNFTLink"
import {
  CommonNotificationProps,
  RoyalitesEarnedNotificationProps,
} from "../../types"
import { formatMana, getBGColorByRarity } from "../../utils"

const i18N = {
  en: {
    description: (
      mana: React.ReactNode,
      nftName: React.ReactNode
    ): React.ReactNode => (
      <>
        You&apos;ve earned {mana} in royalties for {nftName}
      </>
    ),
    title: "Royalties Earned",
  },
  es: {
    description: (
      mana: React.ReactNode,
      nftName: React.ReactNode
    ): React.ReactNode => (
      <>
        Ganaste {mana} en regalias por {nftName}
      </>
    ),
    title: "Regalias ganadas",
  },
  zh: {
    description: (
      mana: React.ReactNode,
      nftName: React.ReactNode
    ): React.ReactNode => (
      <>
        您为 {nftName} 赢得了 {mana}
      </>
    ),
    title: "所得版税",
  },
}

export default function RoyaltiesEarnedNotification(
  props: CommonNotificationProps<RoyalitesEarnedNotificationProps>
) {
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
      <NotificationItemTitle>{i18N[locale].title}</NotificationItemTitle>
      <NotificationItemDescription color="inherit" underline="none">
        {i18N[locale].description(
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
