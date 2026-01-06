import React from "react"
import { giftI18n } from "./Transfer.i18n"
import { Address } from "../../../Address"
import { GiftIcon } from "../../../Icon"
import { NotificationItemText } from "../../NotificationItem"
import {
  CommonNotificationProps,
  GiftNotificationProps,
} from "../../Notifications.types"
import { replaceWithValues } from "../../utils"

const GiftNotification = React.memo(
  (props: CommonNotificationProps<GiftNotificationProps>) => {
    const { notification, locale, renderProfile } = props
    const player = renderProfile?.(notification.metadata.senderAddress) ?? (
      <Address shorten value={notification.metadata.senderAddress} />
    )

    return (
      <NotificationItemText
        image={<GiftIcon width={48} height={48} />}
        locale={locale}
        notification={notification}
        title={replaceWithValues(giftI18n[locale].title, { player })}
        description={giftI18n[locale].description}
      />
    )
  }
)

export { GiftNotification }
