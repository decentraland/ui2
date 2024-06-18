import React from "react"
import { Link } from "@mui/material"
import TenderIcon from "../../../Icon/Notifications/TenderIcon"
import NotificationItem from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
  SpanHighlighted,
} from "../../NotificationItem.styled"
import {
  CommonNotificationProps,
  GovernanceTenderPassedNotificationProps,
} from "../../types"

const i18N = {
  en: {
    description: (link: string): React.ReactNode => (
      <>
        If think you can tackle this solution, propose a Project and get funding
        from the DAO <Link href={link}>here</Link>.
      </>
    ),
    title: (proposalTitle: string): React.ReactNode => (
      <>
        The Tender &quot;
        <SpanHighlighted>{proposalTitle}</SpanHighlighted>
        &quot; can now receive Bid Projects
      </>
    ),
  },
  es: {
    description: (link: string): React.ReactNode => (
      <>
        Si crees que puedes abordar esta solución, propón un proyecto y obtén
        financiación del DAO <Link href={link}>aquí</Link>.
      </>
    ),
    title: (proposalTitle: string): React.ReactNode => (
      <>
        La Licitación &quot;
        <SpanHighlighted>{proposalTitle}</SpanHighlighted>
        &quot; ahora puede recibir Proyectos de Oferta
      </>
    ),
  },
  zh: {
    description: (link: string): React.ReactNode => (
      <>
        如果你认为可以解决这个问题，提出一个项目并从DAO获得资金支持{" "}
        <Link href={link}>这里</Link>.
      </>
    ),
    title: (proposalTitle: string): React.ReactNode => (
      <>
        投标 &quot;
        <SpanHighlighted>{proposalTitle}</SpanHighlighted>
        &quot; 现在可以接收项目投标
      </>
    ),
  },
}

export default function GovernanceTenderPassedNotification(
  props: CommonNotificationProps<GovernanceTenderPassedNotificationProps>
) {
  const { notification, locale } = props

  return (
    <NotificationItem
      image={{ image: <TenderIcon fontSize="inherit" /> }}
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
