import { ModalProps } from '../Modal.types'

export type MobileDownloadModalProps = Omit<ModalProps, 'children'> & {
  title: string
  description: string
  badgeSize?: 'small' | 'large'
  iosLabel?: string
  androidLabel?: string
  iosStoreUrl?: string
  androidStoreUrl?: string
}
