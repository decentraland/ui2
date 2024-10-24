import React, { useCallback, useState } from "react"
import { Network } from "@dcl/schemas/dist/dapps/network"
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined"
import { v4 as uuidv4 } from "uuid"
import { CircularProgress } from "@mui/material"
import { ManaBalancesProps } from "./ManaBalances"
import { i18n as i18nUserMenu } from "./UserMenu.i18n"
import { UserMenuSignedIn } from "./UserMenuSignedIn/UserMenuSignedIn"
import { config } from "../../config"
import { useTabletAndBelowMediaQuery } from "../Media"
import { UserMenuEventId, UserMenuProps } from "./UserMenu.types"
import {
  DownloadLink,
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

  const isTabletAndBelow = useTabletAndBelowMediaQuery()

  const [isOpen, setIsOpen] = useState(false)
  const [trackingId, setTrackingId] = useState<string | undefined>(undefined)
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

        if (isTabletAndBelow && !prev) {
          window.addEventListener("scroll", noScroll)
        }

        if (isTabletAndBelow && prev) {
          window.removeEventListener("scroll", noScroll)
        }
        return !prev
      })
    },
    [setIsOpen, onClickOpen]
  )

  const handleClose = useCallback(() => {
    setIsOpen(false)
    if (isTabletAndBelow) {
      window.removeEventListener("scroll", noScroll)
    }
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
          onClickDownload
            ? onClickDownload(event)
            : window.open(config.get("DOWNLOAD_URL"), "_blank", "noopener")
        },
        onClickUserMenuItem ? 300 : 0
      )
    },
    [onClickDownload, onClickUserMenuItem, trackingId]
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
          <DownloadLink
            variant="contained"
            onClick={handleClickDownload}
            href={config.get("DOWNLOAD_URL")}
          >
            <FileDownloadOutlinedIcon /> {i18n.download}
          </DownloadLink>
        </>
      )}
    </UserMenuContainer>
  )
})

function noScroll() {
  window.scrollTo(0, 0)
}

export { UserMenu }
