import { ModalProps } from "../Modal.types"

export type DownloadModalProps = Omit<ModalProps, "children"> & {
  title: string
  description: string
  buttonLabel: string
  onDownloadClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}
