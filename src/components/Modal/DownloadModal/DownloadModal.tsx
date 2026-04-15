import React, { useCallback, useMemo } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { AppleIcon } from './icons/AppleIcon'
import { DclIcon } from './icons/DclIcon'
import { VerifiedIcon } from './icons/VerifiedIcon'
import { WindowsIcon } from './icons/WindowsIcon'
import appStoreBadge from '../../../Assets/app-store.svg'
import appStoreButton from '../../../Assets/download-on-the-app-store.svg'
import googlePlayBadge from '../../../Assets/get-in-on-google-play.svg'
import googlePlayButton from '../../../Assets/get-in-on-play-store-button.svg'
import epicLogoBlack from '../../../Assets/logo-epic-black.svg'
import { DOWNLOAD_URLS } from '../../../modules/downloadUrls'
import { DownloadModalI18n, DownloadModalProps } from './DownloadModal.types'
import {
  CloseButton,
  DividerLine,
  DividerRow,
  DividerText,
  DownloadSection,
  EpicButton,
  MobileCta,
  ModalContainer,
  ModalTitle,
  PlatformLink,
  PrimaryButton,
  StatDivider,
  StatItem,
  StatsRow,
  StoreBadge,
  StoreBadgesRow,
  StyledModal
} from './DownloadModal.styled'

const DEFAULT_I18N: DownloadModalI18n = {
  title: 'Download Decentraland to Jump In',
  download: 'DOWNLOAD',
  downloadOn: 'DOWNLOAD ON',
  totalDownloads: 'Total Downloads: +250K',
  alsoAvailableOn: 'Also Available on'
}

function DownloadModal(props: DownloadModalProps) {
  const { os, downloadUrl, epicUrl, googlePlayUrl, appStoreUrl, i18n: i18nPartial, open, onClose, onDownloadClick, onEpicClick } = props

  const i18n = useMemo(() => ({ ...DEFAULT_I18N, ...i18nPartial }), [i18nPartial])

  const handleClose = useCallback(
    (_event: React.SyntheticEvent | Event, _reason?: string) => {
      onClose()
    },
    [onClose]
  )

  const isMobile = os === 'android' || os === 'ios'
  const isApple = os === 'apple' || os === 'ios'

  if (isMobile) {
    const storeUrl = os === 'ios' ? (appStoreUrl ?? DOWNLOAD_URLS.appStore) : googlePlayUrl
    const storeImage = os === 'ios' ? appStoreButton : googlePlayButton
    const storeAlt = os === 'ios' ? 'Download on the App Store' : 'Get it on Google Play'

    return (
      <StyledModal open={open} onClose={handleClose}>
        <ModalContainer mobile>
          <CloseButton onClick={onClose} aria-label="Close">
            <CloseIcon />
          </CloseButton>

          <DclIcon />

          <ModalTitle>{i18n.title}</ModalTitle>

          <DownloadSection>
            <MobileCta href={storeUrl} target="_blank" rel="noopener noreferrer" onClick={onDownloadClick}>
              <img src={storeImage} alt={storeAlt} />
            </MobileCta>

            <StatsRow>
              <StatItem>
                <VerifiedIcon />
                {i18n.totalDownloads}
              </StatItem>
            </StatsRow>
          </DownloadSection>
        </ModalContainer>
      </StyledModal>
    )
  }

  return (
    <StyledModal open={open} onClose={handleClose}>
      <ModalContainer>
        <CloseButton onClick={onClose} aria-label="Close">
          <CloseIcon />
        </CloseButton>

        <DclIcon />

        <ModalTitle>{i18n.title}</ModalTitle>

        <DownloadSection>
          <PrimaryButton href={downloadUrl} target="_blank" rel="noopener noreferrer" onClick={onDownloadClick}>
            {i18n.download}
            {isApple ? (
              <AppleIcon style={{ width: 32, height: 32, color: 'white' }} />
            ) : (
              <WindowsIcon style={{ width: 28, height: 28, color: 'white' }} />
            )}
          </PrimaryButton>

          <EpicButton href={epicUrl} target="_blank" rel="noopener noreferrer" onClick={onEpicClick}>
            {i18n.downloadOn}
            <img src={epicLogoBlack} alt="Epic Games" width={40} height={40} />
          </EpicButton>

          <StatsRow>
            <StatItem>
              <VerifiedIcon />
              {i18n.totalDownloads}
            </StatItem>
            <StatDivider />
            {isApple ? (
              <PlatformLink href={DOWNLOAD_URLS.windowsAlt} target="_blank" rel="noopener noreferrer">
                <WindowsIcon style={{ width: 24, height: 24, color: 'white' }} />
              </PlatformLink>
            ) : (
              <PlatformLink href={DOWNLOAD_URLS.appleAlt} target="_blank" rel="noopener noreferrer">
                <AppleIcon style={{ width: 20, height: 20, color: 'white' }} />
              </PlatformLink>
            )}
          </StatsRow>

          <DividerRow>
            <DividerLine />
            <DividerText>{i18n.alsoAvailableOn}</DividerText>
            <DividerLine />
          </DividerRow>

          <StoreBadgesRow>
            <StoreBadge href={appStoreUrl ?? DOWNLOAD_URLS.appStore} target="_blank" rel="noopener noreferrer">
              <img src={appStoreBadge} alt="Download on the App Store" />
            </StoreBadge>
            <StoreBadge href={googlePlayUrl} target="_blank" rel="noopener noreferrer">
              <img src={googlePlayBadge} alt="Get it on Google Play" />
            </StoreBadge>
          </StoreBadgesRow>
        </DownloadSection>
      </ModalContainer>
    </StyledModal>
  )
}

export { DownloadModal }
