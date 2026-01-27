import React from 'react'
import { Network } from '@dcl/schemas'
import { useTheme } from '@mui/material'
import { bidReceivedI18n } from './Marketplace.i18n'
import { BidAcceptedIcon } from '../../../Icon'
import { Mana } from '../../../Mana'
import { NotificationItemText } from '../../NotificationItem'
import { NotificationItemNFTLink } from '../../NotificationItemNFTLink'
import { BidReceivedNotificationProps, CommonNotificationProps } from '../../Notifications.types'
import { formatMana, getBGColorByRarity } from '../../utils'

const BidReceivedNotification = React.memo((props: CommonNotificationProps<BidReceivedNotificationProps>) => {
  const { notification, locale } = props
  const theme = useTheme()
  return (
    <NotificationItemText
      image={notification.metadata.image}
      imageBackgroundColor={getBGColorByRarity(notification.metadata.rarity)}
      badgeIcon={<BidAcceptedIcon />}
      locale={locale}
      notification={notification}
      title={bidReceivedI18n[locale].title}
      description={
        <>
          {bidReceivedI18n[locale].description.start}{' '}
          <Mana
            inline
            network={notification.metadata.network === 'polygon' ? Network.MATIC : Network.ETHEREUM}
            color={theme.palette.text.secondary}
          >
            {formatMana(notification.metadata.price)}
          </Mana>{' '}
          {bidReceivedI18n[locale].description.middle}{' '}
          <NotificationItemNFTLink
            name={notification.metadata.nftName}
            rarity={notification.metadata.rarity}
            link={notification.metadata.link}
          />
        </>
      }
    />
  )
})

export { BidReceivedNotification }
