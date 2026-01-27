import React from 'react'
import { creditsDoNotMissOutI18n } from './Credits.i18n'
import { CreditsIcon } from '../../../Icon/Notifications/CreditsIcon'
import { NotificationItemText } from '../../NotificationItem'
import { CommonNotificationProps } from '../../Notifications.types'
import { CreditsDoNotMissOutNotificationProps } from './Credits.types'

const CreditsDoNotMissOutNotification = React.memo((props: CommonNotificationProps<CreditsDoNotMissOutNotificationProps>) => {
  const { notification, locale } = props
  return (
    <NotificationItemText
      image={<CreditsIcon width={48} height={48} />}
      locale={locale}
      notification={notification}
      title={creditsDoNotMissOutI18n[locale].title}
      description={creditsDoNotMissOutI18n[locale].description}
    />
  )
})

export { CreditsDoNotMissOutNotification }
