import React from "react"
import { referralInvitedUserAcceptedI18n } from "./Referral.i18n"
import { ReferralNotification } from "./ReferralNotification"
import {
  CommonNotificationProps,
  ReferralInvitedUsersAcceptedNotificationProps,
} from "../../Notifications.types"

const ReferralInvitedUserAcceptedNotification = React.memo(
  (
    props: CommonNotificationProps<ReferralInvitedUsersAcceptedNotificationProps>
  ) => {
    return (
      <ReferralNotification {...props} i18n={referralInvitedUserAcceptedI18n} />
    )
  }
)

export { ReferralInvitedUserAcceptedNotification }
