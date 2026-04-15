type DownloadQRModalI18n = {
  title: string
  totalDownloads: string
}

type DownloadQRModalProps = {
  /** Whether the modal is open */
  open: boolean
  /** Called when the modal is closed */
  onClose: () => void
  /** The platform — drives the title text */
  os: 'android' | 'ios'
  /** QR code image URL (PNG/SVG/data URI) pointing to the store listing */
  qrImageUrl: string
  /** Optional logo to overlay at the center of the QR code */
  logoUrl?: string
  /** i18n strings — all have English defaults */
  i18n?: Partial<DownloadQRModalI18n>
}

export type { DownloadQRModalI18n, DownloadQRModalProps }
