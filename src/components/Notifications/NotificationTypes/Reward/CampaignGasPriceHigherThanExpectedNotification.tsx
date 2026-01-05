import React from "react"
import { CampaignNotification } from "./CampaignNotification"
import { campaignGasPriceHigherThanExpectedI18n } from "./Reward.i18n"
import {
  CampaignGasPriceHigherThanExpectedNotificationProps,
  CommonNotificationProps,
} from "../../Notifications.types"

const CampaignGasPriceHigherThanExpectedNotification = React.memo(
  (
    props: CommonNotificationProps<CampaignGasPriceHigherThanExpectedNotificationProps>
  ) => {
    return (
      <CampaignNotification
        {...props}
        i18n={campaignGasPriceHigherThanExpectedI18n}
      />
    )
  }
)

export { CampaignGasPriceHigherThanExpectedNotification }
