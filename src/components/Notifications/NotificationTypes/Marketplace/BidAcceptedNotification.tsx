import React from "react"
import { Network } from "@dcl/schemas"
import { useTheme } from "@mui/material"
import { bidAcceptedI18n } from "./Marketplace.i18n"
import { BidAcceptedIcon } from "../../../Icon"
import { Mana } from "../../../Mana"
import { NotificationItemText } from "../../NotificationItem"
import { NotificationItemNFTLink } from "../../NotificationItemNFTLink"
import {
  BidAcceptedNotificationProps,
  CommonNotificationProps,
} from "../../Notifications.types"
import { formatMana, getBGColorByRarity } from "../../utils"

const BidAcceptedNotification = React.memo(
  (props: CommonNotificationProps<BidAcceptedNotificationProps>) => {
    const { notification, locale } = props
    const theme = useTheme()
    return (
      <NotificationItemText
        image={notification.metadata.image}
        imageBackgroundColor={getBGColorByRarity(notification.metadata.rarity)}
        badgeIcon={<BidAcceptedIcon />}
        locale={locale}
        notification={notification}
        title={bidAcceptedI18n[locale].title}
        description={
          <>
            {bidAcceptedI18n[locale].description.start}{" "}
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
            {bidAcceptedI18n[locale].description.middle}{" "}
            <NotificationItemNFTLink
              name={notification.metadata.nftName}
              rarity={notification.metadata.rarity}
              link={notification.metadata.link}
            />
          </>
        }
      />
    )
  }
)

export { BidAcceptedNotification }
