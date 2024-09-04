import React from "react"
import { i18n } from "./CampaignGasPriceHigherThanExpectedNotification.i18n"
import { CampaignNotification } from "./CampaignNotification"
import {
  CampaignGasPriceHigherThanExpectedNotificationProps,
  CommonNotificationProps,
} from "../../types"

const CampaignGasPriceHigherThanExpectedNotification = React.memo(
  (
    props: CommonNotificationProps<CampaignGasPriceHigherThanExpectedNotificationProps>
  ) => {
    return <CampaignNotification {...props} i18n={i18n} />
  }
)

export { CampaignGasPriceHigherThanExpectedNotification }
