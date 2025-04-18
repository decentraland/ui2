import {
  CommonNotificationProps,
  NotificationLocale,
  StreamingKeyExpiredNotificationProps,
  StreamingKeyResetNotificationProps,
  StreamingKeyRevokeNotificationProps,
  StreamingPlaceUpdatedNotificationProps,
  StreamingTimeExceededNotificationProps,
} from "components/Notifications/types"

type StreamingNotificationProps =
  | StreamingKeyResetNotificationProps
  | StreamingKeyRevokeNotificationProps
  | StreamingKeyExpiredNotificationProps
  | StreamingTimeExceededNotificationProps
  | StreamingPlaceUpdatedNotificationProps

type i18nProps = {
  title: string
  description: string
}

type StreamingCommonNotificationProps =
  CommonNotificationProps<StreamingNotificationProps> & {
    i18n: Record<NotificationLocale, i18nProps>
  }

export type {
  StreamingNotificationProps,
  StreamingCommonNotificationProps,
  i18nProps,
}
