import React from "react"
import { Link } from "@mui/material"
import ProposalFinishedIcon from "../../../Icon/Notifications/ProposalFinishedIcon"
import NotificationItem from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
  SpanHighlighted,
} from "../../NotificationItem.styled"
import {
  CommonNotificationProps,
  GovernanceAuthoredProposalFinishedNotificationProps,
} from "../../types"

const i18N = {
  en: {
    description: (link: string): React.ReactNode => (
      <>
        The votes are in! Find out the outcome of the voting on{" "}
        <Link href={link}> your proposal</Link>.
      </>
    ),
    title: "Voting ended on your proposal",
  },
  es: {
    description: (link: string): React.ReactNode => (
      <>
        Ya estan los votos! Descubre el resultado de la votacion en{" "}
        <Link href={link}>tu propuesta</Link>.
      </>
    ),
    title: "La votacion finalizo en tu propuesta",
  },
  zh: {
    description: (link: string): React.ReactNode => (
      <>
        投票结果出来了！
        <Link href={link}>了解您提案的投票结果</Link>.
      </>
    ),
    title: "您的提案投票结束",
  },
}

export default function GovernanceAuthoredProposalFinishedNotification(
  props: CommonNotificationProps<GovernanceAuthoredProposalFinishedNotificationProps>
) {
  const { notification, locale } = props
  return (
    <NotificationItem
      image={{ image: <ProposalFinishedIcon fontSize="inherit" /> }}
      timestamp={notification.timestamp}
      isNew={!notification.read}
      locale={locale}
    >
      <NotificationItemTitle>
        {i18N[locale].title}{" "}
        <SpanHighlighted>{notification.metadata.proposalTitle}</SpanHighlighted>
      </NotificationItemTitle>
      <NotificationItemDescription color="inherit" underline="none">
        {i18N[locale].description(notification.metadata.link)}
      </NotificationItemDescription>
    </NotificationItem>
  )
}
