import styled from '@emotion/styled'

const StoreBadgesContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1.5),
  width: '100%'
}))

const StoreBadgeLink = styled('a')({
  display: 'inline-flex',
  alignItems: 'center',
  textDecoration: 'none',
  transition: 'opacity 0.2s ease',
  '&:hover': {
    opacity: 0.85
  }
})

const StoreBadgeIconWrapper = styled('div', {
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
