import React, { useCallback } from "react"
import { ExplorerJumpIn } from "./ExplorerJumpIn"
import { DownloadButton } from "../../DownloadButton"
import { Modal } from "../Modal"
import { DownloadModalProps } from "./DownloadModal.types"
import {
  Content,
  ImageContainer,
  StyledDescription,
  StyledTitle,
} from "./DownloadModal.styled"

function DownloadModal(props: DownloadModalProps) {
  const {
    title,
    description,
    buttonLabel,
    open,
    onClose,
    onDownloadClick,
    ...modalProps
  } = props

  const handleClose = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (onClose) {
        onClose(event)
      }
    },
    [onClose]
  )

  return (
    <Modal
      {...modalProps}
      open={open}
      size="tiny"
      title=" " // this is to move the close button to the right
      onClose={handleClose}
    >
      <Content>
        <ImageContainer>
          <ExplorerJumpIn />
        </ImageContainer>
        <StyledTitle variant="h2">{title}</StyledTitle>
        <StyledDescription variant="body1">{description}</StyledDescription>
        <DownloadButton label={buttonLabel} onClick={onDownloadClick} />
      </Content>
    </Modal>
  )
}

export { DownloadModal }
