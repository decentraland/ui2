import React from 'react'
import { AppStoreBadge } from './AppStoreBadge'
import { MOBILE_STORE_DEFAULTS } from './constants'
import { GooglePlayBadge } from './GooglePlayBadge'
import { MobileStoreBadgesProps } from './MobileStoreBadges.types'
import { StoreBadgeIconWrapper, StoreBadgeLink, StoreBadgesContainer } from './MobileStoreBadges.styled'

const MobileStoreBadges = React.memo(function MobileStoreBadges({
  size = 'small',
  iosLabel = 'Download on the App Store',
  androidLabel = 'Get it on Google Play',
  iosStoreUrl = MOBILE_STORE_DEFAULTS.IOS_STORE_URL,
  androidStoreUrl = MOBILE_STORE_DEFAULTS.ANDROID_STORE_URL,
  className
}: MobileStoreBadgesProps) {
  return (
    <StoreBadgesContainer className={className}>
      <StoreBadgeLink href={iosStoreUrl} target="_blank" rel="noopener noreferrer" aria-label={iosLabel}>
        <StoreBadgeIconWrapper badgeSize={size}>
          <AppStoreBadge />
        </StoreBadgeIconWrapper>
      </StoreBadgeLink>
      <StoreBadgeLink href={androidStoreUrl} target="_blank" rel="noopener noreferrer" aria-label={androidLabel}>
        <StoreBadgeIconWrapper badgeSize={size}>
          <GooglePlayBadge />
        </StoreBadgeIconWrapper>
      </StoreBadgeLink>
    </StoreBadgesContainer>
  )
})

export { MobileStoreBadges }
