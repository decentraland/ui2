import React from "react"
import { i18n } from "./StreamingKeyResetNotification.i18n"
import { StreamingNotification } from "./StreamingNotification"
import {
  CommonNotificationProps,
  StreamingKeyResetNotificationProps,
} from "../../types"

const StreamingKeyResetNotification = React.memo(
  (props: CommonNotificationProps<StreamingKeyResetNotificationProps>) => {
    return <StreamingNotification {...props} i18n={i18n} />
  }
)

export { StreamingKeyResetNotification }
