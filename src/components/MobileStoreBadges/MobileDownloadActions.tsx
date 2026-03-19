import React, { useCallback } from 'react'
import AppleIcon from '@mui/icons-material/Apple'
import ShareIcon from '@mui/icons-material/Share'
import { GooglePlayIcon } from './GooglePlayIcon'
import { config } from '../../config'
import { MobileDownloadActionsProps } from './MobileDownloadActions.types'
import {
  ActionsContainer,
  ComingSoonContainer,
  GooglePlayButton,
  GooglePlayButtonLabel,
  SendLinkButton
} from './MobileDownloadActions.styled'

const MobileDownloadActions = React.memo(function MobileDownloadActions(props: MobileDownloadActionsProps) {
  const { platform, androidStoreUrl = config.get('ANDROID_STORE_URL'), onCopyLink } = props

  const handleSendLink = useCallback(async () => {
    const url = window.location.href
    try {
      if (navigator.share) {
        await navigator.share({ url })
      } else {
        await navigator.clipboard.writeText(url)
      }
      onCopyLink?.()
    } catch {
      // User cancelled share or API unavailable
    }
  }, [onCopyLink])

  if (platform === 'android') {
    return (
      <ActionsContainer>
        <GooglePlayButton href={androidStoreUrl} target="_blank" rel="noopener noreferrer">
          <GooglePlayIcon />
          <GooglePlayButtonLabel>
            <span>GET IT ON</span>
            Google Play
          </GooglePlayButtonLabel>
        </GooglePlayButton>
      </ActionsContainer>
    )
  }

  return (
    <ActionsContainer>
      <SendLinkButton variant="contained" onClick={handleSendLink}>
        SEND YOURSELF THE LINK
        <ShareIcon />
      </SendLinkButton>
      <ComingSoonContainer>
        <AppleIcon />
        <span>Coming Soon</span>
      </ComingSoonContainer>
    </ActionsContainer>
  )
})

export { MobileDownloadActions }
