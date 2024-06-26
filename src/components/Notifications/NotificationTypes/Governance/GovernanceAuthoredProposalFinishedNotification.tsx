import React from "react"
import { i18n } from "./GovernanceAuthoredProposalFinishedNotification.i18n"
import { ProposalFinishedIcon } from "../../../Icon"
import { NotificationItem } from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
  SpanHighlighted,
} from "../../NotificationItem.styled"
import {
  CommonNotificationProps,
  GovernanceAuthoredProposalFinishedNotificationProps,
} from "../../types"

const GovernanceAuthoredProposalFinishedNotification = React.memo(
  (
    props: CommonNotificationProps<GovernanceAuthoredProposalFinishedNotificationProps>
  ) => {
    const { notification, locale } = props
    return (
      <NotificationItem
        image={{ image: <ProposalFinishedIcon fontSize="inherit" /> }}
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
          {i18n[locale].description(notification.metadata.link)}
        </NotificationItemDescription>
      </NotificationItem>
    )
  }
)

export { GovernanceAuthoredProposalFinishedNotification }
