import type { NotificationItemImageProps } from "../NotificationItemImage"
import type { NotificationLocale } from "../Notifications.types"

type NotificationItemProps = NotificationItemImageProps & {
  timestamp: number
  isNew: boolean
  locale: NotificationLocale
}

export { NotificationItemProps }
