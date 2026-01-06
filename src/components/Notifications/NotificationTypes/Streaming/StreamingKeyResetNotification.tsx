import React from "react"
import { streamingKeyResetI18n } from "./Streaming.i18n"
import { StreamingNotification } from "./StreamingNotification"
import {
  CommonNotificationProps,
  StreamingKeyResetNotificationProps,
} from "../../Notifications.types"

const StreamingKeyResetNotification = React.memo(
  (props: CommonNotificationProps<StreamingKeyResetNotificationProps>) => {
    return <StreamingNotification {...props} i18n={streamingKeyResetI18n} />
  }
)

export { StreamingKeyResetNotification }
