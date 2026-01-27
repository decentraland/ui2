import { styled } from '@mui/material/styles'
import { Box, Button, Link, Typography } from '@mui/material'

const StyledContainer = styled(Box)({
  display: 'inline-flex',
  flexWrap: 'nowrap',
  position: 'relative',
  alignItems: 'center'
})

const StyledPosition = styled(Typography)<{ compact?: boolean }>(({ compact, theme }) => ({
  padding: '4px 8px 4px 5px',
  borderRadius: '6px',
  backgroundColor: theme.palette.secondary.main,
  marginRight: '2px',
  marginBottom: '0!important',
  display: 'flex',
  flexWrap: 'nowrap',
  alignItems: 'center',
  height: '24px',
  gap: '4px',

  ...(compact && {
    display: 'none',
    position: 'absolute',
    top: 0,
    right: '100%',
    zIndex: 1000,
    [`${StyledContainer}:hover &`]: {
      display: 'flex'
    }
  }),

  '& .MuiTypography-root': {
    fontSize: '13px',
    fontWeight: 500,
    lineHeight: '16px',
    color: '#736e7d'
  }
}))

const StyledIcon = styled(Box)(({ theme }) => ({
  padding: '4px',
  borderRadius: '6px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.primary.main,
  width: '24px',
  height: '24px'
}))

const StyledJumpInButton = styled(Button)({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '46px',
  gap: '8px',
  padding: '0 16px',

  // This custom class selector is for increasing specificity to override the default font size and weight
  '&&.MuiButton-sizeSmall.MuiButton-containedPrimary': {
    fontSize: '13px',
    fontWeight: 600
  },

  '& > .MuiTypography-root': {
    display: 'flex',
    alignItems: 'center'
  },

  '& .MuiSvgIcon-root': {
    display: 'block',
    padding: 0,
    margin: 0
  },

  '&.loading img': {
    display: 'none'
  }
})

const StyledJumpInLink = styled(Link)({
  display: 'inline-flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: 'inherit',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'none'
  }
})

const LocationIconContainer = styled(Box)(({ theme }) => ({
  fontSize: '16px',
  color: 'red',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& path:last-child': {
    fill: theme.palette.text.secondary
  }
}))

export { StyledContainer, StyledPosition, StyledIcon, StyledJumpInButton, StyledJumpInLink, LocationIconContainer }
