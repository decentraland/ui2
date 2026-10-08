import React from 'react'
import { creditsOnDemandGrantedI18n, creditsShopGrantedI18n, creditsStudioGiftI18n } from './Credits.i18n'
import { CreditsIcon } from '../../../Icon/Notifications/CreditsIcon'
import { NotificationItemText } from '../../NotificationItem'
import { CommonNotificationProps } from '../../Notifications.types'
import { replaceWithValues } from '../../utils'
import { CreditsOnDemandGrantedNotificationProps } from './Credits.types'

/**
 * Credits granted on demand. Shop credits (`denomination: 'USD'`) never expire and are spent in the Shop, and a
 * studio's gift names the studio; a grant without a denomination is a retired season grant and keeps its copy.
 */
const CreditsOnDemandGrantedNotification = React.memo((props: CommonNotificationProps<CreditsOnDemandGrantedNotificationProps>) => {
  const { notification, locale } = props
  const { creditsGranted, denomination, studioName, link } = notification.metadata
  const amount = creditsGranted.toLocaleString()
  const isShopCredits = denomination === 'USD'
  const copy = !isShopCredits
    ? creditsOnDemandGrantedI18n[locale]
    : studioName
      ? creditsStudioGiftI18n[locale]
      : creditsShopGrantedI18n[locale]
  const values = { amount, studio: studioName ?? '' }

  return (
    <NotificationItemText
      image={<CreditsIcon width={48} height={48} />}
      locale={locale}
      notification={notification}
      title={replaceWithValues(copy.title, values)}
      description={replaceWithValues(copy.description, values)}
      descriptionHref={isShopCredits && link?.startsWith('https://') ? link : undefined}
    />
  )
})

export { CreditsOnDemandGrantedNotification }
