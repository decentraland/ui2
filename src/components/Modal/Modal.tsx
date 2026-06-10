import React from 'react'
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded'
import CancelRoundedIcon from '@mui/icons-material/CancelRounded'
import { IconButton, Typography } from '@mui/material'
import { ModalProps } from './Modal.types'
import { Modal as BaseModal, ModalActionsContainer, ModalContainer, ModalContentContainer, ModalTitleContainer } from './Modal.styled'

const ModalContent = React.memo(
  (
    props: Partial<
      Pick<
        ModalProps,
        | 'header'
        | 'children'
        | 'actions'
        | 'title'
        | 'subtitle'
        | 'size'
        | 'onClose'
        | 'onBack'
        | 'backgroundImage'
        | 'backgroundSize'
        | 'backgroundPosition'
        | 'backgroundRepeat'
      >
    >
  ) => {
    const {
      children,
      header,
      actions,
      title,
      subtitle,
      size,
      onClose,
      onBack,
      backgroundImage,
      backgroundSize,
      backgroundPosition,
      backgroundRepeat
    } = props

    return (
      <ModalContainer
        elevation={24}
        size={size}
        backgroundImage={backgroundImage}
        backgroundSize={backgroundSize}
        backgroundPosition={backgroundPosition}
        backgroundRepeat={backgroundRepeat}
      >
        {header}
        {(title || onClose || onBack) && (
          <ModalTitleContainer>
            {onBack && (
              <IconButton aria-label="back" size="large" onClick={onBack}>
                <ArrowBackIosNewRoundedIcon />
              </IconButton>
            )}
            {title && <Typography variant="h5">{title}</Typography>}
            {onClose && (
              <IconButton aria-label="close" size="large" onClick={event => onClose(event, 'escapeKeyDown')}>
                <CancelRoundedIcon />
              </IconButton>
            )}
          </ModalTitleContainer>
        )}
        {subtitle && <Typography variant="subtitle1">{subtitle}</Typography>}
        <ModalContentContainer>{children}</ModalContentContainer>
        {actions && <ModalActionsContainer>{actions}</ModalActionsContainer>}
      </ModalContainer>
    )
  }
)

const Modal = React.memo((props: ModalProps) => {
  const { open, onClose, children, className, ...modalContentProps } = props
  return (
    <BaseModal open={open} onClose={onClose} className={className}>
      <ModalContent {...modalContentProps} onClose={onClose}>
        {children}
      </ModalContent>
    </BaseModal>
  )
})

export { Modal, ModalContent }
