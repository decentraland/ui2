enum OperativeSystem {
  WINDOWS = "Windows",
  MACOS = "macOS",
}

type DownloadButtonProps = {
  href: string
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  label?: string
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

export type { DownloadButtonProps }
export { OperativeSystem }
