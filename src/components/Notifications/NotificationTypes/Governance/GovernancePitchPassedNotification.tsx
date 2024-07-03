import React from "react"
import { Link } from "@mui/material"
import { i18n } from "./GovernancePitchPassedNotification.i18n"
import { PitchIcon } from "../../../Icon"
import { NotificationItem } from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
  SpanHighlighted,
} from "../../NotificationItem.styled"
import {
  CommonNotificationProps,
  GovernancePitchPassedNotificationProps,
} from "../../types"

const GovernancePitchPassedNotification = React.memo(
  (props: CommonNotificationProps<GovernancePitchPassedNotificationProps>) => {
    const { notification, locale } = props
    return (
      <NotificationItem
        image={<PitchIcon />}
        timestamp={notification.timestamp}
        isNew={!notification.read}
        locale={locale}
      >
        <NotificationItemTitle>
          {i18n[locale].title.start}{" "}
          <SpanHighlighted>
            {notification.metadata.proposalTitle}
          </SpanHighlighted>{" "}
          {i18n[locale].title.end}
        </NotificationItemTitle>
        <NotificationItemDescription color="inherit" underline="none">
          {i18n[locale].description.start}{" "}
          <Link href={notification.metadata.link}>
            {i18n[locale].description.link_text}
          </Link>
        </NotificationItemDescription>
      </NotificationItem>
    )
  }
)

export { GovernancePitchPassedNotification }
