import React from 'react'
import { CampaignNotification } from './CampaignNotification'
import { campaignOutOfStockI18n } from './Reward.i18n'
import { CampaignOutOfStockNotificationProps, CommonNotificationProps } from '../../Notifications.types'

const CampaignOutOfStockNotification = React.memo((props: CommonNotificationProps<CampaignOutOfStockNotificationProps>) => {
  return <CampaignNotification {...props} i18n={campaignOutOfStockI18n} />
})

export { CampaignOutOfStockNotification }
