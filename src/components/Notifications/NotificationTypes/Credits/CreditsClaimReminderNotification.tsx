import React from "react"
import { creditsClaimReminderI18n } from "./Credits.i18n"
import { CreditsIcon } from "../../../Icon/Notifications/CreditsIcon"
import { NotificationItemText } from "../../NotificationItem"
import { CommonNotificationProps } from "../../Notifications.types"
import { CreditsClaimReminderNotificationProps } from "./Credits.types"

const CreditsClaimReminderNotification = React.memo(
  (props: CommonNotificationProps<CreditsClaimReminderNotificationProps>) => {
    const { notification, locale } = props
    return (
      <NotificationItemText
        image={<CreditsIcon width={48} height={48} />}
        locale={locale}
        notification={notification}
        title={creditsClaimReminderI18n[locale].title}
        description={creditsClaimReminderI18n[locale].description}
      />
    )
  }
)

export { CreditsClaimReminderNotification }
