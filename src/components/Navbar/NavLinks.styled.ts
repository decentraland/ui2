import styled from '@emotion/styled'
import * as colors from '../../theme/colors'
import { DESKTOP_BREAKPOINT, GLASS_BG, GLASS_BLUR, GLASS_BORDER, GLASS_SHADOW, slideDown } from './Navbar.styled'

const DesktopTabList = styled('div')({
  display: 'none',
  [DESKTOP_BREAKPOINT]: {
    display: 'flex',
    alignItems: 'center',
    gap: 24
  }
})

const DesktopTab = styled('button')({
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  padding: '8px 24px',
  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
  fontWeight: 400,
  fontSize: 16,
  color: colors.neutral.gray5,
  cursor: 'pointer',
  borderRadius: 8,
  whiteSpace: 'nowrap',
  transition: 'background-color 0.15s ease, color 0.15s ease',
  '&:hover': {
    color: colors.neutral.white,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    textShadow: '0 0 0.5px currentColor, 0 0 0.5px currentColor'
  },
  '&.active': {
    color: colors.neutral.white,
    textShadow: '0 0 0.5px currentColor, 0 0 0.5px currentColor'
  },
  '&:focus-visible': {
    outline: `2px solid ${colors.base.primary}`,
    outlineOffset: 2
  },
  '& svg': {
    width: 20,
    height: 20,
    transition: 'transform 0.2s ease',
    flexShrink: 0
  }
})

const DesktopTabLink = styled('a')({
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  padding: '8px 24px',
  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
  fontWeight: 400,
  fontSize: 16,
  color: colors.neutral.gray5,
  cursor: 'pointer',
  borderRadius: 8,
  whiteSpace: 'nowrap',
  transition: 'background-color 0.15s ease, color 0.15s ease',
  '&:hover': {
    color: colors.neutral.white,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    textShadow: '0 0 0.5px currentColor, 0 0 0.5px currentColor'
  },
  '&.active': {
    color: colors.neutral.white,
    textShadow: '0 0 0.5px currentColor, 0 0 0.5px currentColor'
  },
  '&:focus-visible': {
    outline: `2px solid ${colors.base.primary}`,
    outlineOffset: 2
  }
})

const DesktopTabWithDropdown = styled(DesktopTab)({
  paddingRight: 16
})

const DesktopDropdownWrapper = styled('div')({
  position: 'relative',
  // Extra padding at the bottom creates a hover "safe zone" between
  // the tab and the dropdown so the mouse doesn't leave the wrapper.
  paddingBottom: 8,
  marginBottom: -8,
  cursor: 'pointer'
})

const DesktopDropdown = styled('div')({
  position: 'absolute',
  top: '100%',
  left: 0,
  marginTop: 2,
  minWidth: 220,
  background: GLASS_BG,
  backdropFilter: GLASS_BLUR,
  WebkitBackdropFilter: GLASS_BLUR,
  border: GLASS_BORDER,
  borderRadius: 12,
  boxShadow: GLASS_SHADOW,
  padding: 12,
  animation: `${slideDown} 0.15s ease forwards`
})

const DesktopDropdownItem = styled('a')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 8,
  padding: '8px 16px',
  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
  fontWeight: 400,
  fontSize: 16,
  color: colors.neutral.gray4,
  textDecoration: 'none',
  borderRadius: 12,
  whiteSpace: 'nowrap',
  transition: 'background-color 0.15s ease, color 0.15s ease',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    color: colors.neutral.white
  },
  '&:focus-visible': {
    outline: `2px solid ${colors.base.primary}`,
    outlineOffset: -2
  },
  '& svg': {
    width: 16,
    height: 16,
    flexShrink: 0,
    opacity: 0.6
  }
})

export { DesktopDropdown, DesktopDropdownItem, DesktopDropdownWrapper, DesktopTab, DesktopTabLink, DesktopTabList, DesktopTabWithDropdown }
