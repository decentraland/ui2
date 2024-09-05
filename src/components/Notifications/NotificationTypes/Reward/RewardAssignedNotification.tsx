import React from "react"
import { i18n } from "./RewardAssignedNotification.i18n"
import { RewardNotification } from "./RewardNotification"
import {
  CommonNotificationProps,
  RewardAssignedNotificationProps,
} from "../../types"

const RewardAssignedNotification = React.memo(
  (props: CommonNotificationProps<RewardAssignedNotificationProps>) => {
    return <RewardNotification {...props} i18n={i18n} />
  }
)

export { RewardAssignedNotification }
