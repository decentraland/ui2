import React, { useCallback, useMemo } from "react"
import { useAdvancedUserAgentData } from "@dcl/hooks"
import Download from "@mui/icons-material/Download"
import { config } from "../../config"
import { CDNSource, getCDNRelease } from "../../modules/cdnReleases"
import { triggerFileDownload } from "../../modules/file"
import {
  addQueryParamsToUrlString,
  updateUrlWithLastValue,
} from "../../modules/url"
import { setUserAgentArchitectureDefaultByOs } from "../../modules/userAgent"
import {
  DownloadButtonProps,
  DownloadOption,
  OperativeSystem,
} from "./DownloadButton.types"
import {
  DownloadButtonAppleIcon,
  DownloadButtonLabelContainer,
  DownloadButtonStyled,
  DownloadButtonWindowsIcon,
} from "./DownloadButton.styled"

const DownloadButton = React.memo((props: DownloadButtonProps) => {
  const {
    onClick,
    label = "Download",
    trackingId,
    href,
    startIcon,
    endIcon,
  } = props

  const [isLoadingUserAgentData, userAgentData] = useAdvancedUserAgentData()

  // Handle OS detection from URL params
  const windowSearchParams =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
      : undefined
  const searchParams = new URLSearchParams(windowSearchParams)
  const os = searchParams.get("os")

  if (userAgentData && os) {
    setUserAgentArchitectureDefaultByOs(userAgentData, os as OperativeSystem)
  }

  const links = getCDNRelease(CDNSource.LAUNCHER)

  const defaultDownloadOption: DownloadOption | null = useMemo(() => {
    if (
      !userAgentData ||
      !links ||
      !links[userAgentData.os.name] ||
      !links[userAgentData.os.name][userAgentData.cpu.architecture]
    ) {
      return null
    }

    if (
      userAgentData.os.name === OperativeSystem.MACOS &&
      links[userAgentData.os.name][userAgentData.cpu.architecture]
    ) {
      return {
        icon: <DownloadButtonAppleIcon />,
        link: links[userAgentData.os.name][userAgentData.cpu.architecture],
        arch: userAgentData.cpu.architecture,
      }
    }

    return {
      icon: <DownloadButtonWindowsIcon />,
      link: links[userAgentData.os.name][userAgentData.cpu.architecture],
      arch: userAgentData.cpu.architecture,
    }
  }, [userAgentData, links])

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault()

      // Execute onClick if provided
      onClick?.(event, {
        type: "DOWNLOAD",
        track_uuid: trackingId,
        url: config.get("DOWNLOAD_URL"),
      })

      if (!userAgentData || !defaultDownloadOption) {
        // Generic download for unknown systems
        setTimeout(
          () => {
            window.open(config.get("DOWNLOAD_URL"), "_blank", "noopener")
          },
          onClick ? 300 : 0
        )
        return
      }

      // OS-specific download
      const redirectUrl = updateUrlWithLastValue(
        config.get("DOWNLOAD_SUCCESS_URL"),
        "os",
        userAgentData.os.name
      )

      const finalUrl = addQueryParamsToUrlString(redirectUrl, {
        arch: userAgentData.cpu.architecture,
      })

      setTimeout(
        () => {
          triggerFileDownload(defaultDownloadOption.link).then(() => {
            window.location.href = finalUrl
          })
        },
        onClick ? 300 : 0
      )
    },
    [defaultDownloadOption, userAgentData, onClick, trackingId]
  )

  if (isLoadingUserAgentData || !defaultDownloadOption) {
    if (!userAgentData || userAgentData.mobile || userAgentData.tablet) {
      return null
    }

    return (
      <DownloadButtonStyled
        variant="contained"
        href={href || config.get("DOWNLOAD_URL")}
        onClick={handleClick}
        startIcon={startIcon || <Download />}
        endIcon={endIcon}
      >
        <DownloadButtonLabelContainer>{label}</DownloadButtonLabelContainer>
      </DownloadButtonStyled>
    )
  }

  return (
    <DownloadButtonStyled
      variant="contained"
      href={href || defaultDownloadOption.link}
      onClick={handleClick}
      startIcon={startIcon}
      endIcon={endIcon || defaultDownloadOption.icon}
    >
      <DownloadButtonLabelContainer>{label}</DownloadButtonLabelContainer>
    </DownloadButtonStyled>
  )
})

export { DownloadButton }
