import React from 'react'
import { landRentedI18n } from './Land.i18n'
import { LandRentedIcon } from '../../../Icon'
import { IconBadge, IconBadgeIcon } from '../../../IconBadge'
import { NotificationItemText } from '../../NotificationItem'
import { CommonNotificationProps, LandRentedNotificationProps } from '../../Notifications.types'

const LandRentedNotification = React.memo((props: CommonNotificationProps<LandRentedNotificationProps>) => {
  const { notification, locale, renderProfile } = props

  const tenant = renderProfile ? renderProfile(notification.metadata.tenant)! : notification.metadata.tenant
  return (
    <NotificationItemText
      image={<LandRentedIcon />}
      locale={locale}
      notification={notification}
      title={landRentedI18n[locale].title}
      description={
        <>
          {landRentedI18n[locale].description.start}{' '}
          <IconBadge
            inline
            icon={IconBadgeIcon.Places}
            text={notification.metadata.land}
            onClick={() => window.open(notification.metadata.link, '_blank')}
          />{' '}
          {landRentedI18n[locale].description.end} {tenant}
        </>
      }
    />
  )
})

export { LandRentedNotification }
