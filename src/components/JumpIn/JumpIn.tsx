import React, { useCallback, useState } from "react"
import { Typography } from "@mui/material"
import { launchDesktopApp } from "../../modules/jumpIn"
import { JumpInIcon, LocationIcon } from "../Icon"
import { DownloadModal } from "../Modal/DownloadModal"
import { JumpInEventType, JumpInProps } from "./JumpIn.types"
import {
  LocationIconContainer,
  StyledContainer,
  StyledIcon,
  StyledJumpInButton,
  StyledJumpInLink,
  StyledPosition,
} from "./JumpIn.styled"

const DEFAULT_DOWNLOAD_URL = "https://decentraland.org/download"

const JumpIn = React.memo((props: JumpInProps) => {
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

      onTrack?.({
        type: hasLauncher
          ? JumpInEventType.JUMP_IN
          : JumpInEventType.OPEN_DOWNLOAD_MODAL,
        url: hasLauncher ? undefined : downloadUrl,
        has_launcher: hasLauncher,
      })

      !hasLauncher && setIsModalOpen(true)
    },
    [onTrack, downloadUrl, desktopAppOptions]
  )

  const handleDownloadClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      e.preventDefault()

      onTrack?.({
        type: JumpInEventType.DOWNLOAD,
        url: downloadUrl,
        has_launcher: false,
      })

      window.open(downloadUrl, "_blank")
    },
    [onTrack, downloadUrl]
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
          <JumpInIcon />
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
            {position && (
              <LocationIconContainer>
                <LocationIcon htmlColor="inherit" fontSize="inherit" />
              </LocationIconContainer>
            )}
            <Typography component="span">{position}</Typography>
          </StyledPosition>
          <StyledIcon>
            <JumpInIcon />
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
})

export { JumpIn }
