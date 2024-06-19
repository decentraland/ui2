import React from "react"
import { Link } from "@mui/material"
import AccessRestrictedIcon from "../../../Icon/Notifications/AccessRestrictedIcon"
import NotificationItem from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
} from "../../NotificationItem.styled"
import {
  CommonNotificationProps,
  WorldsAccessRestrictedNotificationProps,
} from "../../types"

const i18N = {
  en: {
    description: (link: string): React.ReactNode => (
      <>
        Access to your Worlds has been restricted due to{" "}
        <Link href={link}>insufficient resources</Link>.
      </>
    ),
    title: "Worlds restricted",
  },
  es: {
    description: (link: string): React.ReactNode => (
      <>
        El acceso a tus Mundos ha sido restringido debido a{" "}
        <Link href={link}>falta de recursos</Link>.
      </>
    ),
    title: "Mundos restringidos",
  },
  zh: {
    description: (link: string): React.ReactNode => (
      <>
        由于资源不足，
        <Link href={link}>访问您的世界受到限制</Link>.
      </>
    ),
    title: "世界限制",
  },
}

export default function WorldsAccessRestrictedNotification(
  props: CommonNotificationProps<WorldsAccessRestrictedNotificationProps>
) {
  const { notification, locale } = props
  return (
    <NotificationItem
      image={{ image: <AccessRestrictedIcon fontSize="inherit" /> }}
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
