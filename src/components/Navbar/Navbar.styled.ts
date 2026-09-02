import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import * as colors from '../../theme/colors'
import { navbar as navbarTokens } from '../../theme/colorSchemes'
import type { NavbarTokens } from '../../theme/colorSchemes'

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

type NavbarSchemeInput = { palette?: { mode?: 'light' | 'dark'; _components?: { navbar?: NavbarTokens } } }

/**
 * Navbar tokens for the active color scheme. The values live in
 * `theme/colorSchemes.ts` alongside the rest of the palette; this only reads
 * them.
 *
 * Two fallbacks, in order. A palette carrying no `_components` at all still
 * honours `palette.mode` — that covers the navbar rendered outside
 * DclThemeProvider, a consumer's own MUI theme, and MUI's stock
 * `colorSchemes.dark` (`extendTheme` files the DCL palette under
 * `colorSchemes.light`). Only a palette with neither lands on the dark set.
 */
const navbarScheme = ({ palette }: NavbarSchemeInput = {}) =>
  palette?._components?.navbar ?? (palette?.mode === 'light' ? navbarTokens.light : navbarTokens.dark)

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

const NavbarRoot = styled('nav')(({ theme }) => {
  const scheme = navbarScheme(theme)
  return {
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
      background: scheme.backdropMobile,
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
        background: scheme.backdropDesktop
      }
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

/**
 * The one gap between items in the navbar's right-hand row on desktop.
 *
 * Every item in that row is a sibling of the same rank to the eye: each balance chip, the bell, the
 * avatar. They are only nested in groups for the mobile layout, where the balances stack vertically
 * while the MANA pair stays side by side. Those groups used to bring their own gap, which is how the
 * row ended up at 24 / 12 / 24 across a single line, so they read this instead.
 */
const NAVBAR_ROW_GAP_DESKTOP = 24

const NavbarRightGroup = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  [DESKTOP_BREAKPOINT]: {
    gap: NAVBAR_ROW_GAP_DESKTOP
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

const HamburgerButton = styled('button')(({ theme }) => {
  const scheme = navbarScheme(theme)
  return {
    all: 'unset',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    backgroundColor: scheme.overlay,
    borderRadius: 8,
    color: scheme.textStrong,
    cursor: 'pointer',
    flexShrink: 0,
    transition: 'background-color 0.15s ease',
    '&:hover': {
      backgroundColor: scheme.overlayHover
    },
    '&:active': {
      backgroundColor: scheme.overlayActive
    },
    '&:focus-visible': {
      outline: `2px solid ${colors.base.primary}`,
      outlineOffset: 2
    },
    [DESKTOP_BREAKPOINT]: {
      display: 'none'
    }
  }
})

const SignInButton = styled('button')(({ theme }) => {
  const scheme = navbarScheme(theme)
  return {
    all: 'unset',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px 22px',
    border: `1px solid ${scheme.signInBorder}`,
    borderRadius: 6,
    fontFamily: FONT_FAMILY,
    fontWeight: 600,
    fontSize: 15,
    lineHeight: '24px',
    letterSpacing: 0.46,
    textTransform: 'uppercase' as const,
    color: scheme.signInText,
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transition: 'background-color 0.15s ease, border-color 0.15s ease',
    '&:hover': {
      backgroundColor: scheme.overlaySoft,
      borderColor: scheme.signInBorderHover
    },
    '&:active': {
      backgroundColor: scheme.signInActive
    },
    '&:disabled': {
      opacity: 0.5,
      pointerEvents: 'none' as const
    },
    '&:focus-visible': {
      outline: `2px solid ${colors.base.primary}`,
      outlineOffset: 2
    }
  }
})

export type { NavbarSchemeInput }
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
  NAVBAR_ROW_GAP_DESKTOP,
  NavbarRight,
  NavbarRightGroup,
  NavbarRoot,
  SignInButton,
  Z_INDEX,
  avatarPulse,
  bellShake,
  navbarScheme,
  slideDown
}
