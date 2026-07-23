import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import { neutral } from '../../theme/colors'
import { Button } from '../Button'

// Centered column: bordered icon box, then a text/CTA block. Generalized from the
// Figma "EmptyMessage" composition (icon 100×100, 20px icon→text gap).
const EmptyStateBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  gap: 20,
  padding: theme.spacing(10, 2),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 2)
  }
}))

// 100×100 box, 4px soft-white border, 24px radius, glyph centered inside.
const EmptyStateIcon = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  width: 100,
  height: 100,
  borderRadius: 24,
  border: `4px solid ${neutral.softWhite}`,
  color: neutral.softWhite,
  ['& .MuiSvgIcon-root']: { fontSize: 56 },
  ['& svg']: { width: 56, height: 56 }
})

// Title → subtitle → CTA share a tighter 10px rhythm, offset 10px from the icon.
const EmptyStateBody = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 10,
  paddingTop: 10
})

// Figma typography/h6: Inter Medium 20, soft-white, line 1.6.
const EmptyStateTitle = styled(Typography)({
  color: neutral.softWhite,
  fontWeight: 500,
  fontSize: 20,
  lineHeight: 1.6,
  maxWidth: 452
})

// Figma typography/body1: Inter Regular 16, soft-white, line 1.5.
const EmptyStateSubtitle = styled(Typography)({
  color: neutral.softWhite,
  fontWeight: 400,
  fontSize: 16,
  lineHeight: 1.5,
  maxWidth: 436
})

// Figma "PrimaryCTA" / button/medium: h46, 16px padding, radius 12, uppercase.
const EmptyStateButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(0.5),
  height: 46,
  padding: theme.spacing(0, 2),
  borderRadius: 12,
  fontSize: 14,
  fontWeight: 600,
  letterSpacing: '0.4px',
  lineHeight: '24px',
  textTransform: 'uppercase'
}))

export { EmptyStateBody, EmptyStateBox, EmptyStateButton, EmptyStateIcon, EmptyStateSubtitle, EmptyStateTitle }
