import React from "react"
import { CampaignNotification } from "./CampaignNotification"
import { i18n } from "./CampaignOutOfFundsNotification.i18n"
import {
  CampaignOutOfFundsNotificationProps,
  CommonNotificationProps,
} from "../../types"

const CampaignOutOfFundsNotification = React.memo(
  (props: CommonNotificationProps<CampaignOutOfFundsNotificationProps>) => {
    return <CampaignNotification {...props} i18n={i18n} />
  }
)

export { CampaignOutOfFundsNotification }
