import React from "react"
import { Link } from "@mui/material"
import VotingEndedIcon from "../../../Icon/Notifications/VotingEndedIcon"
import NotificationItem from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
  SpanHighlighted,
} from "../../NotificationItem.styled"
import {
  CommonNotificationProps,
  GovernanceVotingEndedVoterNotificationProps,
} from "../../types"

const i18N = {
  en: {
    description: (link: string): React.ReactNode => (
      <>
        <Link href={link}>Discover the results</Link> of the proposal you
        participated in as a voter. Your input matters!
      </>
    ),
    title: "Voting ended on a proposal you voted on",
  },
  es: {
    description: (link: string): React.ReactNode => (
      <>
        <Link href={link}>Descubre los resultados</Link> de la propuesta en la
        que participaste como votante. Tu opinion es importante!
      </>
    ),
    title: "La votacion ha finalizado en una propuesta que votaste",
  },
  zh: {
    description: (link: string): React.ReactNode => (
      <>
        <Link href={link}>了解您作为选民参与的提案的结果</Link>.
        您的意见很重要！
      </>
    ),
    title: "您已投票的提案投票结束",
  },
}

export default function GovernanceVotingEndedVoterNotification(
  props: CommonNotificationProps<GovernanceVotingEndedVoterNotificationProps>
) {
  const { notification, locale } = props
  return (
    <NotificationItem
      image={{ image: <VotingEndedIcon fontSize="inherit" /> }}
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
