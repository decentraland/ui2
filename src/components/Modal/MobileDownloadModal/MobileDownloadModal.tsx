import { MobileDownloadActions } from '../../MobileStoreBadges'
import { ExplorerJumpIn } from '../DownloadModal/ExplorerJumpIn'
import { Modal } from '../Modal'
import { MobileDownloadModalProps } from './MobileDownloadModal.types'
import { ModalContent, ModalDescription, ModalImageContainer, ModalTitle } from './MobileDownloadModal.styled'

function MobileDownloadModal(props: MobileDownloadModalProps) {
  const { title, description, platform, androidStoreUrl, onCopyLink, open, onClose, ...modalProps } = props

  return (
    <Modal {...modalProps} open={open} size="tiny" onClose={onClose}>
      <ModalContent>
        <ModalImageContainer>
          <ExplorerJumpIn />
        </ModalImageContainer>
        <ModalTitle variant="h2">{title}</ModalTitle>
        <ModalDescription variant="body1">{description}</ModalDescription>
        <MobileDownloadActions platform={platform} androidStoreUrl={androidStoreUrl} onCopyLink={onCopyLink} />
      </ModalContent>
    </Modal>
  )
}

export { MobileDownloadModal }
