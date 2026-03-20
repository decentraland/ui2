import React, { useCallback } from 'react'
import AppleIcon from '@mui/icons-material/Apple'
import ShareIcon from '@mui/icons-material/Share'
import { GooglePlayIcon } from './GooglePlayIcon'
import { config } from '../../config'
import { MobileDownloadActionsProps, MobileDownloadActionsI18N } from './MobileDownloadActions.types'
import {
  ActionsContainer,
  ComingSoonContainer,
  GooglePlayButton,
  GooglePlayButtonLabel,
  SendLinkButton
} from './MobileDownloadActions.styled'

const defaultI18n: MobileDownloadActionsI18N = {
  get_it_on: 'GET IT ON',
  google_play: 'Google Play',
  send_yourself_the_link: 'SEND YOURSELF THE LINK',
  coming_soon: 'Coming Soon'
}

const MobileDownloadActions = React.memo(function MobileDownloadActions(props: MobileDownloadActionsProps) {
  const { platform, androidStoreUrl = config.get('ANDROID_STORE_URL'), onCopyLink, i18n: i18nProp } = props
  const texts = { ...defaultI18n, ...i18nProp }

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
            <span>{texts.get_it_on}</span>
            {texts.google_play}
          </GooglePlayButtonLabel>
        </GooglePlayButton>
      </ActionsContainer>
    )
  }

  return (
    <ActionsContainer>
      <SendLinkButton variant="contained" onClick={handleSendLink}>
        {texts.send_yourself_the_link}
        <ShareIcon />
      </SendLinkButton>
      <ComingSoonContainer>
        <AppleIcon />
        <span>{texts.coming_soon}</span>
      </ComingSoonContainer>
    </ActionsContainer>
  )
})

export { MobileDownloadActions }
