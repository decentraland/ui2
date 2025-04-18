import React from "react"
import { i18n } from "./StreamingKeyExpiredNotification.i18n"
import { StreamingNotification } from "./StreamingNotification"
import {
  CommonNotificationProps,
  StreamingKeyExpiredNotificationProps,
} from "../../types"

const StreamingKeyExpiredNotification = React.memo(
  (props: CommonNotificationProps<StreamingKeyExpiredNotificationProps>) => {
    return <StreamingNotification {...props} i18n={i18n} />
  }
)

export { StreamingKeyExpiredNotification }
