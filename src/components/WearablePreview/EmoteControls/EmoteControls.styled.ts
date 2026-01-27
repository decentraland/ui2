import styled from '@emotion/styled'
import { Box } from '@mui/material'
import { Button } from '../../Button'

const StyledEmoteControlsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  position: 'absolute',
  width: '100%',
  bottom: 0,
  margin: `${theme.spacing(2)} 0`,
  padding: `0 ${theme.spacing(3)}`,
  gap: theme.spacing(2)
}))

const StyledPlayButton = styled(Button)(({ theme }) => ({
  width: 56,
  height: 44,
  padding: 0,
  minWidth: 'unset',
  background: 'rgba(0, 0, 0, 0.64) !important',
  '& svg': {
    marginLeft: theme.spacing(0.5)
  }
}))

const StyledSoundButton = styled(Button)<{ muted?: boolean }>(({ theme, muted }) => ({
  marginLeft: theme.spacing(2.5),
  minWidth: 25,
  background: 'none',
  padding: 0,
  opacity: muted ? 0.5 : 1
}))

const StyledRangeInput = styled('input')(({ theme }) => ({
  flex: 1,
  width: '100%',
  background: 'none',
  WebkitAppearance: 'none',
  '&:focus': {
    outline: 'none'
  },
  '&::-webkit-slider-thumb': {
    WebkitAppearance: 'none',
    width: 24,
    height: 24,
    borderRadius: 10,
    backgroundColor: '#736e7d',
    overflow: 'visible',
    cursor: 'pointer',
    paddingBottom: theme.spacing(0.625),
    marginTop: theme.spacing(-0.5)
  },
  '&::-moz-range-thumb': {
    width: 24,
    height: 24,
    borderRadius: 20,
    backgroundColor: '#736e7d',
    overflow: 'visible',
    cursor: 'pointer',
    border: 'none'
  },
  '&::-ms-thumb': {
    width: 24,
    height: 24,
    borderRadius: 20,
    backgroundColor: '#736e7d',
    overflow: 'visible',
    cursor: 'pointer'
  },
  '&::-webkit-slider-runnable-track': {
    width: 300,
    height: 15,
    background: 'rgba(115, 110, 125, 0.32)',
    border: 'none',
    borderRadius: 10
  },
  '&::-moz-range-track': {
    width: '100%',
    height: 15,
    borderRadius: 10,
    cursor: 'pointer',
    background: 'rgba(115, 110, 125, 0.32)'
  }
}))

const StyledFrameControl = styled('div')({
  display: 'flex',
  alignItems: 'center'
})

const StyledFrameInput = styled('input')({
  width: 56,
  height: 44,
  borderRadius: 5,
  background: 'transparent',
  border: '1px solid rgba(115, 110, 125, 0.4)',
  color: 'white',
  textAlign: 'center',
  '&:focus-visible': {
    outline: '1px solid'
  }
})

export { StyledEmoteControlsContainer, StyledPlayButton, StyledSoundButton, StyledRangeInput, StyledFrameControl, StyledFrameInput }
