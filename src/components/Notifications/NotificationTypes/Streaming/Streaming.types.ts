import {
  CommonNotificationProps,
  StreamingKeyExpiredNotificationProps,
  StreamingKeyResetNotificationProps,
  StreamingKeyRevokeNotificationProps,
  StreamingPlaceUpdatedNotificationProps,
  StreamingTimeExceededNotificationProps,
} from "../../Notifications.types"

type StreamingNotificationProps =
  | StreamingKeyResetNotificationProps
  | StreamingKeyRevokeNotificationProps
  | StreamingKeyExpiredNotificationProps
  | StreamingTimeExceededNotificationProps
  | StreamingPlaceUpdatedNotificationProps

type StreamingCommonNotificationProps =
  CommonNotificationProps<StreamingNotificationProps> & {
    i18n: Record<string, { title: string; description: string }>
  }

export type { StreamingCommonNotificationProps, StreamingNotificationProps }
