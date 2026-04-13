type DownloadModalI18n = {
  title: string
  download: string
  downloadOn: string
  totalDownloads: string
  alsoAvailableOn: string
}

type DownloadModalProps = {
  /** Whether the modal is open */
  open: boolean
  /** Called when the modal is closed */
  onClose: () => void
  /** The user's OS — drives primary download button icon and secondary platform options */
  os: 'apple' | 'windows'
  /** Primary download URL (OS-specific installer) */
  downloadUrl: string
  /** Epic Games store URL */
  epicUrl: string
  /** Google Play store URL */
  googlePlayUrl: string
  /** i18n strings — all have English defaults */
  i18n?: Partial<DownloadModalI18n>
  /** Called when the primary download button is clicked */
  onDownloadClick?: () => void
  /** Called when the Epic Games button is clicked */
  onEpicClick?: () => void
}

export type { DownloadModalI18n, DownloadModalProps }
