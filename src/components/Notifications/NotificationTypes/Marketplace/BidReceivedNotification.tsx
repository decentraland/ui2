import React from "react"
import { Network } from "@dcl/schemas"
import BidAcceptedIcon from "../../../Icon/Notifications/BidAcceptedIcon"
import Mana from "../../../Mana/Mana"
import NotificationItem from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
} from "../../NotificationItem.styled"
import NotificationItemNFTLink from "../../NotificationItemNFTLink"
import {
  BidReceivedNotificationProps,
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
        You received an offer of {mana} for {nftName}
      </>
    ),
    title: "Offer Received",
  },
  es: {
    description: (
      mana: React.ReactNode,
      nftName: React.ReactNode
    ): React.ReactNode => (
      <>
        Recibiste una oferta de {mana} para {nftName}
      </>
    ),
    title: "Oferta recibida",
  },
  zh: {
    description: (
      mana: React.ReactNode,
      nftName: React.ReactNode
    ): React.ReactNode => (
      <>
        您为 {nftName} 出价 {mana} 已被接受
      </>
    ),
    title: "收到报价",
  },
}

export default function BidReceivedNotification(
  props: CommonNotificationProps<BidReceivedNotificationProps>
) {
  const { notification, locale } = props
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
