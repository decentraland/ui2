import React from 'react'
import { config } from '../../config'
import { AppStoreBadge } from '../Icon/AppStoreBadge'
import { GooglePlayBadge } from '../Icon/GooglePlayBadge'
import { MobileStoreBadgesProps } from './MobileStoreBadges.types'
import { StoreBadgeIconWrapper, StoreBadgeLink, StoreBadgesContainer } from './MobileStoreBadges.styled'

const MobileStoreBadges = React.memo(function MobileStoreBadges({
  size = 'small',
  iosLabel = 'Download on the App Store',
  androidLabel = 'Get it on Google Play',
  iosStoreUrl = config.get('IOS_STORE_URL'),
  androidStoreUrl = config.get('ANDROID_STORE_URL')
}: MobileStoreBadgesProps) {
  return (
    <StoreBadgesContainer>
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
