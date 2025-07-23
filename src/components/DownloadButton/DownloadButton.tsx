import React, { useCallback, useEffect, useMemo, useState } from "react"
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
    loadingCdnLinks = false,
    cdnLinks,
    onRedirect,
  } = props
  const [isDownloading, setIsDownloading] = useState(false)

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

  const finalHref = useMemo(() => {
    return href || defaultDownloadOption?.link || config.get("DOWNLOAD_URL")
  }, [href, defaultDownloadOption])

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault()

      console.log("handleClick", onClick)

      // If we have user agent data and a download option, try direct download
      if (userAgentData && defaultDownloadOption) {
        const redirectUrl = updateUrlWithLastValue(
          config.get("DOWNLOAD_SUCCESS_URL"),
          "os",
          userAgentData.os.name
        )

        const finalUrl = addQueryParamsToUrlString(redirectUrl, {
          arch: userAgentData.cpu.architecture,
        })

        setIsDownloading(true)

        setTimeout(
          () => {
            triggerFileDownload(defaultDownloadOption.link).then(() => {
              setIsDownloading(false)

              onRedirect
                ? onRedirect(finalUrl)
                : (window.location.href = finalUrl)
            })
          },
          onClick ? 300 : 0
        )
        return
      }

      // Fallback: call custom onClick handler or open download page
      onClick?.(event, {
        type: "DOWNLOAD",
        track_uuid: trackingId,
        url: finalHref,
      })

      if (!onClick) {
        setTimeout(() => {
          window.open(config.get("DOWNLOAD_URL"), "_blank", "noopener")
        }, 0)
      }
    },
    [
      defaultDownloadOption,
      finalHref,
      userAgentData,
      onClick,
      onRedirect,
      trackingId,
      setIsDownloading,
    ]
  )

  if (
    (isLoadingUserAgentData || !defaultDownloadOption) &&
    (userAgentData?.mobile || userAgentData?.tablet)
  ) {
    return null
  }

  const isLoading = loadingCdnLinks || isDownloading

  if (isLoadingUserAgentData || !defaultDownloadOption) {
    return (
      <DownloadButtonStyled
        variant="contained"
        href={finalHref}
        onClick={handleClick}
        startIcon={startIcon || <Download />}
        endIcon={endIcon}
        loading={isLoading}
      >
        <DownloadButtonLabelContainer>{label}</DownloadButtonLabelContainer>
      </DownloadButtonStyled>
    )
  }

  return (
    <DownloadButtonStyled
      variant="contained"
      href={finalHref}
      onClick={handleClick}
      startIcon={startIcon}
      endIcon={endIcon || defaultDownloadOption.icon}
      loading={isLoading}
    >
      <DownloadButtonLabelContainer>{label}</DownloadButtonLabelContainer>
    </DownloadButtonStyled>
  )
})

export { DownloadButton }
