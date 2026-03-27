type MobilePlatform = 'android' | 'ios'

type MobileDownloadActionsI18N = {
  get_it_on: string
  google_play: string
  send_yourself_the_link: string
  coming_soon: string
}

type MobileDownloadActionsProps = {
  platform: MobilePlatform
  androidStoreUrl?: string
  onCopyLink?: () => void
  i18n?: Partial<MobileDownloadActionsI18N>
}

export type { MobilePlatform, MobileDownloadActionsI18N, MobileDownloadActionsProps }
