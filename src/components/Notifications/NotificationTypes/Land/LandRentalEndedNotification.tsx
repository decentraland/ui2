import React from "react"
import { landRentalEndedI18n } from "./Land.i18n"
import { RentPeriodEndingIcon } from "../../../Icon"
import { IconBadge, IconBadgeIcon } from "../../../IconBadge"
import { NotificationItemText } from "../../NotificationItem"
import {
  CommonNotificationProps,
  LandRentalEndedNotificationProps,
} from "../../Notifications.types"

const LandRentalEndedNotification = React.memo(
  (props: CommonNotificationProps<LandRentalEndedNotificationProps>) => {
    const { notification, locale } = props
    return (
      <NotificationItemText
        image={<RentPeriodEndingIcon />}
        locale={locale}
        notification={notification}
        title={landRentalEndedI18n[locale].title}
        description={
          <>
            {landRentalEndedI18n[locale].description.start}{" "}
            <IconBadge
              inline
              icon={IconBadgeIcon.Places}
              text={notification.metadata.land}
              onClick={() => window.open(notification.metadata.link, "_blank")}
            />{" "}
            {landRentalEndedI18n[locale].description.end}
          </>
        }
      />
    )
  }
)

export { LandRentalEndedNotification }
