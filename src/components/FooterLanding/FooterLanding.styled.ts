import { Box, Button, Link, Typography, styled } from '@mui/material'

const FooterContainer = styled('footer')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: theme.palette.background.default,
  zIndex: 11,
  height: '475px',
  position: 'relative',
  paddingTop: theme.spacing(12),
  paddingLeft: theme.spacing(20),
  paddingRight: theme.spacing(20),
  [theme.breakpoints.down('xl')]: {
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10)
  },
  [theme.breakpoints.down('md')]: {
    paddingLeft: theme.spacing(6.75),
    paddingRight: theme.spacing(6.75)
  },
  [theme.breakpoints.down('xs')]: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    height: '630px'
  }
}))

const LinksContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '710px',
  justifyContent: 'space-around',

  [theme.breakpoints.down('xs')]: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    width: '100%'
  }
}))

const LinksWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column'
})

const LinksTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textTransform: 'uppercase',
  marginBottom: theme.spacing(2),
  marginLeft: theme.spacing(0.625),
  fontWeight: 500
}))

const IconButton = styled(Button)(({ theme }) => ({
  cursor: 'pointer',
  justifyContent: 'flex-start',
  marginBottom: theme.spacing(0.5),
  '&.MuiButton-sizeMedium.MuiButton-textSecondary:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)': {
    color: theme.palette.text.primary,
    textTransform: 'capitalize',
    '& .MuiButton-startIcon svg.MuiSvgIcon-root': {
      color: theme.palette.text.secondary
    }
  },
  '&.MuiButton-sizeMedium.MuiButton-textSecondary:not(.Mui-disabled):not(.Mui-focusVisible):hover': {
    textTransform: 'capitalize'
  },
  '&:hover': {
    backgroundColor: 'transparent'
  },
  [theme.breakpoints.down('xs')]: {
    '&.MuiButton-sizeMedium.MuiButton-textSecondary:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)': {
      fontSize: '24px',
      fontWeight: 700,
      lineHeight: '32px',
      '& .MuiButton-startIcon svg.MuiSvgIcon-root': {
        fontSize: '24px'
      }
    }
  }
}))

const SubscribeContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '470px',
  [theme.breakpoints.down('xs')]: {
    width: '100%',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    alignItems: 'center'
  }
}))

const SubscribeSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.disabled,
  [theme.breakpoints.down('md')]: {
    fontSize: '1.25rem'
  },
  [theme.breakpoints.down('xs')]: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    fontSize: '1.5rem'
  }
}))

const SubscribeTitle = styled(Typography)(({ theme }) => ({
  color: '#fff',
  marginBottom: theme.spacing(2),
  fontFamily: 'DecentralandHero',
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem'
  },
  [theme.breakpoints.down('xs')]: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    marginBottom: theme.spacing(3),
    fontSize: '2.5rem'
  }
}))

const SubscriptionBeehiiv = styled('iframe')({
  width: '100%',
  border: 'none',
  height: '125px'
})

const SocialContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginBottom: theme.spacing(2),
  width: '100%',
  [theme.breakpoints.down('xs')]: {
    display: 'none'
  }
}))

const SocialIconWrapper = styled(Box)({
  display: 'flex',
  width: '80%',
  justifyContent: 'space-between'
})

const SocialIconBox = styled(Link)({
  cursor: 'pointer',
  fontSize: '32px',
  color: '#fff',
  '&:hover': {
    color: '#fff'
  }
})

export {
  FooterContainer,
  LinksContainer,
  LinksWrapper,
  LinksTitle,
  IconButton,
  SubscribeContainer,
  SubscribeSubtitle,
  SubscribeTitle,
  SubscriptionBeehiiv,
  SocialContainer,
  SocialIconWrapper,
  SocialIconBox
}
