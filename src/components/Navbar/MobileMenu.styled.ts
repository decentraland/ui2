import styled from '@emotion/styled'
import * as colors from '../../theme/colors'
import { DESKTOP_BREAKPOINT, GLASS_BG, GLASS_BLUR, GLASS_SHADOW } from './Navbar.styled'

const MobileMenuOverlay = styled('div')<{ open: boolean }>(({ open }) => ({
  position: 'fixed',
  top: 64,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1099,
  pointerEvents: open ? 'auto' : 'none',
  backgroundColor: open ? 'rgba(0, 0, 0, 0.3)' : 'transparent',
  transition: 'background-color 0.25s ease',
  [DESKTOP_BREAKPOINT]: {
    display: 'none'
  }
}))

const MobileMenuPanel = styled('div')<{ open: boolean }>(({ open }) => ({
  position: 'fixed',
  top: 64,
  left: 0,
  right: 0,
  zIndex: 1100,
  maxHeight: open ? 'calc(100vh - 64px)' : 0,
  overflowY: 'auto',
  background: GLASS_BG,
  backdropFilter: GLASS_BLUR,
  WebkitBackdropFilter: GLASS_BLUR,
  boxShadow: open ? GLASS_SHADOW : 'none',
  padding: open ? 12 : '0 12px',
  transition: 'max-height 0.3s ease, padding 0.3s ease, box-shadow 0.3s ease',
  [DESKTOP_BREAKPOINT]: {
    display: 'none'
  }
}))

const MobileMenuItem = styled('div')({
  borderBottom: '0.5px solid rgba(255, 255, 255, 0.1)'
})

const MobileMenuLink = styled('a')({
  display: 'flex',
  alignItems: 'center',
  padding: '24px 16px',
  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
  fontWeight: 600,
  fontSize: 16,
  lineHeight: 1.75,
  color: colors.neutral.white,
  textDecoration: 'none',
  '&:hover': {
    color: colors.neutral.gray5
  },
  '&:focus-visible': {
    outline: `2px solid ${colors.base.primary}`,
    outlineOffset: -2
  }
})

const MobileMenuAccordionHeader = styled('button')({
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: '24px 16px',
  boxSizing: 'border-box',
  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
  fontWeight: 600,
  fontSize: 16,
  lineHeight: 1.75,
  color: colors.neutral.white,
  cursor: 'pointer',
  '&:hover': {
    color: colors.neutral.gray5
  },
  '&:focus-visible': {
    outline: `2px solid ${colors.base.primary}`,
    outlineOffset: -2
  },
  '& svg': {
    width: 20,
    height: 20,
    flexShrink: 0,
    transition: 'transform 0.2s ease'
  }
})

const MobileMenuSubItems = styled('div')<{ open: boolean }>(({ open }) => ({
  maxHeight: open ? 500 : 0,
  overflow: 'hidden',
  transition: 'max-height 0.25s ease'
}))

const MobileMenuSubItem = styled('a')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 8,
  padding: '12px 16px',
  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
  fontWeight: 400,
  fontSize: 16,
  color: colors.neutral.gray4,
  textDecoration: 'none',
  '&:hover': {
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

export {
  MobileMenuAccordionHeader,
  MobileMenuItem,
  MobileMenuLink,
  MobileMenuOverlay,
  MobileMenuPanel,
  MobileMenuSubItem,
  MobileMenuSubItems
}
