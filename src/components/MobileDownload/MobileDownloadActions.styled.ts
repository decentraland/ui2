import styled from '@emotion/styled'
import { Box, Button, Link } from '@mui/material'

const ActionsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  gap: theme.spacing(1)
}))

const GooglePlayButton = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  gap: theme.spacing(1),
  height: 64,
  width: '100%',
  borderRadius: 12,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontSize: 22,
  fontWeight: 700,
  boxShadow: theme.shadows[4],
  padding: '12px 20px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    textDecoration: 'none'
  },
  '& svg': {
    fontSize: 36
  }
}))

const GooglePlayButtonLabel = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  lineHeight: 1.2,
  '& span': {
    display: 'block',
    fontSize: 11,
    fontWeight: 400,
    lineHeight: 1
  }
})

const SendLinkButton = styled(Button)(({ theme }) => ({
  height: 46,
  width: '100%',
  borderRadius: 12,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  textTransform: 'uppercase',
  fontSize: theme.typography.pxToRem(15),
  fontWeight: 700,
  letterSpacing: '0.03em',
  boxShadow: theme.shadows[4],
  padding: '0 20px',
  gap: theme.spacing(1),
  '&:hover, &:active, &:focus': {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText
  }
}))

const ComingSoonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 46,
  gap: theme.spacing(1),
  color: theme.palette.text.primary,
  fontSize: 16,
  fontWeight: 500,
  lineHeight: 1,
  '& svg': {
    fontSize: 24,
    marginTop: -3
  }
}))

export { ActionsContainer, GooglePlayButton, GooglePlayButtonLabel, SendLinkButton, ComingSoonContainer }
