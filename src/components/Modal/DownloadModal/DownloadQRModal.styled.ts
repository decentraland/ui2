import styled from '@emotion/styled'
import { Box } from '@mui/material'

const QRContainer = styled(Box)({
  position: 'relative',
  width: 263,
  height: 263,
  flexShrink: 0,
  backgroundColor: 'white',
  borderRadius: 16,
  padding: 12,
  boxSizing: 'content-box'
})

const QRImage = styled('img')({
  width: '100%',
  height: '100%',
  borderRadius: 8,
  objectFit: 'cover',
  display: 'block'
})

const QRLogo = styled('img')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 69,
  height: 69,
  borderRadius: 50,
  border: '4px solid white',
  backgroundColor: 'white',
  objectFit: 'cover'
})

export { QRContainer, QRImage, QRLogo }
