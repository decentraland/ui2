import React from "react"
import { CampaignNotification } from "./CampaignNotification"
import { campaignOutOfFundsI18n } from "./Reward.i18n"
import {
  CampaignOutOfFundsNotificationProps,
  CommonNotificationProps,
} from "../../Notifications.types"

const CampaignOutOfFundsNotification = React.memo(
  (props: CommonNotificationProps<CampaignOutOfFundsNotificationProps>) => {
    return <CampaignNotification {...props} i18n={campaignOutOfFundsI18n} />
  }
)

export { CampaignOutOfFundsNotification }
