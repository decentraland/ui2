import React from "react"
import { i18n } from "./RewardInProgressNotification.i18n"
import { RewardNotification } from "./RewardNotification"
import {
  CommonNotificationProps,
  RewardInProgressNotificationProps,
} from "../../types"

const RewardInProgressNotification = React.memo(
  (props: CommonNotificationProps<RewardInProgressNotificationProps>) => {
    return <RewardNotification {...props} i18n={i18n} />
  }
)

export { RewardInProgressNotification }
