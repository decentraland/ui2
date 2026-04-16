type DownloadQRModalI18n = {
  title: string
  totalDownloads: string
}

type DownloadQRModalProps = {
  /** Whether the modal is open */
  open: boolean
  /** Called when the modal is closed */
  onClose: () => void
  /** The platform — drives the title text and default QR code */
  os: 'android' | 'ios'
  /** QR code image URL override. If omitted, uses the built-in QR for the given OS. */
  qrImageUrl?: string
  /** Optional logo to overlay at the center of the QR code */
  logoUrl?: string
  /** i18n strings — all have English defaults */
  i18n?: Partial<DownloadQRModalI18n>
}

export type { DownloadQRModalI18n, DownloadQRModalProps }
