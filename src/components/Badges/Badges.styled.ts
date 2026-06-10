import { keyframes, styled } from '@mui/material/styles'
import { Box, Typography } from '@mui/material'
import { gradient } from '../../theme/colors'

const NumberBadgeWrapper = styled(Box)(({ theme }) => ({
  width: 50,
  height: 50,
  borderRadius: theme.spacing(2),
  background: gradient.flare,
  padding: 3,
  [theme.breakpoints.down('sm')]: {
    width: 38,
    height: 38,
    borderRadius: theme.spacing(1.5)
  }
}))

const NumberBadgeInner = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  borderRadius: theme.spacing(1.5),
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: theme.typography.h6.fontSize,
  fontWeight: theme.typography.fontWeightBold,
  color: theme.palette.text.primary,
  [theme.breakpoints.down('sm')]: {
    borderRadius: theme.spacing(1),
    fontSize: theme.typography.body2.fontSize
  }
}))

const TextBadgeWrapper = styled(Box)(({ theme }) => ({
  background: gradient.cerise,
  borderRadius: 12,
  padding: theme.spacing(1, 1.5),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

const TextBadgeLabel = styled(Typography)(({ theme }) => ({
  color: '#fff',
  fontWeight: theme.typography.fontWeightBold,
  fontSize: 20,
  textTransform: 'uppercase',
  letterSpacing: theme.typography.overline.letterSpacing,
  [theme.breakpoints.down('sm')]: {
    fontSize: 14
  }
}))

const pulse = keyframes({
  '0%, 100%': { opacity: 1 },
  '50%': { opacity: 0.4 }
})

const livePulse = keyframes({
  '0%, 100%': { transform: 'scale(1)' },
  '50%': { transform: 'scale(1.3)' }
})

const LiveBadgeWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  height: 26,
  padding: theme.spacing(0, 1.5),
  backgroundColor: theme.palette.error.main,
  color: theme.palette.common.white,
  borderRadius: theme.spacing(1),
  fontSize: theme.typography.caption.fontSize,
  fontWeight: theme.typography.fontWeightBold,
  textTransform: 'uppercase',
  lineHeight: 1,
  '& .MuiSvgIcon-root': {
    fontSize: 14,
    animation: `${livePulse} 1.5s ease-in-out infinite`
  }
}))

const LiveBadgeDot = styled(Box)({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: 'currentColor',
  animation: `${pulse} 1.5s ease-in-out infinite`
})

const UserCountBadgeWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.75),
  height: 26,
  padding: theme.spacing(0, 1.5),
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  borderRadius: theme.spacing(1),
  fontSize: theme.typography.caption.fontSize,
  fontWeight: theme.typography.fontWeightBold,
  lineHeight: 1,
  '& .MuiSvgIcon-root': {
    fontSize: 14
  }
}))

const UserCountDot = styled(Box)(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: theme.palette.success.main
}))

const BadgeGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1)
}))

export {
  BadgeGroup,
  LiveBadgeDot,
  LiveBadgeWrapper,
  NumberBadgeInner,
  NumberBadgeWrapper,
  TextBadgeLabel,
  TextBadgeWrapper,
  UserCountBadgeWrapper,
  UserCountDot
}
