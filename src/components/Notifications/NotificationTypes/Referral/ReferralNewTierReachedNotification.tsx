import React from "react"
import { i18n } from "./ReferralNewTierReachedNotification.i18n"
import { ReferralNotification } from "./ReferralNotification"
import {
  CommonNotificationProps,
  ReferralNewTierReachedNotificationProps,
} from "../../types"

const ReferralNewTierReachedNotification = React.memo(
  (props: CommonNotificationProps<ReferralNewTierReachedNotificationProps>) => {
    return <ReferralNotification {...props} i18n={i18n} />
  }
)

export { ReferralNewTierReachedNotification }
