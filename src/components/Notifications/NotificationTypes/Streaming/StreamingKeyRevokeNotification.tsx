import React from "react"
import { i18n } from "./StreamingKeyRevokeNotification.i18n"
import { StreamingNotification } from "./StreamingNotification"
import {
  CommonNotificationProps,
  StreamingKeyRevokeNotificationProps,
} from "../../types"

const StreamingKeyRevokeNotification = React.memo(
  (props: CommonNotificationProps<StreamingKeyRevokeNotificationProps>) => {
    return <StreamingNotification {...props} i18n={i18n} />
  }
)

export { StreamingKeyRevokeNotification }
