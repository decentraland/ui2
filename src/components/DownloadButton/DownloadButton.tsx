import React, { useCallback, useEffect, useMemo } from "react"
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
    cdnLinks,
    onRedirect,
  } = props

  const [isLoadingUserAgentData, userAgentData] = useAdvancedUserAgentData()

  const windowSearchParams =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
      : undefined
  const searchParams = new URLSearchParams(windowSearchParams)
  const os = searchParams.get("os")

  useEffect(() => {
    if (userAgentData && os) {
      setUserAgentArchitectureDefaultByOs(userAgentData, os as OperativeSystem)
    }
  }, [userAgentData, os])

  const defaultLinks = getCDNRelease(CDNSource.LAUNCHER)
  const links = cdnLinks || defaultLinks

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

      onClick?.(event, {
        type: "DOWNLOAD",
        track_uuid: trackingId,
        url: config.get("DOWNLOAD_URL"),
      })

      if (!userAgentData || !defaultDownloadOption) {
        setTimeout(
          () => {
            window.open(config.get("DOWNLOAD_URL"), "_blank", "noopener")
          },
          onClick ? 300 : 0
        )
        return
      }

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
            onRedirect
              ? onRedirect(finalUrl)
              : (window.location.href = finalUrl)
          })
        },
        onClick ? 300 : 0
      )
    },
    [defaultDownloadOption, userAgentData, onClick, onRedirect, trackingId]
  )

  if (
    (isLoadingUserAgentData || !defaultDownloadOption) &&
    (userAgentData?.mobile || userAgentData?.tablet)
  ) {
    return null
  }

  if (isLoadingUserAgentData || !defaultDownloadOption) {
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
