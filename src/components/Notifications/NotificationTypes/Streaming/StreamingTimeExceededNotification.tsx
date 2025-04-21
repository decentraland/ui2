import React from "react"
import { StreamingNotification } from "./StreamingNotification"
import { i18n } from "./StreamingTimeExceededNotification.i18n"
import {
  CommonNotificationProps,
  StreamingTimeExceededNotificationProps,
} from "../../types"

const StreamingTimeExceededNotification = React.memo(
  (props: CommonNotificationProps<StreamingTimeExceededNotificationProps>) => {
    return <StreamingNotification {...props} i18n={i18n} />
  }
)

export { StreamingTimeExceededNotification }
