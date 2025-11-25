import React, { useCallback, useEffect, useMemo, useState } from "react"
import { useAdvancedUserAgentData } from "@dcl/hooks"
import { AdvancedNavigatorUAData } from "@dcl/hooks/cjs/hooks/useAdvancedUserAgentData"
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

type CDNLinks = Record<string, Record<string, string | undefined>> | null

// Helper function to create download option from links and user agent data
const createDownloadOption = (
  links?: CDNLinks,
  userAgentData?: AdvancedNavigatorUAData
): DownloadOption | null => {
  if (
    !userAgentData ||
    !links ||
    !links[userAgentData.os.name] ||
    !links[userAgentData.os.name][userAgentData.cpu.architecture]
  ) {
    return null
  }

  const link = links[userAgentData.os.name][userAgentData.cpu.architecture]
  if (!link) {
    return null
  }

  if (userAgentData.os.name === OperativeSystem.MACOS) {
    return {
      icon: <DownloadButtonAppleIcon />,
      link,
      arch: userAgentData.cpu.architecture,
    }
  }

  return {
    icon: <DownloadButtonWindowsIcon />,
    link,
    arch: userAgentData.cpu.architecture,
  }
}

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
    getIdentityId,
    onRedirect,
    shouldDownloadBeforeRedirect = true,
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

  const defaultDownloadOption: DownloadOption | null = useMemo(() => {
    const links = cdnLinks || getCDNRelease(CDNSource.LAUNCHER)

    return createDownloadOption(links, userAgentData)
  }, [userAgentData, cdnLinks])

  const finalHref = useMemo(() => {
    return href || defaultDownloadOption?.link || config.get("DOWNLOAD_URL")
  }, [href, defaultDownloadOption])

  const handleClick = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault()

      setIsDownloading(true)

      // If cdnLinks is provided, use it directly without any processing
      let currentLinks: CDNLinks
      if (cdnLinks) {
        currentLinks = cdnLinks
      } else {
        // Only process identityId and getCDNRelease if cdnLinks is not available
        let currentIdentityId: string | undefined
        if (getIdentityId) {
          try {
            currentIdentityId = await getIdentityId()
          } catch (error) {
            console.error("Failed to generate identityId:", error)
            // Continue with fallback behavior
          }
        }

        // Recalculate links with the identityId (if available) or use LAUNCHER as fallback
        currentLinks = getCDNRelease(CDNSource.LAUNCHER, currentIdentityId)
      }

      // Calculate download option with current links
      const currentDownloadOption = createDownloadOption(
        currentLinks,
        userAgentData
      )

      // If we have user agent data and a download option, handle download/redirect
      if (userAgentData && currentDownloadOption) {
        const redirectUrl = updateUrlWithLastValue(
          config.get("DOWNLOAD_SUCCESS_URL"),
          "os",
          userAgentData.os.name
        )

        const finalUrl = addQueryParamsToUrlString(redirectUrl, {
          arch: userAgentData.cpu.architecture,
        })

        if (shouldDownloadBeforeRedirect) {
          // Initiate download immediately, then redirect
          triggerFileDownload(currentDownloadOption.link).then(() => {
            setIsDownloading(false)

            // Wait additional time before redirect to ensure download has started
            setTimeout(() => {
              if (onRedirect) {
                onRedirect(finalUrl)
              } else {
                // Use window.open instead of window.location.href to avoid canceling download
                window.open(finalUrl, "_blank", "noopener")
              }
            }, 1000) // Wait 1 second after download initiation before redirect
          })
        } else {
          // Only redirect without downloading
          setIsDownloading(false)
          if (onRedirect) {
            onRedirect(finalUrl)
          } else {
            window.open(finalUrl, "_blank", "noopener")
          }
        }
        return
      }

      setIsDownloading(false)

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
      getIdentityId,
      cdnLinks,
      defaultDownloadOption,
      finalHref,
      userAgentData,
      onClick,
      onRedirect,
      shouldDownloadBeforeRedirect,
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
