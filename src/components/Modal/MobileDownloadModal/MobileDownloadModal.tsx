import { MobileDownloadActions } from '../../MobileStoreBadges'
import { ExplorerJumpIn } from '../DownloadModal/ExplorerJumpIn'
import { Modal } from '../Modal'
import { i18n as defaultI18n } from './MobileDownloadModal.i18n'
import { MobileDownloadModalProps } from './MobileDownloadModal.types'
import { ModalContent, ModalDescription, ModalImageContainer, ModalTitle } from './MobileDownloadModal.styled'

function MobileDownloadModal(props: MobileDownloadModalProps) {
  const { platform, androidStoreUrl, onCopyLink, i18n: i18nProp, open, onClose, ...modalProps } = props
  const texts = { ...defaultI18n, ...i18nProp }
  const description = platform === 'ios' ? texts.description_ios : texts.description_android

  return (
    <Modal {...modalProps} open={open} size="tiny" onClose={onClose}>
      <ModalContent>
        <ModalImageContainer>
          <ExplorerJumpIn />
        </ModalImageContainer>
        <ModalTitle variant="h2">{texts.title}</ModalTitle>
        <ModalDescription variant="body1">{description}</ModalDescription>
        <MobileDownloadActions platform={platform} androidStoreUrl={androidStoreUrl} onCopyLink={onCopyLink} />
      </ModalContent>
    </Modal>
  )
}

export { MobileDownloadModal }
