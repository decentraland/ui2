import styled from '@emotion/styled'
import * as colors from '../../theme/colors'
import { MOBILE_BREAKPOINT, bellShake, slideDown } from './Navbar.styled'

const BellButton = styled('button')({
  all: 'unset',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 24,
  height: 24,
  color: colors.neutral.white,
  cursor: 'pointer',
  flexShrink: 0,
  borderRadius: 4,
  '&.has-unread': {
    animation: `${bellShake} 0.8s`,
    animationIterationCount: 4
  },
  '&:focus-visible': {
    outline: `2px solid ${colors.base.primary}`,
    outlineOffset: 2
  },
  '& svg': {
    width: 24,
    height: 24
  }
})

const NotificationBadge = styled('span')({
  position: 'absolute',
  top: -4,
  right: -6,
  minWidth: 16,
  height: 16,
  borderRadius: 8,
  backgroundColor: colors.base.primary,
  color: '#fff',
  fontSize: 10,
  fontWeight: 700,
  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 4px',
  lineHeight: 1,
  pointerEvents: 'none'
})

const NotificationWrapper = styled('div')({
  position: 'relative'
})

const NotificationPanel = styled('div')({
  position: 'absolute',
  top: '100%',
  right: -12,
  marginTop: 16,
  width: 390,
  maxHeight: '70vh',
  zIndex: 1102,
  background: 'rgba(38, 38, 38, 0.8)',
  backdropFilter: 'blur(12.5px)',
  WebkitBackdropFilter: 'blur(12.5px)',
  border: '0.5px solid #5E5B67',
  borderRadius: 12,
  boxShadow: '0 2px 20px rgba(0, 0, 0, 0.25)',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  paddingTop: 12,
  paddingBottom: 24,
  animation: `${slideDown} 0.15s ease forwards`,
  [MOBILE_BREAKPOINT]: {
    position: 'fixed',
    top: 64,
    left: 0,
    right: 0,
    width: 'auto',
    maxHeight: 'calc(100vh - 64px)',
    borderRadius: 0
  }
})

const NotificationHeader = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 12px 12px 24px',
  borderBottom: '0.5px solid #5E5B67'
})

const NotificationTitle = styled('span')({
  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
  fontWeight: 600,
  fontSize: 20,
  color: '#FCFCFC'
})

const NotificationList = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
  flex: 1
})

const NotificationListItem = styled('div')({
  display: 'flex',
  alignItems: 'flex-start',
  gap: 8,
  padding: '8px 16px',
  borderRadius: 8,
  cursor: 'pointer',
  transition: 'background-color 0.15s ease',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.05)'
  }
})

const NotificationItemImage = styled('div')({
  width: 56,
  height: 56,
  borderRadius: '50%',
  backgroundColor: 'rgba(103, 99, 112, 0.4)',
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  '& img, & svg': {
    width: 48,
    height: 48,
    objectFit: 'cover'
  }
})

const NotificationItemContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  minWidth: 0,
  flex: 1
})

const NotificationItemTitle = styled('span')({
  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
  fontWeight: 600,
  fontSize: 16,
  lineHeight: 1.75,
  color: '#FCFCFC',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
})

const NotificationItemDescription = styled('span')({
  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
  fontWeight: 400,
  fontSize: 12,
  lineHeight: '20px',
  color: '#ECEBED',
  maxWidth: 280,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
})

const NotificationItemTime = styled('span')({
  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
  fontWeight: 400,
  fontSize: 12,
  color: '#A09BA8'
})

const NotificationDot = styled('div')({
  width: 8,
  height: 8,
  borderRadius: 4,
  backgroundColor: '#FF2D55',
  flexShrink: 0,
  alignSelf: 'center'
})

const NotificationEmpty = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '40px 80px',
  gap: 8,
  color: colors.neutral.gray3,
  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
  fontSize: 16,
  textAlign: 'center'
})

export {
  BellButton,
  NotificationBadge,
  NotificationDot,
  NotificationEmpty,
  NotificationHeader,
  NotificationItemContent,
  NotificationItemDescription,
  NotificationItemImage,
  NotificationItemTime,
  NotificationItemTitle,
  NotificationList,
  NotificationListItem,
  NotificationPanel,
  NotificationTitle,
  NotificationWrapper
}
