import React from 'react'
import { rewardInProgressI18n } from './Reward.i18n'
import { RewardNotification } from './RewardNotification'
import { CommonNotificationProps, RewardInProgressNotificationProps } from '../../Notifications.types'

const RewardInProgressNotification = React.memo((props: CommonNotificationProps<RewardInProgressNotificationProps>) => {
  return <RewardNotification {...props} i18n={rewardInProgressI18n} />
})

export { RewardInProgressNotification }
