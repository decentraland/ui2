import React from "react"
import { CampaignNotification } from "./CampaignNotification"
import { i18n } from "./CampaignOutOfStockNotification.i18n"
import {
  CampaignOutOfStockNotificationProps,
  CommonNotificationProps,
} from "../../types"

const CampaignOutOfStockNotification = React.memo(
  (props: CommonNotificationProps<CampaignOutOfStockNotificationProps>) => {
    return <CampaignNotification {...props} i18n={i18n} />
  }
)

export { CampaignOutOfStockNotification }
