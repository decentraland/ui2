import styled from '@emotion/styled'
import { Box, Button as MuiButton, Typography } from '@mui/material'
import { neutral } from '../../theme/colors'

const LoadingContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%'
})

const BannerContainer = styled(Box, {
  shouldForwardProp: prop => prop !== 'background' && prop !== 'aspectRatio'
})<{
  background: string
  aspectRatio?: number
}>(props => {
  const { theme, background, aspectRatio } = props

  return {
    width: '100%',
    overflow: 'hidden',
    display: 'flex',
    padding: '2rem',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    alignItems: 'center',
    // Reserve the artwork's own ratio so `cover` has nothing to crop. `fit-content` keeps taller
    // content (long copy, a button) from being clipped when it needs more room than the artwork.
    ...(aspectRatio ? { aspectRatio: `${aspectRatio}`, minHeight: 'fit-content' } : {}),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse'
    }
  }
})

const ContentWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  flexGrow: 1,
  marginRight: '20px'
})

const Content = styled(Box, {
  shouldForwardProp: prop => prop !== 'constrainedWidth'
})<{ constrainedWidth?: boolean }>(props => {
  const { theme, constrainedWidth } = props

  return {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.1rem',
    // Side aligned copy sits next to the subject of the artwork, so keep it in its own half instead of
    // letting it stretch across the whole banner. Centered copy uses the banner as its canvas.
    ...(constrainedWidth
      ? {
          [theme.breakpoints.up('sm')]: {
            maxWidth: '50%'
          }
        }
      : {}),
    [theme.breakpoints.down('sm')]: {
      padding: '1rem'
    }
  }
})

const Logo = styled('img')(props => {
  const { theme } = props

  return {
    flexShrink: 0,
    maxWidth: '400px',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '300px',
      marginBottom: '1rem'
    }
  }
})

const Title = styled(Typography)(props => {
  const { theme } = props

  return {
    margin: 0,
    color: '#fff',
    fontSize: '28px',
    textTransform: 'uppercase',
    fontWeight: 800,

    [theme.breakpoints.down('sm')]: {
      fontSize: '24px'
    }
  }
})

const Text = styled(Box)(props => {
  const { theme } = props

  return {
    color: neutral.white,
    fontSize: '19px',
    '& p': {
      margin: 0,
      padding: 0
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px'
    }
  }
})

const ButtonContainer = styled(Box)({
  display: 'flex',
  marginTop: '1rem'
})

const Button = styled(MuiButton)({
  textTransform: 'uppercase',
  minWidth: '300px'
})

export { LoadingContainer, BannerContainer, Content, ContentWrapper, Logo, Title, Text, ButtonContainer, Button }
