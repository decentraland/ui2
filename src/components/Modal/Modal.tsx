import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded"
import CancelRoundedIcon from "@mui/icons-material/CancelRounded"
import { IconButton, Typography } from "@mui/material"
import { ModalProps } from "./Modal.types"
import {
  ModalActionsContainer,
  ModalContainer,
  ModalContentContainer,
  ModalTitleContainer,
} from "./Modal.styled"

export function ModalContent(
  props: Partial<
    Pick<
      ModalProps,
      | "header"
      | "children"
      | "actions"
      | "title"
      | "subtitle"
      | "onClose"
      | "onBack"
    >
  >
) {
  const { children, header, actions, title, subtitle, onClose, onBack } = props

  return (
    <ModalContainer elevation={24}>
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

export default function Modal(props: ModalProps) {
  return (
    <Modal {...props}>
      <ModalContent {...props}>{props.children}</ModalContent>
    </Modal>
  )
}
