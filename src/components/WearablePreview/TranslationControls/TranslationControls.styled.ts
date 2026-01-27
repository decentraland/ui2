import styled from '@emotion/styled'
import { Box, Slider } from '@mui/material'
import { HorizontalPosition, VerticalPosition } from './TranslationControls.types'

const StyledTranslationControlsContainer = styled(Box)<{
  horizontalPosition?: HorizontalPosition
  verticalPosition?: VerticalPosition
}>(({ horizontalPosition = HorizontalPosition.CENTER, verticalPosition = VerticalPosition.RIGHT }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  ...(horizontalPosition === HorizontalPosition.TOP
    ? { justifyContent: 'flex-start' }
    : horizontalPosition === HorizontalPosition.BOTTOM
      ? { justifyContent: 'flex-end' }
      : { justifyContent: 'center' }),
  ...(verticalPosition === VerticalPosition.RIGHT ? { justifyContent: 'flex-end' } : { justifyContent: 'flex-start' }),
  pointerEvents: 'none',
  '& > *': {
    pointerEvents: 'auto'
  }
}))

const StyledVerticalSliderContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column'
})

const StyledIconWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  color: '#736e7d'
})

const StyledSlider = styled(Slider)(({ theme }) => ({
  height: 256,
  color: '#736e7d',
  '& .MuiSlider-rail': {
    width: 2,
    opacity: 1,
    backgroundColor: '#000000',
    paddingBottom: theme.spacing(4)
  },
  '& .MuiSlider-track': {
    width: 2,
    border: 'none',
    backgroundColor: '#000000'
  },
  '& .MuiSlider-thumb': {
    height: 32,
    width: 8,
    borderRadius: 4,
    backgroundColor: '#736e7d',
    translate: '0px 16px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.16), inset 0px 1px 0px rgba(255, 255, 255, 0.16)',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.16), inset 0px 1px 0px rgba(255, 255, 255, 0.16)'
    },
    '&::before': {
      display: 'none'
    }
  }
}))

export { StyledIconWrapper, StyledSlider, StyledTranslationControlsContainer, StyledVerticalSliderContainer }
