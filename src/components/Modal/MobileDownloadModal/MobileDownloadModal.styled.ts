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
  fontSize: '21px',
  fontWeight: 600,
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 1.43,
  letterSpacing: '0.3px',
  textAlign: 'center',
  marginBottom: theme.spacing(2),
  color: theme.palette.text.primary
}))

const ModalDescription = styled(Typography)(({ theme }) => ({
  fontSize: '17px',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 1.53,
  letterSpacing: '-0.2px',
  textAlign: 'center',
  marginBottom: theme.spacing(3),
  color: theme.palette.text.secondary
}))

export { ModalContent, ModalImageContainer, ModalTitle, ModalDescription }
