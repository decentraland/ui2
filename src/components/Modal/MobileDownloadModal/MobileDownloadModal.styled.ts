import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'

const ModalContent = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  padding: '16px 24px 32px',
  flex: 1
})

const ModalImageContainer = styled(Box)({
  marginBottom: 16,
  width: '100%',
  '& svg': {
    maxWidth: '100%',
    height: 'auto',
    display: 'block',
    margin: '0 auto'
  }
})

const ModalTitle = styled(Typography)({
  fontFamily: 'Inter, sans-serif',
  fontSize: 22,
  fontWeight: 700,
  fontStyle: 'normal',
  lineHeight: 1.3,
  letterSpacing: '-0.02em',
  textAlign: 'center',
  marginBottom: 12,
  color: 'var(--text-primary)'
})

const ModalDescription = styled(Typography)({
  fontFamily: 'Inter, sans-serif',
  fontSize: 18,
  fontWeight: 400,
  fontStyle: 'normal',
  lineHeight: 1,
  letterSpacing: '-0.02em',
  textAlign: 'center',
  marginBottom: 25,
  color: 'var(--text-secondary)'
})

const ModalImage = styled('img')({
  maxWidth: 226,
  maxHeight: 160,
  width: 'auto',
  height: 'auto',
  display: 'block',
  margin: '0 auto'
})

export { ModalContent, ModalImage, ModalImageContainer, ModalTitle, ModalDescription }
