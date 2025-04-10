import { ButtonProps, LinkProps } from "@mui/material"
import { DownloadModalProps } from "../Modal/DownloadModal/DownloadModal.types"

type JumpInBaseProps = {
  /** Position coordinates in format "x,y" or server name for worlds */
  position?: string
  /** Whether to show in compact mode (only icon) */
  compact?: boolean
  /** Whether the component is in loading state */
  loading?: boolean
  /** Optional callback for tracking events with flexible data */
  onTrack?: (eventName: string, data: Record<string, unknown>) => void
  /** Text to display in the button variant */
  buttonText?: string
  /** URL to open when clicking the download button */
  downloadUrl?: string
  /** Props for the download modal */
  modalProps: Omit<DownloadModalProps, "open" | "onClose" | "onDownloadClick">
  /** Options for the desktop app */
  desktopAppOptions?: {
    position?: string
    realm?: string
  }
}

type JumpInProps = JumpInBaseProps &
  (
    | {
        variant: "button"
        buttonProps?: Omit<ButtonProps, keyof JumpInBaseProps>
      }
    | {
        variant: "link"
        linkProps?: Omit<LinkProps, keyof JumpInBaseProps>
      }
  )

export type { JumpInBaseProps, JumpInProps }
