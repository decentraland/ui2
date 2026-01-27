import { CircularProgress, Button as MuiButton } from '@mui/material'
import { ButtonProps } from './Button.types'

const SPINNER_SIZES = {
  small: 16,
  medium: 20,
  large: 24
} as const

export const Button = ({
  children,
  startIcon,
  endIcon,
  loading = false,
  loadingIcon,
  loadingPosition = 'center',
  disabled = false,
  size = 'medium',
  ...props
}: ButtonProps) => {
  const defaultLoadingIcon = <CircularProgress color="inherit" size={SPINNER_SIZES[size]} />

  const loadingElement = loadingIcon || defaultLoadingIcon

  const buttonChildren = loading && loadingPosition === 'center' ? loadingElement : children

  return (
    <MuiButton
      disabled={disabled || loading}
      startIcon={loading && loadingPosition === 'start' ? loadingElement : startIcon}
      endIcon={loading && loadingPosition === 'end' ? loadingElement : endIcon}
      size={size}
      {...props}
    >
      {buttonChildren}
    </MuiButton>
  )
}
