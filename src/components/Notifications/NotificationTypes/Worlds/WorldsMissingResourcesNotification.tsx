import React from "react"
import { Link } from "@mui/material"
import MissingResourcesIcon from "../../../Icon/Notifications/MissingResourcesIcon"
import NotificationItem from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
} from "../../NotificationItem.styled"
import {
  CommonNotificationProps,
  WorldsMissingResourcesNotificationProps,
} from "../../types"

const i18N = {
  en: {
    description: (link: string): React.ReactNode => (
      <>
        WORLDS access at risk in 48hs. <Link href={link}>Rectify now</Link> to
        percent disruption.
      </>
    ),
    title: "Missing resources",
  },
  es: {
    description: (link: string): React.ReactNode => (
      <>
        El acceso a tus Mundos sera restringido en 48 horas.{" "}
        <Link href={link}>Rectifique ahora</Link> para evitar interrupciones.
      </>
    ),
    title: "Faltan recursos",
  },
  zh: {
    description: (link: string): React.ReactNode => (
      <>
        世界接入在 48 小时内面临风险. <Link href={link}>立即纠正</Link>
        ，以减少中断
      </>
    ),
    title: "缺失的资源",
  },
}

export default function WorldsMissingResourcesNotification(
  props: CommonNotificationProps<WorldsMissingResourcesNotificationProps>
) {
  const { notification, locale } = props
  return (
    <NotificationItem
      image={{ image: <MissingResourcesIcon fontSize="inherit" /> }}
      timestamp={notification.timestamp}
      isNew={!notification.read}
      locale={locale}
    >
      <NotificationItemTitle>{i18N[locale].title}</NotificationItemTitle>
      <NotificationItemDescription color="inherit" underline="none">
        {i18N[locale].description(notification.metadata.url)}
      </NotificationItemDescription>
    </NotificationItem>
  )
}
