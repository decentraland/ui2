import styled from '@emotion/styled'
import * as colors from '../../theme/colors'

const CreditsBalanceButton = styled('button')({
  all: 'unset',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  cursor: 'pointer',
  color: '#A0ABFF',
  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
  fontWeight: 600,
  fontSize: 16,
  letterSpacing: -0.8,
  flexShrink: 0,
  transition: 'opacity 0.15s ease',
  '&:hover': {
    opacity: 0.8
  },
  '&:hover .credits-tooltip': {
    opacity: 1,
    pointerEvents: 'auto'
  },
  '&:focus-visible': {
    outline: `2px solid ${colors.base.primary}`,
    outlineOffset: 2,
    borderRadius: 4
  },
  '& svg': {
    width: 20,
    height: 20,
    flexShrink: 0
  }
})

const CreditsTooltip = styled('div')({
  position: 'absolute',
  top: 'calc(100% + 4px)',
  left: '50%',
  transform: 'translateX(-50%)',
  background: '#43404A',
  padding: 8,
  borderRadius: 8,
  boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
  fontWeight: 400,
  fontSize: 12,
  lineHeight: 1.4,
  color: '#ECEBED',
  whiteSpace: 'normal',
  textAlign: 'center',
  minWidth: 140,
  opacity: 0,
  pointerEvents: 'none',
  transition: 'opacity 0.15s ease',
  zIndex: 10
})

export { CreditsBalanceButton, CreditsTooltip }
