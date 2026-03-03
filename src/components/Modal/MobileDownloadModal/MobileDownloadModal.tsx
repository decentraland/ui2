import React, { useCallback } from 'react'
import { MobileStoreBadges } from '../../MobileStoreBadges'
import { ExplorerJumpIn } from '../DownloadModal/ExplorerJumpIn'
import { Modal } from '../Modal'
import { MobileDownloadModalProps } from './MobileDownloadModal.types'
import { ModalContent, ModalDescription, ModalImageContainer, ModalTitle } from './MobileDownloadModal.styled'

function MobileDownloadModal(props: MobileDownloadModalProps) {
  const {
    title,
    description,
    badgeSize = 'large',
    iosLabel,
    androidLabel,
    iosStoreUrl,
    androidStoreUrl,
    open,
    onClose,
    ...modalProps
  } = props

  const handleClose = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>, reason: 'backdropClick' | 'escapeKeyDown') => {
      if (onClose) {
        onClose(event, reason)
      }
    },
    [onClose]
  )

  return (
    <Modal
      {...modalProps}
      open={open}
      size="tiny"
      title=" " // this is to move the close button to the right
      onClose={handleClose}
    >
      <ModalContent>
        <ModalImageContainer>
          <ExplorerJumpIn />
        </ModalImageContainer>
        <ModalTitle variant="h2">{title}</ModalTitle>
        <ModalDescription variant="body1">{description}</ModalDescription>
        <MobileStoreBadges
          size={badgeSize}
          iosLabel={iosLabel}
          androidLabel={androidLabel}
          iosStoreUrl={iosStoreUrl}
          androidStoreUrl={androidStoreUrl}
        />
      </ModalContent>
    </Modal>
  )
}

export { MobileDownloadModal }
