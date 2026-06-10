import React from 'react'
import { friendshipAcceptedI18n } from './Social.i18n'
import { Address } from '../../../Address'
import { ReferralInviteFriendsIcon } from '../../../Icon'
import { NotificationItemText } from '../../NotificationItem'
import { CommonNotificationProps, FriendshipAcceptedNotificationProps } from '../../Notifications.types'
import { replaceWithValues } from '../../utils'

const FriendshipAcceptedNotification = React.memo((props: CommonNotificationProps<FriendshipAcceptedNotificationProps>) => {
  const { notification, locale, renderProfile } = props
  const { sender } = notification.metadata
  const senderLabel = renderProfile?.(sender.address) || sender.name || <Address shorten value={sender.address} />

  return (
    <NotificationItemText
      image={<ReferralInviteFriendsIcon width={48} height={48} />}
      locale={locale}
      notification={notification}
      title={replaceWithValues(friendshipAcceptedI18n[locale].title, { sender: senderLabel })}
      description={friendshipAcceptedI18n[locale].description}
    />
  )
})

export { FriendshipAcceptedNotification }
