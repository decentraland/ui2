import React from "react"
import { Network } from "@dcl/schemas"
import { useTheme } from "@mui/material"
import BidAcceptedIcon from "../../../Icon/Notifications/BidAcceptedIcon"
import Mana from "../../../Mana/Mana"
import NotificationItem from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
} from "../../NotificationItem.styled"
import NotificationItemNFTLink from "../../NotificationItemNFTLink"
import {
  BidAcceptedNotificationProps,
  CommonNotificationProps,
} from "../../types"
import { formatMana, getBGColorByRarity } from "../../utils"

const i18N = {
  en: {
    description: (
      mana: React.ReactNode,
      nftName: React.ReactNode
    ): React.ReactNode => (
      <>
        Your offer of {mana} was accepted for {nftName}
      </>
    ),
    title: "Offer Accepted",
  },
  es: {
    description: (
      mana: React.ReactNode,
      nftName: React.ReactNode
    ): React.ReactNode => (
      <>
        Tu oferta de {mana} fue aceptada para {nftName}
      </>
    ),
    title: "Oferta aceptada",
  },
  zh: {
    description: (
      mana: React.ReactNode,
      nftName: React.ReactNode
    ): React.ReactNode => (
      <>
        您的出价 {mana} 已被接受 {nftName}
      </>
    ),
    title: "接受报价",
  },
}

export default function BidAcceptedNotification(
  props: CommonNotificationProps<BidAcceptedNotificationProps>
) {
  const { notification, locale } = props
  const theme = useTheme()
  return (
    <NotificationItem
      image={{
        image: notification.metadata.image,
        backgroundColor: getBGColorByRarity(notification.metadata.rarity),
        icon: <BidAcceptedIcon />,
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
            {formatMana(notification.metadata.price)}
          </Mana>,
          <NotificationItemNFTLink
            name={notification.metadata.nftName}
            rarity={notification.metadata.rarity}
            link={notification.metadata.link}
          />
        )}
      </NotificationItemDescription>
    </NotificationItem>
  )
}
