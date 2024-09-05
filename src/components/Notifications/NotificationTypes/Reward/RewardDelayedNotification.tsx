import React from "react"
import { i18n } from "./RewardDelayedNotification.i18n"
import { RewardNotification } from "./RewardNotification"
import {
  CommonNotificationProps,
  RewardDelayedNotificationProps,
} from "../../types"

const RewardDelayedNotification = React.memo(
  (props: CommonNotificationProps<RewardDelayedNotificationProps>) => {
    return <RewardNotification {...props} i18n={i18n} />
  }
)

export { RewardDelayedNotification }
