import React from "react"
import { Link } from "@mui/material"
import NewCommentIcon from "../../../Icon/Notifications/NewCommentIcon"
import NotificationItem from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
  SpanHighlighted,
} from "../../NotificationItem.styled"
import {
  CommonNotificationProps,
  GovernanceNewCommentOnProjectUpdateNotificationProps,
} from "../../types"

const i18N = {
  en: {
    description: (link: string): React.ReactNode => (
      <>
        Engage in a productive conversation by replying to{" "}
        <Link href={link}>this comment</Link>.
      </>
    ),
    title: "New comment on your update for your project",
  },
  es: {
    description: (link: string): React.ReactNode => (
      <>
        Participe en una conversación productiva respondiendo a{" "}
        <Link href={link}>este comentario</Link>.
      </>
    ),
    title: "Nuevo comentario en la actualización del proyecto",
  },
  zh: {
    description: (link: string): React.ReactNode => (
      <>
        <Link href={link}>通过回复此评论</Link>
        ，参与到富有成效的对话中。
      </>
    ),
    title: "您的更新收到了新评论",
  },
}

export default function GovernanceNewCommentOnProjectUpdateNotification(
  props: CommonNotificationProps<GovernanceNewCommentOnProjectUpdateNotificationProps>
) {
  const { notification, locale } = props
  return (
    <NotificationItem
      image={{ image: <NewCommentIcon fontSize="inherit" /> }}
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
