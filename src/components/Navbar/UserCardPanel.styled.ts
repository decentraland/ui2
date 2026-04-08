import styled from '@emotion/styled'
import * as colors from '../../theme/colors'
import {
  DESKTOP_BREAKPOINT,
  GLASS_BG,
  GLASS_BLUR,
  GLASS_BORDER,
  GLASS_SHADOW,
  MOBILE_BREAKPOINT,
  avatarPulse,
  slideDown
} from './Navbar.styled'

const AvatarButton = styled('button')({
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  flexShrink: 0,
  borderRadius: 100,
  backgroundColor: '#FF4BED',
  border: '2px solid rgba(255, 255, 255, 0.5)',
  overflow: 'hidden',
  [MOBILE_BREAKPOINT]: {
    width: 40,
    height: 40
  },
  [DESKTOP_BREAKPOINT]: {
    width: 48,
    height: 48
  },
  '&:focus-visible': {
    outline: `2px solid ${colors.base.primary}`,
    outlineOffset: 2
  },
  '&.loading': {
    animation: `${avatarPulse} 1.5s ease-in-out infinite`
  }
})

const AvatarImage = styled('img')({
  borderRadius: 100,
  objectFit: 'cover',
  width: '100%',
  height: '100%'
})

const AvatarFallback = styled('div')({
  borderRadius: 100,
  backgroundColor: '#FF4BED',
  width: '100%',
  height: '100%'
})

const UserCardWrapper = styled('div')({
  position: 'relative'
})

const UserCard = styled('div')({
  position: 'fixed',
  top: 92,
  right: 54,
  zIndex: 1201,
  background: GLASS_BG,
  backdropFilter: GLASS_BLUR,
  WebkitBackdropFilter: GLASS_BLUR,
  border: GLASS_BORDER,
  borderRadius: 12,
  boxShadow: GLASS_SHADOW,
  display: 'none',
  padding: 12,
  gap: 24,
  animation: `${slideDown} 0.15s ease forwards`,
  minWidth: 484,
  [DESKTOP_BREAKPOINT]: {
    display: 'flex'
  }
})

const UserCardAvatarContainer = styled('div')({
  width: 151,
  minHeight: 240,
  borderRadius: 12,
  border: '0.5px solid #c640cd',
  background: 'linear-gradient(180deg, rgba(198, 64, 205, 0.2) 0%, rgba(105, 31, 169, 0.2) 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  flexShrink: 0
})

const UserCardAvatarBody = styled('img')({
  width: '100%',
  height: 'auto',
  objectFit: 'contain',
  objectPosition: 'center'
})

const UserCardMenu = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  paddingRight: 12,
  paddingTop: 4,
  paddingBottom: 4,
  flex: 1,
  minWidth: 0,
  [MOBILE_BREAKPOINT]: {
    gap: 12
  }
})

const UserCardName = styled('span')({
  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
  fontWeight: 600,
  fontSize: 20,
  color: '#fcfcfc',
  marginBottom: 4,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
})

const UserCardAddressLabel = styled('span')({
  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
  fontWeight: 400,
  fontSize: 12,
  color: '#cfcdd4'
})

const UserCardAddress = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
  fontWeight: 400,
  fontSize: 12,
  color: '#fcfcfc',
  marginBottom: 4
})

const UserCardCopyButton = styled('button')({
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  color: '#fcfcfc',
  opacity: 0.7,
  transition: 'opacity 0.15s ease',
  '&:hover': {
    opacity: 1
  }
})

const UserCardMenuItem = styled('a')({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  padding: '8px 16px',
  borderRadius: 12,
  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
  fontWeight: 400,
  fontSize: 16,
  lineHeight: 1.75,
  color: colors.neutral.gray4,
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  transition: 'color 0.15s ease, background-color 0.15s ease',
  '&:hover': {
    color: colors.neutral.white,
    backgroundColor: 'rgba(255, 255, 255, 0.05)'
  },
  '&:focus-visible': {
    outline: `2px solid ${colors.base.primary}`,
    outlineOffset: 2
  },
  '& svg': {
    width: 20,
    height: 20,
    flexShrink: 0
  }
})

const UserCardDivider = styled('div')({
  height: 0.5,
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  margin: '8px 0'
})

const UserCardLogout = styled('button')({
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  padding: '12px 16px',
  borderRadius: 12,
  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
  fontWeight: 400,
  fontSize: 16,
  lineHeight: 1.75,
  color: colors.neutral.gray4,
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  transition: 'color 0.15s ease',
  '&:hover': {
    color: colors.base.primary
  },
  '&:focus-visible': {
    outline: `2px solid ${colors.base.primary}`,
    outlineOffset: 2
  },
  '& svg': {
    width: 18,
    height: 18
  }
})

/* ------------------------------------------------------------------ */
/*  Compact Chain Selector                                            */
/* ------------------------------------------------------------------ */

const ChainPill = styled('button')({
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  height: 32,
  padding: '0 12px',
  borderRadius: 8,
  background: 'rgba(255, 255, 255, 0.08)',
  color: colors.neutral.white,
  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
  fontSize: 13,
  fontWeight: 500,
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  transition: 'background-color 0.15s ease',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.14)'
  },
  '&:focus-visible': {
    outline: `2px solid ${colors.base.primary}`,
    outlineOffset: 2
  },
  '& svg': {
    width: 18,
    height: 18,
    flexShrink: 0
  }
})

const ChainDropdownContainer = styled('div')({
  position: 'relative'
})

const ChainDropdown = styled('div')({
  position: 'absolute',
  top: 'calc(100% + 6px)',
  right: 0,
  minWidth: 180,
  background: GLASS_BG,
  backdropFilter: GLASS_BLUR,
  WebkitBackdropFilter: GLASS_BLUR,
  border: GLASS_BORDER,
  borderRadius: 12,
  boxShadow: GLASS_SHADOW,
  padding: 8,
  zIndex: 10,
  animation: `${slideDown} 0.15s ease forwards`
})

const ChainOption = styled('button')<{ selected?: boolean }>(({ selected }) => ({
  all: 'unset',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  width: '100%',
  boxSizing: 'border-box',
  padding: '4px 16px',
  paddingLeft: selected ? 16 : 16,
  borderRadius: 4,
  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
  fontSize: 12,
  fontWeight: 400,
  letterSpacing: 0.46,
  textTransform: 'uppercase' as const,
  color: 'white',
  cursor: 'pointer',
  transition: 'background-color 0.15s ease, color 0.15s ease',
  background: selected ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
  '&:hover': {
    background: selected ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)'
  },
  '& svg': {
    width: 16,
    height: 16,
    flexShrink: 0
  },
  ...(selected
    ? {
        '&::before': {
          content: '""',
          position: 'absolute',
          left: 4,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 8,
          height: 8,
          borderRadius: 4,
          backgroundColor: '#34CE77'
        }
      }
    : {})
}))

const ChainOptionBadge = styled('span')({
  marginLeft: 'auto',
  fontSize: 11,
  fontWeight: 500,
  color: colors.neutral.gray3,
  whiteSpace: 'nowrap'
})

/* ------------------------------------------------------------------ */
/*  Compact Mana Balance                                              */
/* ------------------------------------------------------------------ */

const ManaBalanceContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  color: colors.neutral.white,
  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
  fontSize: 13,
  fontWeight: 500
})

const ManaBalanceEntry = styled('button')({
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  cursor: 'pointer',
  transition: 'opacity 0.15s ease',
  '&:hover': {
    opacity: 0.75
  },
  '&:focus-visible': {
    outline: `2px solid ${colors.base.primary}`,
    outlineOffset: 2,
    borderRadius: 4
  },
  '& svg': {
    width: 16,
    height: 16,
    flexShrink: 0
  }
})

const ManaBalanceDivider = styled('div')({
  width: 1,
  height: 16,
  background: 'rgba(255, 255, 255, 0.2)',
  flexShrink: 0
})

const MobileUserCard = styled('div')({
  position: 'fixed',
  top: 64,
  left: 0,
  right: 0,
  zIndex: 1201,
  background: GLASS_BG,
  backdropFilter: GLASS_BLUR,
  WebkitBackdropFilter: GLASS_BLUR,
  boxShadow: GLASS_SHADOW,
  padding: '24px 12px',
  animation: `${slideDown} 0.15s ease forwards`,
  [DESKTOP_BREAKPOINT]: {
    display: 'none'
  }
})

const MobileUserCardTop = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  paddingBottom: 8
})

const MobileUserCardAvatar = styled('div')({
  width: 73,
  height: 73,
  borderRadius: 100,
  border: '3px solid rgba(255, 255, 255, 0.5)',
  backgroundColor: '#FF4BED',
  overflow: 'hidden',
  flexShrink: 0,
  '&.loading': {
    animation: `${avatarPulse} 1.5s ease-in-out infinite`
  }
})

const MobileUserCardAvatarImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 100
})

const MobileUserCardInfo = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  minWidth: 0
})

const MobileUserCardName = styled('span')({
  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
  fontWeight: 600,
  fontSize: 20,
  color: '#fcfcfc',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
})

const MobileUserCardAddressLabel = styled('span')({
  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
  fontWeight: 400,
  fontSize: 12,
  color: '#cfcdd4'
})

const MobileUserCardAddress = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
  fontWeight: 400,
  fontSize: 12,
  color: '#fcfcfc'
})

const MobileUserCardCopyButton = styled('button')({
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  color: '#fcfcfc',
  transition: 'opacity 0.15s ease',
  '&:hover': {
    opacity: 0.7
  },
  '& svg': {
    width: 20,
    height: 20
  }
})

/* ------------------------------------------------------------------ */
/*  UserCard Chain & Mana Section                                     */
/* ------------------------------------------------------------------ */

const UserCardChainManaSection = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  padding: '0 16px'
})

const UserCardChainRow = styled('button')({
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  padding: '8px 12px',
  borderRadius: 8,
  background: 'rgba(255, 255, 255, 0.06)',
  color: colors.neutral.white,
  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
  fontSize: 13,
  fontWeight: 500,
  cursor: 'pointer',
  transition: 'background-color 0.15s ease',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.1)'
  },
  '& svg': {
    width: 18,
    height: 18,
    flexShrink: 0
  }
})

const UserCardChainOptions = styled('div')({
  position: 'absolute',
  top: 'calc(100% + 4px)',
  left: 0,
  minWidth: 150,
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  padding: 4,
  background: '#43404A',
  backdropFilter: 'blur(12.5px)',

  WebkitBackdropFilter: 'blur(12.5px)',
  border: '0.5px solid #5E5B67',
  borderRadius: 8,
  boxShadow: '0 2px 20px rgba(0, 0, 0, 0.25)',
  zIndex: 10
})

const UserCardManaRow = styled('button')({
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  padding: '6px 12px',
  borderRadius: 8,
  color: colors.neutral.white,
  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
  fontSize: 13,
  fontWeight: 500,
  cursor: 'pointer',
  transition: 'background-color 0.15s ease',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.06)'
  },
  '& svg': {
    width: 16,
    height: 16,
    flexShrink: 0
  }
})

export {
  AvatarButton,
  AvatarFallback,
  AvatarImage,
  ChainDropdown,
  ChainDropdownContainer,
  ChainOption,
  ChainOptionBadge,
  ChainPill,
  ManaBalanceContainer,
  ManaBalanceDivider,
  ManaBalanceEntry,
  MobileUserCard,
  MobileUserCardAddress,
  MobileUserCardAddressLabel,
  MobileUserCardAvatar,
  MobileUserCardAvatarImage,
  MobileUserCardCopyButton,
  MobileUserCardInfo,
  MobileUserCardName,
  MobileUserCardTop,
  UserCard,
  UserCardAddress,
  UserCardAddressLabel,
  UserCardAvatarBody,
  UserCardAvatarContainer,
  UserCardChainManaSection,
  UserCardChainOptions,
  UserCardChainRow,
  UserCardCopyButton,
  UserCardDivider,
  UserCardLogout,
  UserCardManaRow,
  UserCardMenu,
  UserCardMenuItem,
  UserCardName,
  UserCardWrapper
}
