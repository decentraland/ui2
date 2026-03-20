export interface MobileDownloadActionsI18N {
  get_it_on: string
  google_play: string
  send_yourself_the_link: string
  coming_soon: string
}

export interface MobileDownloadActionsProps {
  platform?: 'android' | 'ios'
  androidStoreUrl?: string
  onCopyLink?: () => void
  i18n?: Partial<MobileDownloadActionsI18N>
}
