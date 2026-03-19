import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'

const ModalContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  padding: theme.spacing(2)
}))

const ModalImageContainer = styled(Box)({
  marginBottom: '24px',
  width: '100%',
  '& svg': {
    maxWidth: '100%',
    height: 'auto',
    display: 'block',
    margin: '0 auto'
  }
})

const ModalTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Inter, sans-serif',
  fontSize: 22,
  fontWeight: 700,
  fontStyle: 'normal',
  lineHeight: 1,
  letterSpacing: '-0.02em',
  textAlign: 'center',
  marginBottom: theme.spacing(2),
  color: theme.palette.text.primary
}))

const ModalDescription = styled(Typography)(({ theme }) => ({
  fontFamily: 'Inter, sans-serif',
  fontSize: 18,
  fontWeight: 400,
  fontStyle: 'normal',
  lineHeight: 1,
  letterSpacing: '-0.02em',
  textAlign: 'center',
  marginBottom: theme.spacing(3),
  color: '#1E1E1E'
}))

export { ModalContent, ModalImageContainer, ModalTitle, ModalDescription }
