import React from 'react'
import { Network } from '@dcl/schemas'
import { useTheme } from '@mui/material'
import { royaltiesEarnedI18n } from './Marketplace.i18n'
import { ManaMainnetIcon, ManaPolygonIcon } from '../../../Icon'
import { Mana } from '../../../Mana'
import { NotificationItemText } from '../../NotificationItem'
import { NotificationItemNFTLink } from '../../NotificationItemNFTLink'
import { CommonNotificationProps, RoyalitesEarnedNotificationProps } from '../../Notifications.types'
import { formatMana, getBGColorByRarity } from '../../utils'

const RoyaltiesEarnedNotification = React.memo((props: CommonNotificationProps<RoyalitesEarnedNotificationProps>) => {
  const { notification, locale } = props
  const theme = useTheme()
  return (
    <NotificationItemText
      image={notification.metadata.image}
      imageBackgroundColor={getBGColorByRarity(notification.metadata.rarity)}
      badgeIcon={notification.metadata.network === 'ethereum' ? <ManaMainnetIcon /> : <ManaPolygonIcon />}
      locale={locale}
      notification={notification}
      title={royaltiesEarnedI18n[locale].title}
      description={
        <>
          {royaltiesEarnedI18n[locale].description.start}{' '}
          <Mana
            inline
            network={notification.metadata.network === 'polygon' ? Network.MATIC : Network.ETHEREUM}
            color={theme.palette.text.secondary}
          >
            {formatMana(notification.metadata.royaltiesCut)}
          </Mana>{' '}
          {royaltiesEarnedI18n[locale].description.middle}{' '}
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

export { RoyaltiesEarnedNotification }
