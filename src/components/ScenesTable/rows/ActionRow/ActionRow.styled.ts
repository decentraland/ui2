import { Box, styled } from '@mui/material'

const ActionRowContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  position: 'relative',
  width: '100%',
  minWidth: theme.spacing(16),
  '& .jump-in-button': {
    opacity: 0,
    visibility: 'hidden',
    position: 'absolute',
    right: 0,
    height: 40
  },
  'tr:hover & .jump-in-button': {
    opacity: 1,
    visibility: 'visible'
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 'auto',
    justifyContent: 'center',
    '& .jump-in-button': {
      display: 'none'
    }
  }
}))

const PositionChangeContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'fit-content',
  padding: theme.spacing(0.5),
  borderRadius: theme.spacing(1),
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  fontWeight: theme.typography.fontWeightBold,
  'tr:hover &': {
    opacity: 0
  },
  [theme.breakpoints.down('sm')]: {
    'tr:hover &': {
      opacity: 1
    }
  }
}))

const PositionContent = styled(Box)<{ isPositive: boolean }>(({ theme, isPositive }) => {
  const color = isPositive ? theme.palette.success.main : theme.palette.error.main

  return {
    display: 'flex',
    alignItems: 'center',
    color,
    fontSize: '12px',
    fontWeight: theme.typography.fontWeightBold,
    '& .MuiSvgIcon-root': {
      fill: color
    }
  }
})

export { ActionRowContainer, PositionChangeContainer, PositionContent }
