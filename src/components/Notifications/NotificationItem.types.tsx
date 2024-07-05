import { NotificationLocale } from "./types"
import { NotificationItemImageProps } from "./NotificationItemImage.types"

type NotificationItemProps = NotificationItemImageProps & {
  timestamp: number
  isNew: boolean
  locale: NotificationLocale
}

export { NotificationItemProps }
