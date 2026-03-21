import { ModalProps } from '../Modal.types'

export type MobileDownloadModalI18N = {
  title: string
  description_android: string
  description_ios: string
}

export type MobileDownloadModalProps = Omit<ModalProps, 'children'> & {
  platform: 'android' | 'ios'
  androidStoreUrl?: string
  onCopyLink?: () => void
  i18n?: Partial<MobileDownloadModalI18N>
}
