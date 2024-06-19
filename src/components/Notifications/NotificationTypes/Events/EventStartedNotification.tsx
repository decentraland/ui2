import React from "react"
import { Link } from "@mui/material"
import EventStartedIcon from "../../../Icon/Notifications/EventStartedIcon"
import NotificationItem from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
} from "../../NotificationItem.styled"
import {
  CommonNotificationProps,
  EventsStartedNotificationProps,
} from "../../types"

const i18N = {
  en: {
    description: (
      metadata: EventsStartedNotificationProps["metadata"]
    ): React.ReactNode => (
      <>
        The event <Link href={metadata.link}>{metadata.name}</Link> has begun!
      </>
    ),
    title: "Event started",
  },
  es: {
    description: (
      metadata: EventsStartedNotificationProps["metadata"]
    ): React.ReactNode => (
      <>
        El evento <Link href={metadata.link}>{metadata.name}</Link> ha empezado!
      </>
    ),
    title: "Evento ha comenzado",
  },
  zh: {
    description: (
      metadata: EventsStartedNotificationProps["metadata"]
    ): React.ReactNode => (
      <>
        事件 <Link href={metadata.link}>{metadata.name}</Link> 已开始
      </>
    ),
    title: "事件开始",
  },
}

export default function EventsStartedNotification(
  props: CommonNotificationProps<EventsStartedNotificationProps>
) {
  const { notification, locale } = props
  return (
    <NotificationItem
      image={{ image: <EventStartedIcon fontSize="inherit" /> }}
      timestamp={notification.timestamp}
      isNew={!notification.read}
      locale={locale}
    >
      <NotificationItemTitle>{i18N[locale].title}</NotificationItemTitle>
      <NotificationItemDescription
        href={notification.metadata.link}
        color="inherit"
        underline="none"
      >
        {i18N[locale].description(notification.metadata)}
      </NotificationItemDescription>
    </NotificationItem>
  )
}
