import React from 'react'
import { worldsPermissionRevokedI18n } from './Worlds.i18n'
import { AccessRestrictedIcon, PermissionRevokedIcon } from '../../../Icon'
import { NotificationItemText } from '../../NotificationItem'
import { CommonNotificationProps, WorldsPermissionRevokedNotificationProps } from '../../Notifications.types'
import { replaceWithValues } from '../../utils'

const WorldsPermissionRevokedNotification = React.memo((props: CommonNotificationProps<WorldsPermissionRevokedNotificationProps>) => {
  const { notification, locale } = props
  const permission = notification.metadata.permissions[0]
  const isAccessNotification = permission === 'access'
  const Icon = isAccessNotification ? AccessRestrictedIcon : PermissionRevokedIcon

  return (
    <NotificationItemText
      image={<Icon />}
      locale={locale}
      notification={notification}
      title={isAccessNotification ? worldsPermissionRevokedI18n[locale].accessTitle : worldsPermissionRevokedI18n[locale].title}
      description={replaceWithValues(worldsPermissionRevokedI18n[locale][permission], {
        world: <strong>{notification.metadata.world}</strong>
      })}
    />
  )
})

export { WorldsPermissionRevokedNotification }
