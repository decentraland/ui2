import React from "react"
import { i18n } from "./ReferralInvitedUserAcceptedNotification.i18n"
import { ReferralNotification } from "./ReferralNotification"
import {
  CommonNotificationProps,
  ReferralInvitedUsersAcceptedNotificationProps,
} from "../../types"

const ReferralInvitedUserAcceptedNotification = React.memo(
  (
    props: CommonNotificationProps<ReferralInvitedUsersAcceptedNotificationProps>
  ) => {
    return <ReferralNotification {...props} i18n={i18n} />
  }
)

export { ReferralInvitedUserAcceptedNotification }
