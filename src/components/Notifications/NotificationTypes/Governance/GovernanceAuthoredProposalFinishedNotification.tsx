import React from "react"
import { Link } from "@mui/material"
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
        image={<ProposalFinishedIcon />}
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
        </NotificationItemDescription>
      </NotificationItem>
    )
  }
)

export { GovernanceAuthoredProposalFinishedNotification }
