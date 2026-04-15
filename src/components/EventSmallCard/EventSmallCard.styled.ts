import { Box, Typography, styled } from '@mui/material'

const HOVER_SHADOW = '0px 2px 12px 12px rgba(255, 255, 255, 0.3)'
const HOVER_SHADOW_LIGHT = '0px 2px 12px 4px rgba(0, 0, 0, 0.12)'

const TimePill = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.06)',
  borderRadius: theme.spacing(0.75),
  padding: theme.spacing(0.25, 1, 0.25, 0.5),
  height: 24,
  width: 'fit-content',
  maxWidth: '100%',
  transition: 'opacity 0.2s ease'
}))

const HoverActions = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: theme.spacing(1.5),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: theme.spacing(0.5),
  opacity: 0,
  transform: 'translateY(8px)',
  transition: 'opacity 0.2s ease, transform 0.2s ease',
  flexWrap: 'nowrap'
}))

const EventSmallCardContainer = styled(Box, {
  shouldForwardProp: prop => prop !== 'disableHover'
})<{ disableHover?: boolean }>(({ theme, disableHover }) => ({
  display: 'flex',
  flexDirection: 'row',
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
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
    [`&:hover ${HoverActions}`]: {
      opacity: 1,
      transform: 'translateY(0)'
    },
    [`&:hover ${TimePill}`]: {
      opacity: 0
    }
  }),
  [theme.breakpoints.down('md')]: {
    minWidth: 0,
    [`& ${HoverActions}`]: {
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

const TextBlock = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  flex: 1,
  minWidth: 0,
  padding: theme.spacing(1.5),
  position: 'relative'
}))

const ContentTop = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5),
  overflow: 'hidden'
}))

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
  display: 'flex',
  gap: theme.spacing(1),
  alignItems: 'flex-start'
}))

const MobileAction = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    flexShrink: 0
  }
}))

const AvatarImg = styled('img')(({ theme }) => ({
  width: 19,
  height: 19,
  borderRadius: '50%',
  border: `1.4px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.15)'}`,
  flexShrink: 0,
  objectFit: 'cover'
}))

const AvatarFallback = styled(Box)(({ theme }) => ({
  width: 19,
  height: 19,
  borderRadius: '50%',
  backgroundColor: theme.palette.success.dark,
  border: `1.4px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.15)'}`,
  flexShrink: 0
}))

const CreatorRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1)
}))

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

const TimeLabel = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  fontWeight: 600,
  lineHeight: 1.5,
  color: theme.palette.text.primary,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
}))

export {
  AvatarFallback,
  AvatarImg,
  ContentTop,
  CreatorName,
  CreatorNameHighlight,
  CreatorRow,
  EventSmallCardContainer,
  EventTitle,
  HoverActions,
  MobileAction,
  TextBlock,
  Thumbnail,
  ThumbnailWrapper,
  TimeLabel,
  TimePill,
  TitleRow
}
