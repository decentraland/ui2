import React from "react"
import { rewardAssignedI18n } from "./Reward.i18n"
import { RewardNotification } from "./RewardNotification"
import {
  CommonNotificationProps,
  RewardAssignedNotificationProps,
} from "../../Notifications.types"

const RewardAssignedNotification = React.memo(
  (props: CommonNotificationProps<RewardAssignedNotificationProps>) => {
    return <RewardNotification {...props} i18n={rewardAssignedI18n} />
  }
)

export { RewardAssignedNotification }
