import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { Box, Button as MuiButton, Switch as MuiSwitch } from '@mui/material'

// TODO: Add credits color (#a0abff) to theme palette
const CREDITS_COLOR = '#a0abff'
const CREDITS_COLOR_TRANSPARENT = 'rgba(160, 171, 255, 0.15)'

const moveGradient = keyframes({
  '0%': {
    backgroundPosition: '300% 0%'
  },
  '100%': {
    backgroundPosition: '0% 0%'
  }
})

const Container = styled(Box)<{ active?: boolean; showLearnMore?: boolean }>(({ theme, active, showLearnMore }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: `${theme.spacing(0.5)} ${theme.spacing(2.25)}`,
  paddingLeft: theme.spacing(0.5),
  borderRadius: theme.spacing(1),
  border: '1px solid',
  borderColor: active ? CREDITS_COLOR : CREDITS_COLOR_TRANSPARENT,
  transition: 'all 0.2s ease',
  marginBottom: theme.spacing(2),
  position: 'relative',
  gap: showLearnMore ? theme.spacing(1.5) : 0,
  ...(active
    ? {}
    : {
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: '-2px',
          borderRadius: theme.spacing(1.25),
          background: `linear-gradient(90deg, transparent, transparent, ${CREDITS_COLOR}, ${CREDITS_COLOR}, transparent, transparent)`,
          backgroundSize: '300% 100%',
          animation: `${moveGradient} 6s linear infinite`,
          WebkitMask: `
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0)
          `,
          WebkitMaskComposite: 'xor',
          mask: `
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0)
          `,
          maskComposite: 'exclude',
          padding: '2px',
          pointerEvents: 'none',
          zIndex: 1
        }
      })
}))

const LeftSection = styled(Box)<{ active?: boolean }>(({ theme, active }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  paddingLeft: theme.spacing(1.5),
  '& .MuiSwitch-root.MuiSwitch-sizeMedium': {
    marginLeft: theme.spacing(-1.5)
  },
  ...(active && {
    '& .MuiSwitch-thumb': {
      backgroundColor: `${CREDITS_COLOR} !important`
    },
    '& .Mui-checked + .MuiSwitch-track': {
      backgroundColor: `${CREDITS_COLOR} !important`
    }
  })
}))

const StyledText = styled('span')<{ active?: boolean }>(({ theme, active }) => ({
  fontSize: '15px',
  fontWeight: 500,
  color: active ? CREDITS_COLOR : theme.palette.text.primary,
  transition: 'color 0.2s ease'
}))

const StyledAmount = styled('span')<{ active?: boolean }>(({ theme, active }) => ({
  fontSize: '15px',
  color: active ? CREDITS_COLOR : theme.palette.text.primary,
  transition: 'color 0.2s ease'
}))

const StyledNumber = styled('span')({
  fontWeight: 600,
  color: CREDITS_COLOR,
  cursor: 'pointer',
  transition: 'color 0.2s ease'
})

const PopupContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5)
}))

const AnimationContainer = styled(Box)<{ show: boolean }>(({ show }) => ({
  position: 'absolute',
  left: '-175px',
  bottom: '-200px',
  width: '500px',
  height: '500px',
  opacity: show ? 1 : 0,
  pointerEvents: 'none'
}))

const LearnMoreButton = styled(MuiButton)(({ theme }) => ({
  color: theme.palette.primary.main,
  textTransform: 'uppercase'
}))

const StyledSwitch = styled(MuiSwitch)({
  '& .MuiSwitch-switchBase': {
    '&:hover': {
      backgroundColor: 'transparent'
    }
  }
})

export { AnimationContainer, Container, LeftSection, LearnMoreButton, PopupContainer, StyledAmount, StyledNumber, StyledSwitch, StyledText }
