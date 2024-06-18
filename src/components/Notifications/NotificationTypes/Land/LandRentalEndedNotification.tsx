import React from "react"
import RentPeriodEndingIcon from "../../../Icon/Notifications/RentPeriodEndingIcon"
import IconBadge from "../../../IconBadge/IconBadge"
import { IconBadgeIcon } from "../../../IconBadge/IconBadge.types"
import NotificationItem from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
} from "../../NotificationItem.styled"
import {
  CommonNotificationProps,
  LandRentalEndedNotificationProps,
} from "../../types"

const i18N = {
  en: {
    description: (coords: string, link: string): React.ReactNode => (
      <>
        The rent on your LAND at
        <IconBadge
          icon={IconBadgeIcon.Places}
          text={coords}
          onClick={() => window.open(link, "_blank")}
        />
        has ended
      </>
    ),
    title: "Rent Period Ended",
  },
  es: {
    description: (coords: string, link: string): React.ReactNode => (
      <>
        El alquiler de su LAND en
        <IconBadge
          icon={IconBadgeIcon.Places}
          text={coords}
          onClick={() => window.open(link, "_blank")}
        />
        ha terminado
      </>
    ),
    title: "Período de alquiler finalizado",
  },
  zh: {
    description: (coords: string, link: string): React.ReactNode => (
      <>
        土地上的租金
        <IconBadge
          icon={IconBadgeIcon.Places}
          text={coords}
          onClick={() => window.open(link, "_blank")}
        />
        结束了
      </>
    ),
    title: "租金期结束",
  },
}

export default function LandRentalEndedNotificationCmp(
  props: CommonNotificationProps<LandRentalEndedNotificationProps>
) {
  const { notification, locale } = props
  return (
    <NotificationItem
      image={{ image: <RentPeriodEndingIcon fontSize="inherit" /> }}
      timestamp={notification.timestamp}
      isNew={!notification.read}
      locale={locale}
    >
      <NotificationItemTitle>{i18N[locale].title}</NotificationItemTitle>
      <NotificationItemDescription color="inherit" underline="none">
        {i18N[locale].description(
          notification.metadata.land,
          notification.metadata.link
        )}
      </NotificationItemDescription>
    </NotificationItem>
  )
}
