import React from "react"
import { Link } from "@mui/material"
import { i18n } from "./GovernanceVotingEndedVoterNotification.i18n"
import { VotingEndedIcon } from "../../../Icon"
import { NotificationItem } from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
  SpanHighlighted,
} from "../../NotificationItem.styled"
import {
  CommonNotificationProps,
  GovernanceVotingEndedVoterNotificationProps,
} from "../../types"

const GovernanceVotingEndedVoterNotification = React.memo(
  (
    props: CommonNotificationProps<GovernanceVotingEndedVoterNotificationProps>
  ) => {
    const { notification, locale } = props
    return (
      <NotificationItem
        image={{ image: <VotingEndedIcon /> }}
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
          <Link href={notification.metadata.link}>
            {i18n[locale].description.link_text}
          </Link>{" "}
          {i18n[locale].description.end}
        </NotificationItemDescription>
      </NotificationItem>
    )
  }
)

export { GovernanceVotingEndedVoterNotification }
