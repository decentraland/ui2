import styled from '@emotion/styled'
import * as colors from '../../theme/colors'
import { DESKTOP_BREAKPOINT, MOBILE_BREAKPOINT } from './Navbar.styled'

const CreditsBalanceButton = styled('button')({
  all: 'unset',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  cursor: 'pointer',
  color: '#A0ABFF',
  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
  fontWeight: 600,
  flexShrink: 0,
  transition: 'opacity 0.15s ease',
  '&:hover': {
    opacity: 0.8
  },
  '&:hover .credits-tooltip': {
    opacity: 1,
    pointerEvents: 'auto'
  },
  '&:focus-visible': {
    outline: `2px solid ${colors.base.primary}`,
    outlineOffset: 2,
    borderRadius: 4
  },
  '&& svg': {
    flexShrink: 0
  },
  [MOBILE_BREAKPOINT]: {
    fontSize: 12,
    letterSpacing: -0.6,
    '&& svg': {
      width: 14,
      height: 14
    }
  },
  [DESKTOP_BREAKPOINT]: {
    fontSize: 16,
    letterSpacing: -0.8,
    '&& svg': {
      width: 20,
      height: 20
    }
  }
})

const CreditsTooltip = styled('div')({
  position: 'absolute',
  top: 'calc(100% + 4px)',
  left: '50%',
  transform: 'translateX(-50%)',
  background: '#43404A',
  padding: 8,
  borderRadius: 8,
  boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
  fontWeight: 400,
  fontSize: 12,
  lineHeight: 1.4,
  color: '#ECEBED',
  whiteSpace: 'normal',
  textAlign: 'center',
  minWidth: 140,
  opacity: 0,
  pointerEvents: 'none',
  transition: 'opacity 0.15s ease',
  zIndex: 10
})

const NavbarManaBalancesGroup = styled('div')({
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  [MOBILE_BREAKPOINT]: {
    gap: 4
  },
  [DESKTOP_BREAKPOINT]: {
    gap: 12
  }
})

const NavbarManaBalanceButton = styled('button')<{ clickable?: boolean }>(({ clickable }) => ({
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  cursor: clickable ? 'pointer' : 'default',
  color: colors.neutral.softWhite,
  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
  fontWeight: 400,
  flexShrink: 0,
  transition: 'opacity 0.15s ease',
  '&:hover': clickable ? { opacity: 0.8 } : undefined,
  '&:focus-visible': {
    outline: `2px solid ${colors.base.primary}`,
    outlineOffset: 2,
    borderRadius: 4
  },
  [MOBILE_BREAKPOINT]: {
    gap: 2,
    fontSize: 12,
    letterSpacing: -0.6,
    '& svg': {
      width: 14,
      height: 14,
      flexShrink: 0
    }
  },
  [DESKTOP_BREAKPOINT]: {
    gap: 4,
    fontWeight: 600,
    fontSize: 16,
    letterSpacing: -0.8,
    '& svg': {
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }
}))

const NavbarBalancesStack = styled('div')({
  display: 'flex',
  flexShrink: 0,
  [MOBILE_BREAKPOINT]: {
    flexDirection: 'column-reverse',
    alignItems: 'flex-end',
    justifyContent: 'center',
    gap: 4
  },
  [DESKTOP_BREAKPOINT]: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24
  }
})

export { CreditsBalanceButton, CreditsTooltip, NavbarBalancesStack, NavbarManaBalanceButton, NavbarManaBalancesGroup }
