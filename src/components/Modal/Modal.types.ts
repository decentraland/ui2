type ModalProps = {
  open: boolean
  size?: 'tiny' | 'small' | 'medium' | 'large'
  className?: string
  title?: string
  subtitle?: string
  header?: React.ReactNode
  children: React.ReactNode
  actions?: React.ReactNode
  onClose?: (event: React.MouseEvent<HTMLButtonElement>, reason: 'backdropClick' | 'escapeKeyDown') => void
  onBack?: React.MouseEventHandler<HTMLButtonElement>
  backgroundImage?: string
  backgroundSize?: 'cover' | 'contain' | 'auto' | 'initial' | 'inherit'
  backgroundPosition?: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'initial' | 'inherit'
  backgroundRepeat?: 'no-repeat' | 'repeat' | 'repeat-x' | 'repeat-y'
}

export type { ModalProps }
