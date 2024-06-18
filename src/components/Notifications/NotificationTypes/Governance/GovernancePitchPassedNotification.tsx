import React from "react"
import { Link } from "@mui/material"
import PitchIcon from "../../../Icon/Notifications/PitchIcon"
import NotificationItem from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
  SpanHighlighted,
} from "../../NotificationItem.styled"
import {
  CommonNotificationProps,
  GovernancePitchPassedNotificationProps,
} from "../../types"

const i18N = {
  en: {
    description: (link: string): React.ReactNode => (
      <>
        Help to advance this idea by proposing potential solutions{" "}
        <Link href={link}>here</Link>.
      </>
    ),
    title: (proposalTitle: string): React.ReactNode => (
      <>
        The Pitch &quot;
        <SpanHighlighted>{proposalTitle}</SpanHighlighted>
        &quot; can now receive Tenders
      </>
    ),
  },
  es: {
    description: (link: string): React.ReactNode => (
      <>
        Ayuda a avanzar esta idea proponiendo soluciones potenciales{" "}
        <Link href={link}>aquí</Link>.
      </>
    ),
    title: (proposalTitle: string): React.ReactNode => (
      <>
        La Convocatoria &quot;
        <SpanHighlighted>{proposalTitle}</SpanHighlighted>
        &quot; ahora puede recibir licitaciones
      </>
    ),
  },
  zh: {
    description: (link: string): React.ReactNode => (
      <>
        通过提出可能的解决方案来帮助推进这个想法 <Link href={link}>这里</Link>.
      </>
    ),
    title: (proposalTitle: string): React.ReactNode => (
      <>
        投标邀请 &quot;<SpanHighlighted>{proposalTitle}</SpanHighlighted>&quot;
        现在可以接收投标
      </>
    ),
  },
}

export default function GovernancePitchPassedNotification(
  props: CommonNotificationProps<GovernancePitchPassedNotificationProps>
) {
  const { notification, locale } = props
  return (
    <NotificationItem
      image={{ image: <PitchIcon fontSize="inherit" /> }}
      timestamp={notification.timestamp}
      isNew={!notification.read}
      locale={locale}
    >
      <NotificationItemTitle>
        {i18N[locale].title(notification.metadata.proposalTitle)}
      </NotificationItemTitle>
      <NotificationItemDescription color="inherit" underline="none">
        {i18N[locale].description(notification.metadata.link)}
      </NotificationItemDescription>
    </NotificationItem>
  )
}
