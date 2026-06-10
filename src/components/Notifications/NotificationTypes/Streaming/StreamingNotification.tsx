import React from 'react'
import { Link } from '@mui/material'
import { StreamingIcon } from '../../../Icon'
import { IconBadge, IconBadgeIcon } from '../../../IconBadge'
import { NotificationItemText } from '../../NotificationItem'
import { replaceWithValues } from '../../utils'
import { StreamingCommonNotificationProps } from './Streaming.types'

const StreamingNotification = React.memo((props: StreamingCommonNotificationProps) => {
  const { notification, locale, i18n } = props
  return (
    <NotificationItemText
      image={<StreamingIcon width={48} height={48} />}
      locale={locale}
      notification={notification}
      title={i18n[locale].title}
      description={replaceWithValues(i18n[locale].description, {
        place: notification.metadata.isWorld ? (
          <Link href={notification.metadata.url} target="_blank" rel="noreferrer">
            {notification.metadata.worldName}
          </Link>
        ) : (
          <IconBadge
            inline
            icon={IconBadgeIcon.Places}
            text={notification.metadata.position}
            onClick={() => window.open(notification.metadata.url, '_blank')}
          />
        )
      })}
    />
  )
})

export { StreamingNotification }
