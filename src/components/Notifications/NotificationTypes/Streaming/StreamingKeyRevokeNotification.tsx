import React from "react"
import { streamingKeyRevokeI18n } from "./Streaming.i18n"
import { StreamingNotification } from "./StreamingNotification"
import {
  CommonNotificationProps,
  StreamingKeyRevokeNotificationProps,
} from "../../Notifications.types"

const StreamingKeyRevokeNotification = React.memo(
  (props: CommonNotificationProps<StreamingKeyRevokeNotificationProps>) => {
    return <StreamingNotification {...props} i18n={streamingKeyRevokeI18n} />
  }
)

export { StreamingKeyRevokeNotification }
