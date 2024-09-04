import React from "react"
import { CampaignsCommonNotificationProps } from "./types"
import { RewardIcon } from "../../../Icon"
import { NotificationItem } from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
} from "../../NotificationItem.styled"

const CampaignName = (props: CampaignsCommonNotificationProps) => {
  const { metadata } = props.notification

  if (metadata.link) {
    return <a href={metadata.link}>{metadata.campaignName}</a>
  }

  return <strong>{metadata.campaignName}</strong>
}

const CampaignNotification = React.memo(
  (props: CampaignsCommonNotificationProps) => {
    const { notification, locale, i18n } = props
    return (
      <NotificationItem
        image={<RewardIcon width={48} height={48} />}
        timestamp={notification.timestamp}
        isNew={!notification.read}
        locale={locale}
      >
        <NotificationItemTitle>{i18n[locale].title}</NotificationItemTitle>
        <NotificationItemDescription color="inherit" underline="none">
          {i18n[locale].description.start} <CampaignName {...props} />{" "}
          {i18n[locale].description.end}
        </NotificationItemDescription>
      </NotificationItem>
    )
  }
)

export { CampaignNotification }
