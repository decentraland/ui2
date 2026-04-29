import React from 'react'
import { Link } from '@mui/material'
import { eventRejectedI18n } from './Events.i18n'
import { EventCancelledIcon } from '../../../Icon'
import { NotificationItemText } from '../../NotificationItem'
import { CommonNotificationProps, EventRejectedNotificationProps } from '../../Notifications.types'

const EventRejectedNotification = React.memo((props: CommonNotificationProps<EventRejectedNotificationProps>) => {
  const { notification, locale } = props
  return (
    <NotificationItemText
      image={<EventCancelledIcon />}
      locale={locale}
      notification={notification}
      title={eventRejectedI18n[locale].title}
      descriptionHref={notification.metadata.link}
      description={
        <>
          {eventRejectedI18n[locale].description.start} <Link href={notification.metadata.link}>{notification.metadata.name}</Link>{' '}
          {eventRejectedI18n[locale].description.end}
        </>
      }
    />
  )
})

export { EventRejectedNotification }
