import React from 'react'
import { Link } from '@mui/material'
import { worldsPermissionGrantedI18n } from './Worlds.i18n'
import { config } from '../../../../config'
import { AccessRestoredIcon, PermissionGrantedIcon } from '../../../Icon'
import { NotificationItemText } from '../../NotificationItem'
import { CommonNotificationProps, WorldsPermissionGrantedNotificationProps } from '../../Notifications.types'
import { replaceWithValues } from '../../utils'

const WORLDS_COLLABORATOR_URL = `${config.get('BUILDER_URL')}/worlds?tab=collaborator`

const WORLD_WITH_REALM_URL = `${config.get('EXPLORER_URL')}?realm=`

const WorldsPermissionGrantedNotification = React.memo((props: CommonNotificationProps<WorldsPermissionGrantedNotificationProps>) => {
  const { notification, locale } = props
  const permission = notification.metadata.permissions[0] // for now only one permission is allowed per notification
  const isAccessNotification = permission === 'access'
  const world = notification.metadata.world
  const Icon = isAccessNotification ? AccessRestoredIcon : PermissionGrantedIcon
  return (
    <NotificationItemText
      image={<Icon />}
      locale={locale}
      notification={notification}
      title={isAccessNotification ? worldsPermissionGrantedI18n[locale].accessTitle : worldsPermissionGrantedI18n[locale].title}
      description={replaceWithValues(worldsPermissionGrantedI18n[locale][permission], {
        world: (
          <Link href={isAccessNotification ? `${WORLD_WITH_REALM_URL}${world}` : WORLDS_COLLABORATOR_URL} target="_blank" rel="noreferrer">
            {world}
          </Link>
        )
      })}
    />
  )
})

export { WorldsPermissionGrantedNotification }
