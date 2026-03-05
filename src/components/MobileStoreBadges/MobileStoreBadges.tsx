import React from 'react'
import { AppStoreBadge } from './AppStoreBadge'
import { GooglePlayBadge } from './GooglePlayBadge'
import { config } from '../../config'
import { MobileStoreBadgesProps } from './MobileStoreBadges.types'
import { StoreBadgeIconWrapper, StoreBadgeLink, StoreBadgesContainer } from './MobileStoreBadges.styled'

const MobileStoreBadges = React.memo(function MobileStoreBadges(props: MobileStoreBadgesProps) {
  const { size = 'small', iosStoreUrl = config.get('IOS_STORE_URL'), androidStoreUrl = config.get('ANDROID_STORE_URL') } = props

  return (
    <StoreBadgesContainer>
      <StoreBadgeLink href={iosStoreUrl} target="_blank" rel="noopener noreferrer">
        <StoreBadgeIconWrapper badgeSize={size}>
          <AppStoreBadge />
        </StoreBadgeIconWrapper>
      </StoreBadgeLink>
      <StoreBadgeLink href={androidStoreUrl} target="_blank" rel="noopener noreferrer">
        <StoreBadgeIconWrapper badgeSize={size}>
          <GooglePlayBadge />
        </StoreBadgeIconWrapper>
      </StoreBadgeLink>
    </StoreBadgesContainer>
  )
})

export { MobileStoreBadges }
