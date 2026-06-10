import React from 'react'
import { streamingTimeExceededI18n } from './Streaming.i18n'
import { StreamingNotification } from './StreamingNotification'
import { CommonNotificationProps, StreamingTimeExceededNotificationProps } from '../../Notifications.types'

const StreamingTimeExceededNotification = React.memo((props: CommonNotificationProps<StreamingTimeExceededNotificationProps>) => {
  return <StreamingNotification {...props} i18n={streamingTimeExceededI18n} />
})

export { StreamingTimeExceededNotification }
