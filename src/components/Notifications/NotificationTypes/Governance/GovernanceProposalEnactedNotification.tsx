import React from "react"
import ProjectEnactedIcon from "../../../Icon/Notifications/ProjectEnactedIcon"
import NotificationItem from "../../NotificationItem"
import {
  NotificationItemDescription,
  NotificationItemTitle,
} from "../../NotificationItem.styled"
import {
  CommonNotificationProps,
  GovernanceProposalEnactedNotificationProps,
} from "../../types"

const i18N = {
  en: {
    description: (link: string): React.ReactNode => (
      <>
        Congratulations!{" "}
        <a className="dcl notification-link" href={link}>
          Your Project
        </a>{" "}
        has been successfully enacted and a funding Vesting Contract was
        created.
      </>
    ),
    title: "Your Project has been funded",
  },
  es: {
    description: (link: string): React.ReactNode => (
      <>
        Felicitaciones!{" "}
        <a className="dcl notification-link" href={link}>
          Tu proyecto
        </a>{" "}
        ha sido aprobado y un Vesting Contract de financiamiento fue creado.
      </>
    ),
    title: "Su proyecto ha sido financiado",
  },
  zh: {
    description: (link: string): React.ReactNode => (
      <>
        恭喜您！
        <a className="dcl notification-link" href={link}>
          您的项目已成功立项
        </a>
        ，并签订了资金归属合同.
      </>
    ),
    title: "您的项目已获得资助",
  },
}

export default function GovernanceProposalEnactedNotification(
  props: CommonNotificationProps<GovernanceProposalEnactedNotificationProps>
) {
  const { notification, locale } = props
  return (
    <NotificationItem
      image={{ image: <ProjectEnactedIcon fontSize="inherit" /> }}
      timestamp={notification.timestamp}
      isNew={!notification.read}
      locale={locale}
    >
      <NotificationItemTitle>{i18N[locale].title}</NotificationItemTitle>
      <NotificationItemDescription color="inherit" underline="none">
        {i18N[locale].description(notification.metadata.link)}
      </NotificationItemDescription>
    </NotificationItem>
  )
}
