import React from "react"
import { streamingKeyExpiredI18n } from "./Streaming.i18n"
import { StreamingNotification } from "./StreamingNotification"
import {
  CommonNotificationProps,
  StreamingKeyExpiredNotificationProps,
} from "../../Notifications.types"

const StreamingKeyExpiredNotification = React.memo(
  (props: CommonNotificationProps<StreamingKeyExpiredNotificationProps>) => {
    return <StreamingNotification {...props} i18n={streamingKeyExpiredI18n} />
  }
)

export { StreamingKeyExpiredNotification }
