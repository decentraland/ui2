import { ModalProps } from '../Modal.types'

export type MobileDownloadModalProps = Omit<ModalProps, 'children'> & {
  title: string
  description: string
  badgeSize?: 'small' | 'large'
  iosStoreUrl?: string
  androidStoreUrl?: string
}
