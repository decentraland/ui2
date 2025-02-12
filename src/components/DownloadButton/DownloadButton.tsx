import React from "react"
import { DownloadButtonProps } from "./DownloadButton.types"
import {
  DownloadButtonLabelContainer,
  DownloadButtonStyled,
} from "./DownloadButton.styled"

const DownloadButton = React.memo((props: DownloadButtonProps) => {
  const { href, onClick, label, startIcon, endIcon } = props
  return (
    <DownloadButtonStyled
      variant="contained"
      href={href}
      onClick={onClick}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      <DownloadButtonLabelContainer>
        {label || "Download"}
      </DownloadButtonLabelContainer>
    </DownloadButtonStyled>
  )
})

export { DownloadButton }
