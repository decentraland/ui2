import React, { useCallback, useMemo, useState } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import LogoutIcon from '@mui/icons-material/Logout'
import { Badge, Box, IconButton, Typography } from '@mui/material'
import { config } from '../../../config'
import { AvatarFace } from '../../AvatarFace'
import { ReferralInviteFriendsIcon } from '../../Icon'
import { useTabletAndBelowMediaQuery } from '../../Media'
import { Notifications } from '../../Notifications'
import { ManaBalances } from '../ManaBalances'
import { UserMenuEventId } from '../UserMenu.types'
import { UserMenuActionsProps, UserMenuSignedInProps } from './UserMenuSignedIn.types'
import {
  ActionsContainer,
  ActionsListItemIcon,
  ActionsMenuItem,
  ActionsWrapper,
  ActivityIcon,
  AvatarFaceContainer,
  AvatarPreview,
  AvatarPreviewContainer,
  InviteFriendsTypography,
  LogoutContainer,
  MenuContainer,
  MenuInfoContainer,
  MenuInfoTypography,
  MenuInfoUnclaimedTypography,
  MenuInformationActionContainer,
  ReferralInviteFriendsIconContainer,
  UserMenuSignedInContainer
} from './UserMenuSignedIn.styled'

const UserMenuActions = (props: UserMenuActionsProps) => {
  const {
    avatar,
    address,
    i18n,
    trackingId,
    onClickMarketplaceAuthorization,
    onClickMyAssets,
    onClickProfile,
    onClickSignOut,
    onClickAccount,
    onClickUserMenuItem,
    balances
  } = props

  const isTabletAndBelow = useTabletAndBelowMediaQuery()

  const handleClickMyAssets = useCallback(
    (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      onClickUserMenuItem &&
        onClickUserMenuItem(event, {
          type: UserMenuEventId.MY_ASSETS,
          track_uuid: trackingId,
          url: config.get('MARKETPLACE_MY_ASSETS_URL')
        })

      setTimeout(
        () => {
          onClickMyAssets ? onClickMyAssets(event) : window.open(`${config.get('MARKETPLACE_MY_ASSETS_URL')}`, '_blank', 'noopener')
        },
        onClickUserMenuItem ? 300 : 0
      )
    },
    [onClickMyAssets, onClickUserMenuItem, trackingId]
  )

  const handleClickMarketplaceAuthorization = useCallback(
    (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      onClickUserMenuItem &&
        onClickUserMenuItem(event, {
          type: UserMenuEventId.MARKETPLACE_AUTHORIZATIONS,
          track_uuid: trackingId,
          url: config.get('MARKETPLACE_SETTINGS_URL')
        })
      setTimeout(
        () => {
          onClickMarketplaceAuthorization
            ? onClickMarketplaceAuthorization(event)
            : window.open(`${config.get('MARKETPLACE_SETTINGS_URL')}`, '_blank', 'noopener')
        },
        onClickUserMenuItem ? 300 : 0
      )
    },
    [onClickMarketplaceAuthorization, onClickUserMenuItem, trackingId]
  )

  const handleClickProfile = useCallback(
    (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      onClickUserMenuItem &&
        onClickUserMenuItem(event, {
          type: UserMenuEventId.PROFILE,
          track_uuid: trackingId,
          url: config.get('PROFILE_URL')
        })

      setTimeout(
        () => {
          onClickProfile ? onClickProfile(event) : window.open(config.get('PROFILE_URL'), '_blank', 'noopener')
        },
        onClickUserMenuItem ? 300 : 0
      )
    },
    [onClickProfile, onClickUserMenuItem, trackingId]
  )

  const handleClickAccount = useCallback(
    (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      onClickUserMenuItem &&
        onClickUserMenuItem(event, {
          type: UserMenuEventId.ACCOUNT,
          track_uuid: trackingId,
          url: config.get('ACCOUNT_URL')
        })

      setTimeout(
        () => {
          onClickAccount ? onClickAccount(event) : window.open(config.get('ACCOUNT_URL'), '_blank', 'noopener')
        },
        onClickUserMenuItem ? 300 : 0
      )
    },
    [onClickAccount, onClickUserMenuItem, trackingId]
  )

  const handleClickInviteFriends = useCallback(
    (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      onClickUserMenuItem &&
        onClickUserMenuItem(event, {
          type: UserMenuEventId.INVITE_FRIENDS,
          track_uuid: trackingId,
          url: `${config.get('PROFILE_URL')}/accounts/${userAddress}/referral`
        })
      setTimeout(
        () => {
          window.open(`${config.get('PROFILE_URL')}/accounts/${userAddress}/referral`, '_blank', 'noopener')
        },
        onClickUserMenuItem ? 300 : 0
      )
    },
    [onClickUserMenuItem, trackingId]
  )

  const handleClickSignOut = useCallback(
    (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      onClickUserMenuItem &&
        onClickUserMenuItem(event, {
          type: UserMenuEventId.SIGN_OUT,
          track_uuid: trackingId
        })
      onClickSignOut && onClickSignOut(event, trackingId || '')
    },
    [onClickSignOut, onClickUserMenuItem, trackingId]
  )

  const userAddress = useMemo(() => avatar?.ethAddress || address, [avatar, address])

  return (
    <ActionsContainer elevation={0}>
      <AvatarPreviewContainer>
        <AvatarPreview avatar={avatar} />
      </AvatarPreviewContainer>
      <MenuInformationActionContainer>
        <MenuInfoContainer>
          <MenuInfoTypography variant="h4">
            {avatar?.name || i18n.guest}{' '}
            {!avatar?.hasClaimedName && userAddress && (
              <MenuInfoUnclaimedTypography>#{userAddress.substring(userAddress.length - 4)}</MenuInfoUnclaimedTypography>
            )}
          </MenuInfoTypography>
          {isTabletAndBelow && balances}
        </MenuInfoContainer>
        <ActionsWrapper>
          <ActionsMenuItem onClick={handleClickInviteFriends}>
            <InviteFriendsTypography variant="h6">
              {i18n.inviteFriends}
              <ReferralInviteFriendsIconContainer>
                <ReferralInviteFriendsIcon />
              </ReferralInviteFriendsIconContainer>
            </InviteFriendsTypography>
            <ActionsListItemIcon>
              <ArrowForwardIcon />
            </ActionsListItemIcon>
          </ActionsMenuItem>
          <ActionsMenuItem onClick={handleClickProfile}>
            <Typography variant="h6">{i18n.viewProfile}</Typography>
            <ActionsListItemIcon>
              <ArrowForwardIcon />
            </ActionsListItemIcon>
          </ActionsMenuItem>
          <ActionsMenuItem onClick={handleClickMyAssets}>
            <Typography variant="h6">{i18n.myAssets}</Typography>
            <ActionsListItemIcon>
              <ArrowForwardIcon />
            </ActionsListItemIcon>
          </ActionsMenuItem>
          <ActionsMenuItem onClick={handleClickAccount}>
            <Typography variant="h6">{i18n.account}</Typography>
            <ActionsListItemIcon>
              <ArrowForwardIcon />
            </ActionsListItemIcon>
          </ActionsMenuItem>
          <ActionsMenuItem onClick={handleClickMarketplaceAuthorization}>
            <Typography variant="h6">{i18n.marketplaceAuthorizations}</Typography>
            <ActionsListItemIcon>
              <ArrowForwardIcon />
            </ActionsListItemIcon>
          </ActionsMenuItem>
        </ActionsWrapper>
        <LogoutContainer onClick={handleClickSignOut}>
          <Typography variant="h6">{i18n.signOut}</Typography>
          <LogoutIcon />
        </LogoutContainer>
      </MenuInformationActionContainer>
    </ActionsContainer>
  )
}

const UserMenuSignedIn = React.memo((props: UserMenuSignedInProps) => {
  const {
    manaBalances,
    creditsBalance,
    avatar,
    hasActivity,
    isOpen,
    trackingId,
    notifications,
    onClickActivity,
    onClickBalance,
    onClickClose,
    onClickUserMenuItem,
    onClickToggle,
    ...actionsProps
  } = props

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const isTabletAndBelow = useTabletAndBelowMediaQuery()

  const balances = useMemo(() => {
    return (
      <ManaBalances
        manaBalances={manaBalances}
        creditsBalance={creditsBalance}
        onClickBalance={onClickBalance}
        i18n={{
          getCredits: actionsProps.i18n?.getCredits,
          creditsExpiringSoon: actionsProps.i18n?.creditsExpiringSoon,
          creditsExpiringIn: actionsProps.i18n?.creditsExpiringIn,
          creditsValue: actionsProps.i18n?.creditsValue
        }}
      />
    )
  }, [manaBalances, creditsBalance])

  const handleClickActivity = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      onClickUserMenuItem &&
        onClickUserMenuItem(event, {
          type: UserMenuEventId.ACTIVITY,
          track_uuid: trackingId,
          url: `${config.get('MARKETPLACE_URL')}/activity`
        })
      setTimeout(
        () => {
          onClickActivity ? onClickActivity(event) : window.open(`${config.get('MARKETPLACE_URL')}/activity`, '_blank', 'noopener')
        },
        onClickActivity ? 300 : 0
      )
    },
    [onClickActivity, onClickUserMenuItem, trackingId]
  )

  const handleClickToggle = useCallback(
    (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      onClickToggle && onClickToggle(event)
      setAnchorEl(event.currentTarget)
    },
    [onClickToggle]
  )

  const handleClickClose = useCallback(() => {
    onClickClose && onClickClose()
  }, [onClickClose])

  return (
    <UserMenuSignedInContainer>
      {notifications && <Notifications {...notifications} />}
      {!isTabletAndBelow && (
        <IconButton aria-label="activity" onClick={handleClickActivity}>
          <Badge color="secondary" variant="dot" invisible={!hasActivity}>
            <ActivityIcon />
          </Badge>
        </IconButton>
      )}
      {!isTabletAndBelow && balances}
      <AvatarFaceContainer onClick={handleClickToggle}>
        <AvatarFace size="medium" avatar={avatar} />
      </AvatarFaceContainer>
      <Box onMouseLeave={handleClickClose} onScroll={!isTabletAndBelow ? handleClickClose : undefined}>
        {!isTabletAndBelow && (
          <MenuContainer
            anchorEl={anchorEl}
            open={!!isOpen}
            onClose={handleClickClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
          >
            <UserMenuActions
              onClickUserMenuItem={onClickUserMenuItem}
              avatar={avatar}
              trackingId={trackingId}
              {...actionsProps}
            ></UserMenuActions>
          </MenuContainer>
        )}
        {isTabletAndBelow && isOpen && (
          <UserMenuActions
            balances={balances}
            onClickUserMenuItem={onClickUserMenuItem}
            avatar={avatar}
            trackingId={trackingId}
            {...actionsProps}
          ></UserMenuActions>
        )}
      </Box>
    </UserMenuSignedInContainer>
  )
})

export { UserMenuSignedIn, UserMenuActions }
