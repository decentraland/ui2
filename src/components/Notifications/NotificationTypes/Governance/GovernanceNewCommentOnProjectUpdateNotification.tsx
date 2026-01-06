import React from "react"
import { Link } from "@mui/material"
import { governanceNewCommentOnProjectUpdateI18n } from "./Governance.i18n"
import { NewCommentIcon } from "../../../Icon"
import { NotificationItemText } from "../../NotificationItem"
import { SpanHighlighted } from "../../NotificationItem/NotificationItem.styled"
import {
  CommonNotificationProps,
  GovernanceNewCommentOnProjectUpdateNotificationProps,
} from "../../Notifications.types"

const GovernanceNewCommentOnProjectUpdateNotification = React.memo(
  (
    props: CommonNotificationProps<GovernanceNewCommentOnProjectUpdateNotificationProps>
  ) => {
    const { notification, locale } = props
    return (
      <NotificationItemText
        image={<NewCommentIcon />}
        locale={locale}
        notification={notification}
        title={
          <>
            {governanceNewCommentOnProjectUpdateI18n[locale].title}{" "}
            <SpanHighlighted>
              {notification.metadata.proposalTitle}
            </SpanHighlighted>
          </>
        }
        description={
          <>
            {governanceNewCommentOnProjectUpdateI18n[locale].description.start}{" "}
            <Link href={notification.metadata.link}>
              {
                governanceNewCommentOnProjectUpdateI18n[locale].description
                  .link_text
              }
            </Link>
            .
          </>
        }
      />
    )
  }
)

export { GovernanceNewCommentOnProjectUpdateNotification }
