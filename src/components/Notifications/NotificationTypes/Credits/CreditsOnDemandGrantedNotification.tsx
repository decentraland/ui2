import React from "react"
import { CommonNotificationProps } from "components/Notifications/types"
import { replaceWithValues } from "components/Notifications/utils"
import { i18n } from "./CreditsClaimReminderNotification.i18n"
import { CreditsOnDemandGrantedNotificationProps } from "./types"
import { CreditsIcon } from "../../../Icon/Notifications/CreditsIcon"
import { NotificationItem } from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
} from "../../NotificationItem.styled"

const CreditsOnDemandGrantedNotification = React.memo(
  (props: CommonNotificationProps<CreditsOnDemandGrantedNotificationProps>) => {
    const { notification, locale } = props
    return (
      <NotificationItem
        image={<CreditsIcon width={48} height={48} />}
        timestamp={notification.timestamp}
        isNew={!notification.read}
        locale={locale}
      >
        <NotificationItemTitle>{i18n[locale].title}</NotificationItemTitle>
        <NotificationItemDescription color="inherit" underline="none">
          {replaceWithValues(i18n[locale].description, {
            amount: notification.metadata.creditsGranted.toLocaleString(),
          })}
        </NotificationItemDescription>
      </NotificationItem>
    )
  }
)

export { CreditsOnDemandGrantedNotification as CreditsClaimReminderNotification }
