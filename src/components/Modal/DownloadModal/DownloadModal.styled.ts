import styled from '@emotion/styled'
import { Box, IconButton, Modal as MuiModal } from '@mui/material'

const MODAL_GRADIENT =
  'radial-gradient(ellipse at 50% 77%, rgba(116,52,177,1) 0%, rgba(94,40,143,1) 19%, rgba(72,28,108,1) 37%, rgba(43,16,64,1) 100%)'

const StyledModal = styled(MuiModal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

const ModalContainer = styled(Box, {
  shouldForwardProp: prop => prop !== 'mobile'
})<{ mobile?: boolean }>(({ theme, mobile }) => ({
  width: mobile ? 358 : 595,
  background: MODAL_GRADIENT,
  borderRadius: 16,
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 48,
  padding: mobile ? '48px 24px' : '48px 105px',
  outline: 'none',
  [theme.breakpoints.down('sm')]: {
    width: '100vw',
    minHeight: '100vh',
    borderRadius: 0,
    padding: 24
  }
}))

const CloseButton = styled(IconButton)({
  position: 'absolute',
  top: 18,
  right: 18,
  color: 'white',
  padding: 8,
  '&:hover': {
    backgroundColor: 'rgba(255,255,255,0.1)'
  },
  '& svg': {
    width: 24,
    height: 24
  }
})

const ModalTitle = styled('h2')({
  fontSize: 24,
  fontWeight: 700,
  textAlign: 'center',
  margin: '0 -14px',
  lineHeight: 1.334,
  color: 'white',
  fontFamily: 'Inter, sans-serif'
})

const DownloadSection = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 24,
  width: '100%'
})

const PrimaryButton = styled('a')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 16,
  width: '100%',
  height: 64,
  backgroundColor: '#FF2D55',
  borderRadius: 16,
  border: 'none',
  cursor: 'pointer',
  textDecoration: 'none',
  fontFamily: 'Inter, sans-serif',
  fontWeight: 600,
  fontSize: '19.89px',
  color: '#FCFCFC',
  textTransform: 'uppercase',
  letterSpacing: '0.61px',
  boxSizing: 'border-box',
  '&:hover': {
    opacity: 0.9
  }
})

const EpicButton = styled('a')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 24,
  width: '100%',
  height: 64,
  backgroundColor: 'white',
  border: '3px solid white',
  borderRadius: 16,
  cursor: 'pointer',
  textDecoration: 'none',
  fontFamily: 'Inter, sans-serif',
  fontWeight: 600,
  fontSize: '19.89px',
  color: '#242129',
  textTransform: 'uppercase',
  letterSpacing: '0.61px',
  boxSizing: 'border-box',
  '&:hover': {
    opacity: 0.9
  }
})

const StatsRow = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 16,
  flexWrap: 'wrap',
  justifyContent: 'center'
})

const StatItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  color: 'white',
  fontFamily: 'Inter, sans-serif',
  fontSize: 16,
  fontWeight: 400
})

const StatDivider = styled(Box)({
  width: 1,
  height: 20,
  backgroundColor: 'rgba(255,255,255,0.5)',
  flexShrink: 0
})

const DividerRow = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 21,
  width: '100%',
  padding: '12px 0'
})

const DividerLine = styled(Box)({
  flex: 1,
  height: 1,
  backgroundColor: 'rgba(255,255,255,1)'
})

const DividerText = styled('span')({
  fontFamily: 'Inter, sans-serif',
  fontSize: 16,
  fontWeight: 400,
  color: 'white',
  whiteSpace: 'nowrap'
})

const StoreBadge = styled('a')({
  display: 'block',
  '& img': {
    height: 61,
    width: 'auto'
  },
  '&:hover': {
    opacity: 0.9
  }
})

const PlatformLink = styled('a')({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  color: '#ECEBED',
  fontFamily: 'Inter, sans-serif',
  fontSize: 16,
  fontWeight: 400,
  textDecoration: 'none',
  cursor: 'pointer',
  '&:hover': {
    opacity: 0.8
  }
})

const StoreBadgesRow = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 22,
  justifyContent: 'center'
})

const MobileCta = styled('a')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: 64,
  backgroundColor: '#FF2D55',
  borderRadius: 12,
  cursor: 'pointer',
  textDecoration: 'none',
  padding: '12px 20px',
  boxSizing: 'border-box',
  '& img': {
    height: 40,
    width: 'auto'
  },
  '&:hover': {
    opacity: 0.9
  }
})

export {
  CloseButton,
  DividerLine,
  DividerRow,
  DividerText,
  DownloadSection,
  EpicButton,
  MobileCta,
  ModalContainer,
  ModalTitle,
  PlatformLink,
  PrimaryButton,
  StatDivider,
  StatItem,
  StatsRow,
  StoreBadge,
  StoreBadgesRow,
  StyledModal
}
