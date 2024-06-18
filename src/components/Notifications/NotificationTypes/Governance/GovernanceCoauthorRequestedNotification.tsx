import React from "react"
import { Link } from "@mui/material"
import CoauthorIcon from "../../../Icon/Notifications/CoauthorIcon"
import NotificationItem from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
  SpanHighlighted,
} from "../../NotificationItem.styled"
import {
  CommonNotificationProps,
  GovernanceCoauthorRequestedNotificationProps,
} from "../../types"

const i18N = {
  en: {
    description: (link: string): React.ReactNode => (
      <>
        You&apos;ve been invited to collaborate as a co-author on a published
        proposal. Accept it or reject it <Link href={link}>here</Link>.
      </>
    ),
    title: "Co-author request received",
  },
  es: {
    description: (link: string): React.ReactNode => (
      <>
        Has sido invitado a colaborar como coautor en un propuesta publicada.
        Aceptala o rechazala <Link href={link}>aqui</Link>.
      </>
    ),
    title: "Solicitud de coautoria",
  },
  zh: {
    description: (link: string): React.ReactNode => (
      <>
        您受邀作为共同作者参与一项已发表提案的合作.{" "}
        <Link href={link}>在此接受或拒绝</Link>.
      </>
    ),
    title: "收到共同作者申请",
  },
}

export default function GovernanceCoauthorRequestedNotification(
  props: CommonNotificationProps<GovernanceCoauthorRequestedNotificationProps>
) {
  const { notification, locale } = props
  return (
    <NotificationItem
      image={{ image: <CoauthorIcon fontSize="inherit" /> }}
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
