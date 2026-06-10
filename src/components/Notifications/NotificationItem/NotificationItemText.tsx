import React from 'react'
import { NotificationItem } from './NotificationItem'
import { NotificationLocale } from '../Notifications.types'
import { NotificationItemDescription, NotificationItemTitle } from './NotificationItem.styled'
import type { NotificationItemImageProps } from '../NotificationItemImage'

type ReadableNotification = {
  timestamp: number
  read: boolean
}

type NotificationItemTextProps<N extends ReadableNotification> = NotificationItemImageProps & {
  description: React.ReactNode
  descriptionHref?: string
  locale: NotificationLocale
  notification: N
  title: React.ReactNode
}

function NotificationItemTextComponent<N extends ReadableNotification>(props: NotificationItemTextProps<N>) {
  const { description, descriptionHref, locale, notification, title, ...imageProps } = props

  return (
    <NotificationItem {...imageProps} timestamp={notification.timestamp} isNew={!notification.read} locale={locale}>
      <NotificationItemTitle>{title}</NotificationItemTitle>
      <NotificationItemDescription href={descriptionHref} color="inherit" underline="none">
        {description}
      </NotificationItemDescription>
    </NotificationItem>
  )
}

const NotificationItemText = React.memo(NotificationItemTextComponent) as unknown as typeof NotificationItemTextComponent

export type { NotificationItemTextProps }
export { NotificationItemText }
