import React, { useCallback, useMemo, useState } from "react"
import { useAdvancedUserAgentData } from "@dcl/hooks"
import { Network } from "@dcl/schemas/dist/dapps/network"
import Download from "@mui/icons-material/Download"
import { v4 as uuidv4 } from "uuid"
import { CircularProgress } from "@mui/material"
import { ManaBalancesProps } from "./ManaBalances"
import { i18n as i18nUserMenu } from "./UserMenu.i18n"
import { UserMenuSignedIn } from "./UserMenuSignedIn/UserMenuSignedIn"
import { config } from "../../config"
import { CDNSource, getCDNRelease } from "../../modules/cdnReleases"
import { triggerFileDownload } from "../../modules/file"
import {
  addQueryParamsToUrlString,
  updateUrlWithLastValue,
} from "../../modules/url"
import { setUserAgentArchitectureDefautlByOs } from "../../modules/userAgent"
import { DownloadButton, OperativeSystem } from "../DownloadButton"
import {
  DownloadButtonAppleIcon,
  DownloadButtonWindowsIcon,
} from "../DownloadButton/DownloadButton.styled"
import { DownloadProps, UserMenuEventId, UserMenuProps } from "./UserMenu.types"
import {
  SignInButton,
  UserMenuContainer,
  UserMenuLoaderContainer,
} from "./UserMenu.styled"

const UserMenu = React.memo((props: UserMenuProps) => {
  const {
    isSignedIn,
    isSigningIn,
    isDisconnecting,
    manaBalances,
    i18n = i18nUserMenu,
    onClickSignIn,
    onClickBalance,
    onClickOpen,
    onClickDownload,
    onClickUserMenuItem,
    ...signInProps
  } = props

  const [isOpen, setIsOpen] = useState(false)
  const [trackingId, setTrackingId] = useState<string | undefined>(undefined)

  const [isLoadingUserAgentData, userAgentData] = useAdvancedUserAgentData()

  const windowSearchParams =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
      : undefined
  const searchParams = new URLSearchParams(windowSearchParams)
  const os = searchParams.get("os")
  if (userAgentData && os) {
    setUserAgentArchitectureDefautlByOs(userAgentData, os as OperativeSystem)
  }

  const links = getCDNRelease(CDNSource.LAUNCHER)

  const defaultDownloadOption: DownloadProps | null = useMemo(() => {
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

  const handleToggle = useCallback(
    (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      const trackId = uuidv4()
      setIsOpen((prev) => {
        if (!prev) {
          setTrackingId(trackId)
        }
        if (!prev && onClickOpen) {
          onClickOpen(event, trackId)
        }
        return !prev
      })
    },
    [setIsOpen, onClickOpen]
  )

  const handleClose = useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

  const handleClickDownload = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault()
      onClickUserMenuItem &&
        onClickUserMenuItem(event, {
          type: UserMenuEventId.DOWNLOAD,
          track_uuid: trackingId || undefined,
          url: config.get("DOWNLOAD_URL"),
        })

      setTimeout(
        () => {
          window.open(config.get("DOWNLOAD_URL"), "_blank", "noopener")
        },
        onClickUserMenuItem ? 300 : 0
      )
    },
    [onClickDownload, onClickUserMenuItem, trackingId]
  )

  const onClickDownloadOsHandler = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault()

      if (!userAgentData || !defaultDownloadOption) return

      onClickDownload &&
        onClickDownload(event, {
          href: config.get("DOWNLOAD_URL"),
        })

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
        onClickDownload ? 300 : 0
      )
    },
    [defaultDownloadOption, userAgentData]
  )

  const handleClickSignIn = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault()
      onClickUserMenuItem &&
        onClickUserMenuItem(event, {
          type: UserMenuEventId.SIGN_IN,
          track_uuid: trackingId || undefined,
          url: config.get("MARKETPLACE_URL"),
        })

      onClickSignIn && onClickSignIn(event)
    },
    [onClickSignIn, onClickUserMenuItem, trackingId]
  )

  const handleClickBalance = useCallback(
    (
      event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
      network: Network
    ) => {
      event.preventDefault()
      onClickUserMenuItem &&
        onClickUserMenuItem(event, {
          type: UserMenuEventId.BALANCE,
        })

      setTimeout(
        () => {
          onClickBalance
            ? onClickBalance(event, network)
            : window.open(config.get("ACCOUNT_URL"), "_blank", "noopener")
        },
        onClickUserMenuItem ? 300 : 0
      )
    },
    [onClickBalance, onClickUserMenuItem, trackingId]
  ) as ManaBalancesProps["onClickBalance"]

  return (
    <UserMenuContainer>
      {isDisconnecting ? (
        <UserMenuLoaderContainer>
          <CircularProgress size={20} />
        </UserMenuLoaderContainer>
      ) : (
        <>
          {isSignedIn && (
            <UserMenuSignedIn
              {...signInProps}
              manaBalances={manaBalances}
              trackingId={trackingId}
              isOpen={isOpen}
              i18n={i18n}
              onClickToggle={handleToggle}
              onClickClose={handleClose}
              onClickUserMenuItem={onClickUserMenuItem}
              onClickBalance={handleClickBalance}
            />
          )}
          {!isSignedIn ? (
            <SignInButton
              variant="outlined"
              color="inherit"
              disabled={isSigningIn}
              onClick={handleClickSignIn}
            >
              {isSigningIn ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                i18n.signIn
              )}
            </SignInButton>
          ) : null}

          {(isLoadingUserAgentData || !defaultDownloadOption) &&
            userAgentData &&
            !userAgentData.mobile &&
            !userAgentData.tablet && (
              <DownloadButton
                href={config.get("DOWNLOAD_URL")}
                onClick={handleClickDownload}
                label={i18n.download}
                startIcon={<Download />}
              />
            )}

          {!isLoadingUserAgentData && defaultDownloadOption && (
            <DownloadButton
              href={defaultDownloadOption.link!}
              onClick={onClickDownloadOsHandler}
              endIcon={defaultDownloadOption.icon}
              label={i18n.download}
            />
          )}
        </>
      )}
    </UserMenuContainer>
  )
})

export { UserMenu }
