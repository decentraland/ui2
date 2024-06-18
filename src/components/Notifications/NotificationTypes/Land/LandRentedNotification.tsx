import React from "react"
import LandRentedIcon from "../../../Icon/Notifications/LandRentedIcon"
import IconBadge from "../../../IconBadge/IconBadge"
import { IconBadgeIcon } from "../../../IconBadge/IconBadge.types"
import NotificationItem from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
} from "../../NotificationItem.styled"
import {
  CommonNotificationProps,
  LandRentedNotificationProps,
} from "../../types"

const i18N = {
  en: {
    description: (
      coords: string,
      tenant: JSX.Element | string,
      link: string
    ): React.ReactNode => (
      <>
        Your LAND at
        <IconBadge
          icon={IconBadgeIcon.Places}
          text={coords}
          onClick={() => window.open(link, "_blank")}
        />
        was rented by {tenant}
      </>
    ),
    title: "LAND Rented",
  },
  es: {
    description: (
      coords: string,
      tenant: JSX.Element | string,
      link: string
    ): React.ReactNode => (
      <>
        Tu LAND en
        <IconBadge
          icon={IconBadgeIcon.Places}
          text={coords}
          onClick={() => window.open(link, "_blank")}
        />
        fue alquilada por {tenant}
      </>
    ),
    title: "LAND alquilada",
  },
  zh: {
    description: (
      coords: string,
      tenant: JSX.Element | string,
      link: string
    ): React.ReactNode => (
      <>
        你的土地
        <IconBadge
          icon={IconBadgeIcon.Places}
          text={coords}
          onClick={() => window.open(link, "_blank")}
        />
        租了 {tenant}
      </>
    ),
    title: "租用的土地",
  },
}

export default function LandRentedNotificationCmp(
  props: CommonNotificationProps<LandRentedNotificationProps>
) {
  const { notification, locale, renderProfile } = props
  return (
    <NotificationItem
      image={{ image: <LandRentedIcon fontSize="inherit" /> }}
      timestamp={notification.timestamp}
      isNew={!notification.read}
      locale={locale}
    >
      <NotificationItemTitle>{i18N[locale].title}</NotificationItemTitle>
      <NotificationItemDescription color="inherit" underline="none">
        {i18N[locale].description(
          notification.metadata.land,
          renderProfile
            ? renderProfile(notification.metadata.tenant)!
            : notification.metadata.tenant,
          notification.metadata.link
        )}
      </NotificationItemDescription>
    </NotificationItem>
  )
}
