import { ModalProps } from '../Modal.types'

export type MobileDownloadModalProps = Omit<ModalProps, 'children'> & {
  title: string
  description: string
  platform?: 'android' | 'ios'
  androidStoreUrl?: string
  onCopyLink?: () => void
}
