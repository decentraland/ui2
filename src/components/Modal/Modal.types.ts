export type ModalProps = {
  open: boolean
  size?: "tiny" | "small" | "medium" | "large"
  title?: string
  subtitle?: string
  header: React.ReactNode
  children: React.ReactNode
  actions?: React.ReactNode
  onClose?: React.MouseEventHandler<HTMLButtonElement>
  onBack?: React.MouseEventHandler<HTMLButtonElement>
}
