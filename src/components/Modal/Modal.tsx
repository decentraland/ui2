import React from "react"
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded"
import CancelRoundedIcon from "@mui/icons-material/CancelRounded"
import { IconButton, Typography } from "@mui/material"
import { ModalProps } from "./Modal.types"
import {
  Modal as BaseModal,
  ModalActionsContainer,
  ModalContainer,
  ModalContentContainer,
  ModalTitleContainer,
} from "./Modal.styled"

const ModalContent = React.memo(
  (
    props: Partial<
      Pick<
        ModalProps,
        | "header"
        | "children"
        | "actions"
        | "title"
        | "subtitle"
        | "size"
        | "onClose"
        | "onBack"
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
    } = props

    return (
      <ModalContainer elevation={24} size={size}>
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
              <IconButton aria-label="close" size="large" onClick={onClose}>
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
  const { open, onClose, children, ...modalContentProps } = props
  return (
    <BaseModal open={open} onClose={onClose}>
      <ModalContent {...modalContentProps} onClose={onClose}>
        {children}
      </ModalContent>
    </BaseModal>
  )
})

export { Modal, ModalContent }
