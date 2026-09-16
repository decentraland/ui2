import type { NotificationItemImageProps } from '../NotificationItemImage'
import type { NotificationLocale } from '../Notifications.types'

type NotificationItemProps = NotificationItemImageProps & {
  timestamp: number
  isNew: boolean
  locale: NotificationLocale
  /* Whether the row has somewhere to go. The link itself lives on the title (see the styled file);
     this only tells the row to become the positioning context for it and to answer to the pointer. */
  clickable?: boolean
}

export { NotificationItemProps }
