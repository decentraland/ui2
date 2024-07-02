import React from "react"
import { Network } from "@dcl/schemas"
import { useTheme } from "@mui/material"
import { i18n } from "./BidReceivedNotification.i18n"
import { BidAcceptedIcon } from "../../../Icon"
import { Mana } from "../../../Mana"
import { NotificationItem } from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
} from "../../NotificationItem.styled"
import { NotificationItemNFTLink } from "../../NotificationItemNFTLink"
import {
  BidReceivedNotificationProps,
  CommonNotificationProps,
} from "../../types"
import { formatMana, getBGColorByRarity } from "../../utils"

const BidReceivedNotification = React.memo(
  (props: CommonNotificationProps<BidReceivedNotificationProps>) => {
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
            {formatMana(notification.metadata.price)}
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

export { BidReceivedNotification }
