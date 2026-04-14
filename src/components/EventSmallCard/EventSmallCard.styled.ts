import { Box, Typography, styled } from '@mui/material'

const HOVER_SHADOW = '0px 2px 12px 12px rgba(255, 255, 255, 0.3)'

const CardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  borderRadius: 16,
  overflow: 'hidden',
  cursor: 'pointer',
  height: 140,
  minWidth: 300,
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.05)',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.palette.mode === 'dark' ? HOVER_SHADOW : '0px 2px 12px 4px rgba(0, 0, 0, 0.12)'
  },
  '&:hover [data-role="hover-actions"]': {
    opacity: 1,
    transform: 'translateY(0)'
  },
  '&:hover [data-role="time-pill"]': {
    opacity: 0
  },
  [theme.breakpoints.down('md')]: {
    minWidth: 0,
    '& [data-role="hover-actions"]': {
      display: 'none'
    }
  }
}))

const ThumbnailWrapper = styled(Box)({
  width: 180,
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
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical'
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

const ActionSlot = styled(Box)({
  position: 'absolute',
  top: 7,
  right: 5,
  zIndex: 1
})

export {
  ActionSlot,
  AvatarFallback,
  AvatarImg,
  CardContainer,
  ContentTop,
  CreatorName,
  CreatorNameHighlight,
  CreatorRow,
  EventTitle,
  HoverActions,
  HOVER_SHADOW,
  TextBlock,
  Thumbnail,
  ThumbnailWrapper,
  TimeLabel,
  TimePill
}
