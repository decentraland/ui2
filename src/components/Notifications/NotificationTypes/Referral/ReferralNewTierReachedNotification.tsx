import React from "react"
import { referralNewTierReachedI18n } from "./Referral.i18n"
import { ReferralNotification } from "./ReferralNotification"
import {
  CommonNotificationProps,
  ReferralNewTierReachedNotificationProps,
} from "../../Notifications.types"

const ReferralNewTierReachedNotification = React.memo(
  (props: CommonNotificationProps<ReferralNewTierReachedNotificationProps>) => {
    return <ReferralNotification {...props} i18n={referralNewTierReachedI18n} />
  }
)

export { ReferralNewTierReachedNotification }
