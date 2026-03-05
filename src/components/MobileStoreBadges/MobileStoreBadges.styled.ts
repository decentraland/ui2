import styled from '@emotion/styled'
import { Box, Link } from '@mui/material'

const StoreBadgesContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1.5),
  width: '100%'
}))

const StoreBadgeLink = styled(Link)({
  display: 'inline-flex',
  alignItems: 'center',
  textDecoration: 'none',
  transition: 'opacity 0.2s ease',
  '&:hover': {
    opacity: 0.85
  }
})

const StoreBadgeIconWrapper = styled(Box, {
  shouldForwardProp: prop => prop !== 'badgeSize'
})<{ badgeSize: 'small' | 'large' }>(({ badgeSize }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  height: badgeSize === 'small' ? '40px' : '48px',
  '& svg': {
    height: '100%',
    width: 'auto'
  }
}))

export { StoreBadgesContainer, StoreBadgeLink, StoreBadgeIconWrapper }
