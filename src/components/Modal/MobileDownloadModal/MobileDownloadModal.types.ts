import { ModalProps } from '../Modal.types'
import type { MobileDownloadActionsI18N, MobilePlatform } from '../../MobileDownload'

type MobileDownloadModalI18N = {
  title: string
  description_android: string
  description_ios: string
}

type MobileDownloadModalProps = Omit<ModalProps, 'children'> & {
  platform: MobilePlatform
  androidStoreUrl?: string
  onCopyLink?: () => void
  i18n?: Partial<MobileDownloadModalI18N>
  actionsI18n?: Partial<MobileDownloadActionsI18N>
}

export type { MobileDownloadModalI18N, MobileDownloadModalProps }
