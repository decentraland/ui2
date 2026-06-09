import React from 'react'
import { friendshipRequestI18n } from './Social.i18n'
import { Address } from '../../../Address'
import { ReferralInviteFriendsIcon } from '../../../Icon'
import { NotificationItemText } from '../../NotificationItem'
import { CommonNotificationProps, FriendshipRequestNotificationProps } from '../../Notifications.types'
import { replaceWithValues } from '../../utils'

const FriendshipRequestNotification = React.memo((props: CommonNotificationProps<FriendshipRequestNotificationProps>) => {
  const { notification, locale, renderProfile } = props
  const { sender } = notification.metadata
  const senderLabel = renderProfile?.(sender.address) || sender.name || <Address shorten value={sender.address} />

  return (
    <NotificationItemText
      image={<ReferralInviteFriendsIcon width={48} height={48} />}
      locale={locale}
      notification={notification}
      title={replaceWithValues(friendshipRequestI18n[locale].title, { sender: senderLabel })}
      description={friendshipRequestI18n[locale].description}
    />
  )
})

export { FriendshipRequestNotification }
