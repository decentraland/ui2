import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import * as colors from '../../theme/colors'

const FONT_FAMILY = 'Inter, Helvetica, Arial, sans-serif'

const MOBILE_BREAKPOINT = '@media (max-width: 991px)'
const DESKTOP_BREAKPOINT = '@media (min-width: 992px)'

const Z_INDEX = {
  userCard: 1099,
  navbar: 1100,
  mobileMenu: 1101,
  notificationPanel: 1102,
  mobileOverlay: 1201
} as const

const NAV_SHADOW = '0px 1.333px 24px rgba(0,0,0,0.12), 0px 8px 13.333px rgba(0,0,0,0.14), 0px 4px 6.667px rgba(0,0,0,0.2)'
const GLASS_BG = 'rgba(38, 38, 38, 0.8)'
const GLASS_BORDER = '0.5px solid #5E5B67'
const GLASS_SHADOW = '0 2px 20px 16px rgba(0, 0, 0, 0.25)'
const GLASS_BLUR = 'blur(12.5px)'

const avatarPulse = keyframes({
  '0%': { opacity: 1 },
  '50%': { opacity: 0.5 },
  '100%': { opacity: 1 }
})

// NOTE: Do NOT use transform in this animation. backdrop-filter breaks when
// the element has any transform set (even identity matrix), because it creates
// a new stacking context that prevents the blur from seeing through to the page.
const slideDown = keyframes({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
})

const bellShake = keyframes({
  '0%, 100%': { transform: 'rotate(0deg)' },
  '25%': { transform: 'rotate(8deg)' },
  '50%': { transform: 'rotate(-8deg)' },
  '75%': { transform: 'rotate(4deg)' }
})

const NavbarRoot = styled('nav')({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: Z_INDEX.navbar,
  fontFamily: FONT_FAMILY,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
  // The navbar's own blur is on a ::before pseudo-element so that child
  // dropdowns can have their own independent backdrop-filter. Nested
  // backdrop-filter elements don't compose in CSS - the child would blur
  // the parent's already-blurred content instead of the page behind.
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    background: 'rgba(22, 21, 24, 0.75)',
    boxShadow: NAV_SHADOW,
    backdropFilter: 'saturate(1.8) blur(20px)',
    WebkitBackdropFilter: 'saturate(1.8) blur(20px)',
    transition: 'background 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease'
  },
  [MOBILE_BREAKPOINT]: {
    height: 64,
    padding: '12px 16px'
  },
  [DESKTOP_BREAKPOINT]: {
    height: 92,
    padding: '16px 54px',
    '&::before': {
      background: 'rgba(22, 21, 24, 0.4)'
    }
  }
})

const NavbarLeft = styled('div')({
  display: 'flex',
  alignItems: 'center',
  [MOBILE_BREAKPOINT]: {
    gap: 12
  },
  [DESKTOP_BREAKPOINT]: {
    gap: 48
  },
  '& .mobile-only': {
    display: 'flex',
    [DESKTOP_BREAKPOINT]: { display: 'none' }
  },
  '& .desktop-only': {
    display: 'none',
    [DESKTOP_BREAKPOINT]: { display: 'flex' }
  }
})

const NavbarRight = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 16,
  [DESKTOP_BREAKPOINT]: {
    gap: 48
  }
})

const NavbarRightGroup = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  [DESKTOP_BREAKPOINT]: {
    gap: 24
  }
})

const LogoLink = styled('a')({
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  width: 40,
  height: 40,
  '& svg': {
    width: '100%',
    height: '100%'
  }
})

const HamburgerButton = styled('button')({
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 40,
  height: 40,
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  borderRadius: 8,
  color: colors.neutral.white,
  cursor: 'pointer',
  flexShrink: 0,
  transition: 'background-color 0.15s ease',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.15)'
  },
  '&:active': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)'
  },
  '&:focus-visible': {
    outline: `2px solid ${colors.base.primary}`,
    outlineOffset: 2
  },
  [DESKTOP_BREAKPOINT]: {
    display: 'none'
  }
})

const SignInButton = styled('button')({
  all: 'unset',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '8px 22px',
  border: `1px solid ${colors.neutral.softWhite}`,
  borderRadius: 6,
  fontFamily: FONT_FAMILY,
  fontWeight: 600,
  fontSize: 15,
  lineHeight: '24px',
  letterSpacing: 0.46,
  textTransform: 'uppercase' as const,
  color: colors.neutral.softWhite,
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  transition: 'background-color 0.15s ease, border-color 0.15s ease',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderColor: 'rgba(255, 255, 255, 0.7)'
  },
  '&:active': {
    backgroundColor: 'rgba(255, 255, 255, 0.12)'
  },
  '&:disabled': {
    opacity: 0.5,
    pointerEvents: 'none' as const
  },
  '&:focus-visible': {
    outline: `2px solid ${colors.base.primary}`,
    outlineOffset: 2
  }
})

export {
  DESKTOP_BREAKPOINT,
  FONT_FAMILY,
  GLASS_BG,
  GLASS_BLUR,
  GLASS_BORDER,
  GLASS_SHADOW,
  HamburgerButton,
  LogoLink,
  MOBILE_BREAKPOINT,
  NavbarLeft,
  NavbarRight,
  NavbarRightGroup,
  NavbarRoot,
  SignInButton,
  Z_INDEX,
  avatarPulse,
  bellShake,
  slideDown
}
