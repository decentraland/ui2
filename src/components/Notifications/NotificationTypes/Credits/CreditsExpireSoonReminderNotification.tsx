import React from 'react'
import { creditsExpireSoonReminderI18n } from './Credits.i18n'
import { CreditsExpireSoonReminderIcon } from '../../../Icon/Notifications/CreditsExpireSoonReminderIcon'
import { NotificationItemText } from '../../NotificationItem'
import { CommonNotificationProps } from '../../Notifications.types'
import { replaceWithValues } from '../../utils'
import { CreditsExpireSoonReminderNotificationProps } from './Credits.types'

const CreditsExpireSoonReminderNotification = React.memo((props: CommonNotificationProps<CreditsExpireSoonReminderNotificationProps>) => {
  const { notification, locale } = props
  return (
    <NotificationItemText
      image={<CreditsExpireSoonReminderIcon width={48} height={48} />}
      locale={locale}
      notification={notification}
      title={creditsExpireSoonReminderI18n[locale].title}
      description={replaceWithValues(creditsExpireSoonReminderI18n[locale].description, {
        date: notification.metadata.expirationDate
      })}
    />
  )
})

export { CreditsExpireSoonReminderNotification }
