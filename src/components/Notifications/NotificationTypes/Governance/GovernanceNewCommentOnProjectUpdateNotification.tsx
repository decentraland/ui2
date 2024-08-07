import React from "react"
import { Link } from "@mui/material"
import { i18n } from "./GovernanceNewCommentOnProjectUpdateNotification.i18n"
import { NewCommentIcon } from "../../../Icon"
import { NotificationItem } from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
  SpanHighlighted,
} from "../../NotificationItem.styled"
import {
  CommonNotificationProps,
  GovernanceNewCommentOnProjectUpdateNotificationProps,
} from "../../types"

const GovernanceNewCommentOnProjectUpdateNotification = React.memo(
  (
    props: CommonNotificationProps<GovernanceNewCommentOnProjectUpdateNotificationProps>
  ) => {
    const { notification, locale } = props
    return (
      <NotificationItem
        image={<NewCommentIcon />}
        timestamp={notification.timestamp}
        isNew={!notification.read}
        locale={locale}
      >
        <NotificationItemTitle>
          {i18n[locale].title}{" "}
          <SpanHighlighted>
            {notification.metadata.proposalTitle}
          </SpanHighlighted>
        </NotificationItemTitle>
        <NotificationItemDescription color="inherit" underline="none">
          {i18n[locale].description.start}{" "}
          <Link href={notification.metadata.link}>
            {i18n[locale].description.link_text}
          </Link>
          .
        </NotificationItemDescription>
      </NotificationItem>
    )
  }
)

export { GovernanceNewCommentOnProjectUpdateNotification }
