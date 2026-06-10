enum OperativeSystem {
  WINDOWS = 'Windows',
  MACOS = 'macOS'
}

type DownloadOption = {
  icon: React.ReactNode
  link: string
  arch: string
}

type DownloadButtonProps = {
  href?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>, options: { type: string; track_uuid?: string; url: string }) => void
  label?: string
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  trackingId?: string
  loadingCdnLinks?: boolean
  cdnLinks?: Record<string, Record<string, string>>
  getIdentityId?: () => Promise<string | undefined>
  onRedirect?: (url: string) => void
  shouldDownloadBeforeRedirect?: boolean
}

export type { DownloadButtonProps, DownloadOption }
export { OperativeSystem }
