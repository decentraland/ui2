import React from "react"
import { Link } from "@mui/material"
import { i18n } from "./GovernanceProposalEnactedNotification.i18n"
import { ProjectEnactedIcon } from "../../../Icon"
import { NotificationItem } from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
} from "../../NotificationItem.styled"
import {
  CommonNotificationProps,
  GovernanceProposalEnactedNotificationProps,
} from "../../types"

const GovernanceProposalEnactedNotification = React.memo(
  (
    props: CommonNotificationProps<GovernanceProposalEnactedNotificationProps>
  ) => {
    const { notification, locale } = props
    return (
      <NotificationItem
        image={<ProjectEnactedIcon />}
        timestamp={notification.timestamp}
        isNew={!notification.read}
        locale={locale}
      >
        <NotificationItemTitle>{i18n[locale].title}</NotificationItemTitle>
        <NotificationItemDescription color="inherit" underline="none">
          {i18n[locale].description.start}{" "}
          <Link href={notification.metadata.link}>
            {notification.metadata.link}
          </Link>{" "}
          {i18n[locale].description.end}
        </NotificationItemDescription>
      </NotificationItem>
    )
  }
)

export { GovernanceProposalEnactedNotification }
