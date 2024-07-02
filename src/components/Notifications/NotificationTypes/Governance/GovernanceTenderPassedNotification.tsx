import React from "react"
import { Link } from "@mui/material"
import { i18n } from "./GovernanceTenderPassedNotification.i18n"
import { TenderIcon } from "../../../Icon"
import { NotificationItem } from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
  SpanHighlighted,
} from "../../NotificationItem.styled"
import {
  CommonNotificationProps,
  GovernanceTenderPassedNotificationProps,
} from "../../types"

const GovernanceTenderPassedNotification = React.memo(
  (props: CommonNotificationProps<GovernanceTenderPassedNotificationProps>) => {
    const { notification, locale } = props

    return (
      <NotificationItem
        image={{ image: <TenderIcon /> }}
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

export { GovernanceTenderPassedNotification }
