import React, { useCallback, useState } from "react"
import { PrimaryJumpIn } from "./PrimaryJumpIn"
import { SecondaryPin } from "./SecondaryPin"
import { launchDesktopApp } from "../../modules/jumpIn"
import { DownloadModal } from "../Modal/DownloadModal"
import { JumpInProps } from "./JumpIn.types"
import {
  StyledContainer,
  StyledIcon,
  StyledJumpInButton,
  StyledJumpInLink,
  StyledPosition,
} from "./JumpIn.styled"

const DEFAULT_DOWNLOAD_URL = "https://decentraland.org/download"

function JumpIn(props: JumpInProps) {
  const {
    position,
    compact,
    loading,
    buttonText = "Jump In",
    downloadUrl = DEFAULT_DOWNLOAD_URL,
    modalProps,
    desktopAppOptions = {},
    onTrack,
  } = props

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClick = useCallback(
    async (e: React.MouseEvent<HTMLElement>) => {
      e.stopPropagation()
      e.preventDefault()

      const hasLauncher = await launchDesktopApp(desktopAppOptions)
      !hasLauncher && setIsModalOpen(true)

      onTrack?.({
        has_launcher: hasLauncher,
      })
    },
    [onTrack, desktopAppOptions]
  )

  const handleDownloadClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      e.preventDefault()
      window.open(downloadUrl, "_blank")
    },
    [downloadUrl]
  )

  if (props.variant === "button") {
    return (
      <>
        <StyledJumpInButton
          {...props.buttonProps}
          onClick={handleClick}
          disabled={loading}
          size="small"
          variant="contained"
        >
          <span>{buttonText}</span>
          <PrimaryJumpIn />
        </StyledJumpInButton>
        <DownloadModal
          {...modalProps}
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onDownloadClick={handleDownloadClick}
        />
      </>
    )
  }

  return (
    <>
      <StyledJumpInLink
        {...props.linkProps}
        onClick={handleClick}
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledContainer>
          <StyledPosition compact={compact}>
            {position && <SecondaryPin />}
            <span>{position}</span>
          </StyledPosition>
          <StyledIcon>
            <PrimaryJumpIn />
          </StyledIcon>
        </StyledContainer>
      </StyledJumpInLink>
      <DownloadModal
        {...modalProps}
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onDownloadClick={handleDownloadClick}
      />
    </>
  )
}

export { JumpIn }
