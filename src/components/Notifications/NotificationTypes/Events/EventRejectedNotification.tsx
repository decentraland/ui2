import React from 'react'
import { Link } from '@mui/material'
import { eventRejectedI18n } from './Events.i18n'
import { EventRejectedIcon } from '../../../Icon'
import { NotificationItemText } from '../../NotificationItem'
import { CommonNotificationProps, EventRejectedNotificationProps } from '../../Notifications.types'

const EventRejectedNotification = React.memo((props: CommonNotificationProps<EventRejectedNotificationProps>) => {
  const { notification, locale } = props
  const { title, myHangouts } = notification.metadata
  return (
    <NotificationItemText
      image={<EventRejectedIcon />}
      locale={locale}
      notification={notification}
      title={eventRejectedI18n[locale].title}
      descriptionHref={myHangouts}
      description={
        <>
          {eventRejectedI18n[locale].description.start} <Link href={myHangouts}>{title}</Link> {eventRejectedI18n[locale].description.end}
        </>
      }
    />
  )
})

export { EventRejectedNotification }
