import React from 'react'
import { Link } from '@mui/material'
import { eventDeletedI18n } from './Events.i18n'
import { EventDeletedIcon } from '../../../Icon'
import { NotificationItemText } from '../../NotificationItem'
import { CommonNotificationProps, EventDeletedNotificationProps } from '../../Notifications.types'

const EventDeletedNotification = React.memo((props: CommonNotificationProps<EventDeletedNotificationProps>) => {
  const { notification, locale } = props
  const { title, myHangouts } = notification.metadata
  return (
    <NotificationItemText
      image={<EventDeletedIcon />}
      locale={locale}
      notification={notification}
      title={eventDeletedI18n[locale].title}
      descriptionHref={myHangouts}
      description={
        <>
          {eventDeletedI18n[locale].description.start} <Link href={myHangouts}>{title}</Link> {eventDeletedI18n[locale].description.end}
        </>
      }
    />
  )
})

export { EventDeletedNotification }
