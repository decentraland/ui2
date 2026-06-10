import React, { useCallback, useState } from 'react'
import { Network } from '@dcl/schemas/dist/dapps/network'
import { v4 as uuidv4 } from 'uuid'
import { CircularProgress } from '@mui/material'
import { ManaBalancesProps } from './ManaBalances'
import { i18n as i18nUserMenu } from './UserMenu.i18n'
import { UserMenuSignedIn } from './UserMenuSignedIn/UserMenuSignedIn'
import { config } from '../../config'
import { DownloadButton } from '../DownloadButton'
import { UserMenuEventId, UserMenuProps } from './UserMenu.types'
import { SignInButton, UserMenuContainer, UserMenuLoaderContainer } from './UserMenu.styled'

const UserMenu = React.memo((props: UserMenuProps) => {
  const {
    isSignedIn,
    isSigningIn,
    isDisconnecting,
    manaBalances,
    i18n = i18nUserMenu,
    hideDownloadButton,
    hideSignInButton,
    cdnLinks,
    getIdentityId,
    onClickSignIn,
    onClickBalance,
    onClickOpen,
    onClickUserMenuItem,
    loadingCdnLinks = false,
    shouldDownloadBeforeRedirect,
    ...signInProps
  } = props

  const [isOpen, setIsOpen] = useState(false)
  const [trackingId, setTrackingId] = useState<string | undefined>(undefined)

  const handleToggle = useCallback(
    (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      const trackId = uuidv4()
      setIsOpen(prev => {
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

  const handleClickSignIn = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault()
      onClickUserMenuItem &&
        onClickUserMenuItem(event, {
          type: UserMenuEventId.SIGN_IN,
          track_uuid: trackingId || undefined,
          url: config.get('MARKETPLACE_URL')
        })

      onClickSignIn && onClickSignIn(event)
    },
    [onClickSignIn, onClickUserMenuItem, trackingId]
  )

  const handleClickBalance = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, network: Network) => {
      event.preventDefault()
      onClickUserMenuItem &&
        onClickUserMenuItem(event, {
          type: UserMenuEventId.BALANCE
        })

      setTimeout(
        () => {
          onClickBalance ? onClickBalance(event, network) : window.open(config.get('ACCOUNT_URL'), '_blank', 'noopener')
        },
        onClickUserMenuItem ? 300 : 0
      )
    },
    [onClickBalance, onClickUserMenuItem, trackingId]
  ) as ManaBalancesProps['onClickBalance']

  return (
    <UserMenuContainer>
      {isDisconnecting ? (
        <UserMenuLoaderContainer>
          <CircularProgress size={20} />
        </UserMenuLoaderContainer>
      ) : (
        <>
          {!hideSignInButton && isSignedIn && (
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
          {!hideSignInButton && !isSignedIn ? (
            <SignInButton variant="outlined" color="inherit" disabled={isSigningIn} onClick={handleClickSignIn}>
              {isSigningIn ? <CircularProgress size={20} color="inherit" /> : i18n.signIn}
            </SignInButton>
          ) : null}

          {!hideDownloadButton && (
            <DownloadButton
              label={i18n.download}
              onClick={onClickUserMenuItem}
              trackingId={trackingId}
              loadingCdnLinks={loadingCdnLinks}
              cdnLinks={cdnLinks}
              getIdentityId={getIdentityId}
              shouldDownloadBeforeRedirect={shouldDownloadBeforeRedirect}
            />
          )}
        </>
      )}
    </UserMenuContainer>
  )
})

export { UserMenu }
