import React from "react"
import { rewardDelayedI18n } from "./Reward.i18n"
import { RewardNotification } from "./RewardNotification"
import {
  CommonNotificationProps,
  RewardDelayedNotificationProps,
} from "../../Notifications.types"

const RewardDelayedNotification = React.memo(
  (props: CommonNotificationProps<RewardDelayedNotificationProps>) => {
    return <RewardNotification {...props} i18n={rewardDelayedI18n} />
  }
)

export { RewardDelayedNotification }
