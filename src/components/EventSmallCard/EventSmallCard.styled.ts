import { Box, Typography, styled } from '@mui/material'
import { hexToRgba } from '../../utils/colors'

const HOVER_SHADOW = `0px 2px 12px 12px ${hexToRgba('#FFFFFF', 0.3)}`
const HOVER_SHADOW_LIGHT = `0px 2px 12px 4px ${hexToRgba('#000000', 0.12)}`

const CardContainer = styled(Box, {
  shouldForwardProp: prop => prop !== 'disableHover'
})<{ disableHover?: boolean }>(({ theme, disableHover }) => ({
  display: 'flex',
  flexDirection: 'row',
  borderRadius: 16,
  overflow: 'hidden',
  containerType: 'inline-size',
  cursor: 'pointer',
  height: 140,
  minWidth: 300,
  maxWidth: 430,
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.05)',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  ...(!disableHover && {
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: theme.palette.mode === 'dark' ? HOVER_SHADOW : HOVER_SHADOW_LIGHT
    },
    '&:hover [data-role="hover-actions"]': {
      opacity: 1,
      transform: 'translateY(0)'
    },
    '&:hover [data-role="time-pill"]': {
      opacity: 0
    }
  }),
  [theme.breakpoints.down('md')]: {
    minWidth: 0,
    '& [data-role="hover-actions"]': {
      display: 'none'
    }
  }
}))

const ThumbnailWrapper = styled(Box)({
  width: '42%',
  height: 140,
  flexShrink: 0,
  overflow: 'hidden'
})

const Thumbnail = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block'
})

const TextBlock = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  flex: 1,
  minWidth: 0,
  padding: 12,
  position: 'relative'
})

const ContentTop = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  overflow: 'hidden'
})

const EventTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: 16,
  lineHeight: 1.5,
  color: theme.palette.text.primary,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  flex: 1,
  minWidth: 0,
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical'
}))

const TitleRow = styled(Box)(({ theme }) => ({
  display: 'contents',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    gap: 8,
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  }
}))

const MobileAction = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    flexShrink: 0
  }
}))

const AvatarImg = styled('img')({
  width: 19,
  height: 19,
  borderRadius: '50%',
  border: '1.4px solid rgba(255, 255, 255, 0.3)',
  flexShrink: 0,
  objectFit: 'cover'
})

const AvatarFallback = styled(Box)({
  width: 19,
  height: 19,
  borderRadius: '50%',
  backgroundColor: '#00B453',
  border: '1.4px solid rgba(255, 255, 255, 0.3)',
  flexShrink: 0
})

const CreatorRow = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 8
})

const CreatorName = styled(Typography)(({ theme }) => ({
  fontSize: 12,
  lineHeight: 1,
  color: theme.palette.text.secondary,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
}))

const CreatorNameHighlight = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main
}))

const TimePill = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.06)',
  borderRadius: 6,
  padding: '2px 8px 2px 4px',
  height: 24,
  width: 'fit-content',
  maxWidth: '100%',
  transition: 'opacity 0.2s ease'
}))

const TimeLabel = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  fontWeight: 600,
  lineHeight: 1.5,
  color: theme.palette.text.primary,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
}))

const HoverActions = styled(Box)({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: 12,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: 4,
  opacity: 0,
  transform: 'translateY(8px)',
  transition: 'opacity 0.2s ease, transform 0.2s ease',
  flexWrap: 'nowrap'
})

export {
  AvatarFallback,
  AvatarImg,
  CardContainer,
  ContentTop,
  CreatorName,
  CreatorNameHighlight,
  CreatorRow,
  EventTitle,
  HOVER_SHADOW,
  HoverActions,
  TextBlock,
  Thumbnail,
  ThumbnailWrapper,
  TimeLabel,
  TimePill,
  MobileAction,
  TitleRow
}
