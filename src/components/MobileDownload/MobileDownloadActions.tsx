import React, { useCallback } from 'react'
import ShareIcon from '@mui/icons-material/Share'
import { GooglePlayIcon } from './GooglePlayIcon'
import { i18n as defaultI18n } from './MobileDownloadActions.i18n'
import { config } from '../../config'
import { AppleIcon } from '../Icon/AppleIcon'
import { MobileDownloadActionsProps } from './MobileDownloadActions.types'
import {
  ActionsContainer,
  ComingSoonContainer,
  GooglePlayButton,
  GooglePlayButtonLabel,
  SendLinkButton
} from './MobileDownloadActions.styled'

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
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') return
      throw error
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
