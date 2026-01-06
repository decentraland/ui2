import React from "react"
import { creditsOnDemandGrantedI18n } from "./Credits.i18n"
import { CreditsIcon } from "../../../Icon/Notifications/CreditsIcon"
import { NotificationItemText } from "../../NotificationItem"
import { CommonNotificationProps } from "../../Notifications.types"
import { replaceWithValues } from "../../utils"
import { CreditsOnDemandGrantedNotificationProps } from "./Credits.types"

const CreditsOnDemandGrantedNotification = React.memo(
  (props: CommonNotificationProps<CreditsOnDemandGrantedNotificationProps>) => {
    const { notification, locale } = props
    return (
      <NotificationItemText
        image={<CreditsIcon width={48} height={48} />}
        locale={locale}
        notification={notification}
        title={creditsOnDemandGrantedI18n[locale].title}
        description={replaceWithValues(
          creditsOnDemandGrantedI18n[locale].description,
          {
            amount: notification.metadata.creditsGranted.toLocaleString(),
          }
        )}
      />
    )
  }
)

export { CreditsOnDemandGrantedNotification }
