import React from "react"
import { RewardIcon } from "../../../Icon"
import { NotificationItemText } from "../../NotificationItem"
import { CampaignNotificationProps } from "./Reward.types"

const CampaignName = (props: CampaignNotificationProps) => {
  const { metadata } = props.notification

  if (metadata.link) {
    return <a href={metadata.link}>{metadata.campaignName}</a>
  }

  return <strong>{metadata.campaignName}</strong>
}

const CampaignNotification = React.memo((props: CampaignNotificationProps) => {
  const { notification, locale, i18n } = props
  return (
    <NotificationItemText
      image={<RewardIcon width={48} height={48} />}
      locale={locale}
      notification={notification}
      title={i18n[locale].title}
      description={
        <>
          {i18n[locale].description.start} <CampaignName {...props} />{" "}
          {i18n[locale].description.end}
        </>
      }
    />
  )
})

export { CampaignNotification }
