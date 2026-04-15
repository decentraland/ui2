import React, { useCallback, useMemo } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { DclIcon } from './icons/DclIcon'
import { VerifiedIcon } from './icons/VerifiedIcon'
import dclLogoQr from '../../../Assets/dcl-logo-qr.svg'
import { DownloadQRModalI18n, DownloadQRModalProps } from './DownloadQRModal.types'
import { CloseButton, DownloadSection, ModalContainer, ModalTitle, StatItem, StatsRow, StyledModal } from './DownloadModal.styled'
import { QRContainer, QRImage, QRLogo } from './DownloadQRModal.styled'

const DEFAULT_I18N: DownloadQRModalI18n = {
  title: 'Download Decentraland App for {os}',
  totalDownloads: 'Total Downloads: +250K'
}

function DownloadQRModal(props: DownloadQRModalProps) {
  const { os, qrImageUrl, logoUrl = dclLogoQr, i18n: i18nPartial, open, onClose } = props

  const i18n = useMemo(() => ({ ...DEFAULT_I18N, ...i18nPartial }), [i18nPartial])

  const handleClose = useCallback(
    (_event: React.SyntheticEvent | Event, _reason?: string) => {
      onClose()
    },
    [onClose]
  )

  const osLabel = os === 'ios' ? 'iOS' : 'Android'
  const title = i18n.title.replace('{os}', osLabel)

  return (
    <StyledModal open={open} onClose={handleClose}>
      <ModalContainer>
        <CloseButton onClick={onClose} aria-label="Close">
          <CloseIcon />
        </CloseButton>

        <DclIcon />

        <ModalTitle>{title}</ModalTitle>

        <DownloadSection>
          <QRContainer>
            <QRImage src={qrImageUrl} alt={`QR code to download Decentraland for ${osLabel}`} />
            {logoUrl && <QRLogo src={logoUrl} alt="Decentraland" />}
          </QRContainer>

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

export { DownloadQRModal }
