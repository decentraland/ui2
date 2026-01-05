import React from "react"
import { streamingPlaceUpdatedI18n } from "./Streaming.i18n"
import { StreamingNotification } from "./StreamingNotification"
import {
  CommonNotificationProps,
  StreamingPlaceUpdatedNotificationProps,
} from "../../Notifications.types"

const StreamingPlaceUpdatedNotification = React.memo(
  (props: CommonNotificationProps<StreamingPlaceUpdatedNotificationProps>) => {
    return <StreamingNotification {...props} i18n={streamingPlaceUpdatedI18n} />
  }
)

export { StreamingPlaceUpdatedNotification }
