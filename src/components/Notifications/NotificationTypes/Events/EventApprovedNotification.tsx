import React from 'react'
import { Link } from '@mui/material'
import { eventApprovedI18n } from './Events.i18n'
import { EventApprovedIcon } from '../../../Icon'
import { NotificationItemText } from '../../NotificationItem'
import { CommonNotificationProps, EventApprovedNotificationProps } from '../../Notifications.types'

const EventApprovedNotification = React.memo((props: CommonNotificationProps<EventApprovedNotificationProps>) => {
  const { notification, locale } = props
  return (
    <NotificationItemText
      image={<EventApprovedIcon />}
      locale={locale}
      notification={notification}
      title={eventApprovedI18n[locale].title}
      descriptionHref={notification.metadata.link}
      description={
        <>
          {eventApprovedI18n[locale].description.start} <Link href={notification.metadata.link}>{notification.metadata.name}</Link>{' '}
          {eventApprovedI18n[locale].description.end}
        </>
      }
    />
  )
})

export { EventApprovedNotification }
