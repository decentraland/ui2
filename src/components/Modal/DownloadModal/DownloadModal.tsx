import React, { useCallback, useMemo } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { DclIcon } from './icons/DclIcon'
import { AppleIcon } from './icons/AppleIcon'
import { VerifiedIcon } from './icons/VerifiedIcon'
import { WindowsIcon } from './icons/WindowsIcon'
import epicLogoBlack from '../../../Assets/logo-epic-black.svg'
import googlePlayBadge from '../../../Assets/get-in-on-google-play.svg'
import { DownloadModalI18n, DownloadModalProps } from './DownloadModal.types'
import {
  CloseButton,
  DividerLine,
  DividerRow,
  DividerText,
  DownloadSection,
  EpicButton,
  ModalContainer,
  ModalTitle,
  PlatformLink,
  PrimaryButton,
  StatDivider,
  StatItem,
  StatsRow,
  StoreBadge,
  StyledModal
} from './DownloadModal.styled'

const WINDOWS_DOWNLOAD_URL = 'https://decentraland.org/download_success?os=Windows'
const APPLE_ARM_DOWNLOAD_URL = 'https://decentraland.org/download_success?os=macOS'
const APPLE_INTEL_DOWNLOAD_URL = 'https://decentraland.org/download_success?os=macOS&arch=amd64'

const DEFAULT_I18N: DownloadModalI18n = {
  title: 'Download Decentraland to Jump In',
  download: 'DOWNLOAD',
  downloadOn: 'DOWNLOAD ON',
  totalDownloads: 'Total Downloads: +250K',
  intel: '(Intel)',
  alsoAvailableOn: 'Also Available on'
}

function DownloadModal(props: DownloadModalProps) {
  const {
    os,
    downloadUrl,
    epicUrl,
    googlePlayUrl,
    i18n: i18nPartial,
    open,
    onClose,
    onDownloadClick,
    onEpicClick
  } = props

  const i18n = useMemo(() => ({ ...DEFAULT_I18N, ...i18nPartial }), [i18nPartial])

  const handleClose = useCallback(
    (_event: React.SyntheticEvent | Event, _reason?: string) => {
      onClose()
    },
    [onClose]
  )

  const isApple = os === 'apple'

  return (
    <StyledModal open={open} onClose={handleClose}>
      <ModalContainer>
        <CloseButton onClick={onClose} aria-label="Close">
          <CloseIcon />
        </CloseButton>

        <DclIcon />

        <ModalTitle>{i18n.title}</ModalTitle>

        <DownloadSection>
          <PrimaryButton href={downloadUrl} onClick={onDownloadClick}>
            {i18n.download}
            {isApple
              ? <AppleIcon style={{ width: 32, height: 32, color: 'white' }} />
              : <WindowsIcon style={{ width: 28, height: 28, color: 'white' }} />}
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
              <>
                <PlatformLink href={WINDOWS_DOWNLOAD_URL}>
                  <WindowsIcon style={{ width: 24, height: 24, color: 'white' }} />
                </PlatformLink>
                <PlatformLink href={APPLE_INTEL_DOWNLOAD_URL}>
                  <AppleIcon style={{ width: 20, height: 20, color: '#ECEBED' }} />
                  {i18n.intel}
                </PlatformLink>
              </>
            ) : (
              <PlatformLink href={APPLE_ARM_DOWNLOAD_URL}>
                <AppleIcon style={{ width: 20, height: 20, color: 'white' }} />
              </PlatformLink>
            )}
          </StatsRow>

          <DividerRow>
            <DividerLine />
            <DividerText>{i18n.alsoAvailableOn}</DividerText>
            <DividerLine />
          </DividerRow>

          <StoreBadge href={googlePlayUrl} target="_blank" rel="noopener noreferrer">
            <img src={googlePlayBadge} alt="Get it on Google Play" />
          </StoreBadge>
        </DownloadSection>
      </ModalContainer>
    </StyledModal>
  )
}

export { DownloadModal }
