import React from 'react'
import { creditsOnDemandGrantedI18n, creditsShopGrantedI18n, creditsStudioGiftI18n } from './Credits.i18n'
import { CreditsIcon } from '../../../Icon/Notifications/CreditsIcon'
import { NotificationItemText } from '../../NotificationItem'
import { CommonNotificationProps } from '../../Notifications.types'
import { replaceWithValues } from '../../utils'
import { CreditsOnDemandGrantedNotificationProps } from './Credits.types'

/** Decentraland's own sites, exactly: the only places a credits notification may link to. */
const DECENTRALAND_HOSTS = ['decentraland.org', 'decentraland.zone', 'decentraland.today']

const toDecentralandUrl = (link: string | undefined): string | undefined => {
  if (!link) return undefined
  try {
    const url = new URL(link)
    return url.protocol === 'https:' && DECENTRALAND_HOSTS.includes(url.hostname) ? url.toString() : undefined
  } catch {
    return undefined
  }
}

/**
 * Credits granted on demand. Shop credits never expire and are spent in the Shop, and a studio's gift names the
 * studio. They are told apart by their `denomination`: the retired season grants never carried one, so any
 * denomination means Shop credits. A season grant gets neutral past-tense copy (see `creditsOnDemandGrantedI18n`).
 */
const CreditsOnDemandGrantedNotification = React.memo((props: CommonNotificationProps<CreditsOnDemandGrantedNotificationProps>) => {
  const { notification, locale } = props
  const { creditsGranted, denomination, studioName, link } = notification.metadata
  const amount = (creditsGranted ?? 0).toLocaleString(locale)
  const isShopCredits = !!denomination
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
      descriptionHref={isShopCredits ? toDecentralandUrl(link) : undefined}
    />
  )
})

export { CreditsOnDemandGrantedNotification }
