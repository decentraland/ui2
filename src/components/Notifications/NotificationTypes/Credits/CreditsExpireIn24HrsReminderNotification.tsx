import React from 'react'
import { creditsExpireIn24HrsReminderI18n } from './Credits.i18n'
import { CreditsExpireSoonReminderIcon } from '../../../Icon/Notifications/CreditsExpireSoonReminderIcon'
import { NotificationItemText } from '../../NotificationItem'
import { CommonNotificationProps } from '../../Notifications.types'
import { replaceWithValues } from '../../utils'
import { CreditsExpireIn24HrsReminderNotificationProps } from './Credits.types'

const CreditsExpireIn24HrsReminderNotification = React.memo(
  (props: CommonNotificationProps<CreditsExpireIn24HrsReminderNotificationProps>) => {
    const { notification, locale } = props
    return (
      <NotificationItemText
        image={<CreditsExpireSoonReminderIcon width={48} height={48} />}
        locale={locale}
        notification={notification}
        title={creditsExpireIn24HrsReminderI18n[locale].title}
        description={replaceWithValues(creditsExpireIn24HrsReminderI18n[locale].description, {
          date: notification.metadata.expirationDate
        })}
      />
    )
  }
)

export { CreditsExpireIn24HrsReminderNotification }
