import React from "react"
import { StreamingNotification } from "./StreamingNotification"
import { i18n } from "./StreamingPlaceUpdatedNotification.i18n"
import {
  CommonNotificationProps,
  StreamingPlaceUpdatedNotificationProps,
} from "../../types"

const StreamingPlaceUpdatedNotification = React.memo(
  (props: CommonNotificationProps<StreamingPlaceUpdatedNotificationProps>) => {
    return <StreamingNotification {...props} i18n={i18n} />
  }
)

export { StreamingPlaceUpdatedNotification }
