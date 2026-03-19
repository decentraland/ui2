export interface MobileDownloadActionsProps {
  platform?: 'android' | 'ios'
  androidStoreUrl?: string
  onCopyLink?: () => void
}
