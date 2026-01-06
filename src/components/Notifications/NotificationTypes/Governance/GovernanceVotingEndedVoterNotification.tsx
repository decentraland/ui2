import React from "react"
import { Link } from "@mui/material"
import { governanceVotingEndedVoterI18n } from "./Governance.i18n"
import { VotingEndedIcon } from "../../../Icon"
import { NotificationItemText } from "../../NotificationItem"
import { SpanHighlighted } from "../../NotificationItem/NotificationItem.styled"
import {
  CommonNotificationProps,
  GovernanceVotingEndedVoterNotificationProps,
} from "../../Notifications.types"

const GovernanceVotingEndedVoterNotification = React.memo(
  (
    props: CommonNotificationProps<GovernanceVotingEndedVoterNotificationProps>
  ) => {
    const { notification, locale } = props
    return (
      <NotificationItemText
        image={<VotingEndedIcon />}
        locale={locale}
        notification={notification}
        title={
          <>
            {governanceVotingEndedVoterI18n[locale].title}{" "}
            <SpanHighlighted>
              {notification.metadata.proposalTitle}
            </SpanHighlighted>
          </>
        }
        description={
          <>
            <Link href={notification.metadata.link}>
              {governanceVotingEndedVoterI18n[locale].description.link_text}
            </Link>{" "}
            {governanceVotingEndedVoterI18n[locale].description.end}
          </>
        }
      />
    )
  }
)

export { GovernanceVotingEndedVoterNotification }
