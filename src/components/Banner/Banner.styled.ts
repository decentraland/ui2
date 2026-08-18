import styled from '@emotion/styled'
import { Box, Button as MuiButton, Typography } from '@mui/material'
import { neutral } from '../../theme/colors'

const LoadingContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%'
})

const BANNER_AREA = 'banner'

const BannerContainer = styled(Box, {
  shouldForwardProp: prop => prop !== 'background'
})<{
  background: string
}>(props => {
  const { background } = props

  return {
    width: '100%',
    overflow: 'hidden',
    // The sizer and the layout share a single grid area, so the row ends up as tall as the taller of
    // the two: never shorter than the artwork, never shorter than the content.
    display: 'grid',
    gridTemplateAreas: `"${BANNER_AREA}"`,
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
})

// The background is painted with `cover`, so a banner shorter than its artwork crops it. This gives the
// grid row a floor at the artwork's own ratio without ever clipping content that needs more room.
const BackgroundSizer = styled(Box, {
  shouldForwardProp: prop => prop !== 'aspectRatio'
})<{
  aspectRatio: number
}>(props => ({
  gridArea: BANNER_AREA,
  alignSelf: 'start',
  width: '100%',
  aspectRatio: `${props.aspectRatio}`,
  pointerEvents: 'none'
}))

const Layout = styled(Box)(props => {
  const { theme } = props

  return {
    gridArea: BANNER_AREA,
    display: 'flex',
    padding: '2rem',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
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

export { LoadingContainer, BannerContainer, BackgroundSizer, Layout, Content, ContentWrapper, Logo, Title, Text, ButtonContainer, Button }
