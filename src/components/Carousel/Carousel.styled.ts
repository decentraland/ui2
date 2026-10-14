import styled from '@emotion/styled'
import { Box } from '@mui/material'
import { neutral } from '../../theme/colors'

const CarouselWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
  paddingTop: theme.spacing(3),

  '&:hover .carousel-nav': {
    opacity: 1
  }
}))

const CarouselTrack = styled('div')({
  display: 'flex',
  alignItems: 'stretch',
  willChange: 'transform',
  cursor: 'grab',
  userSelect: 'none',

  '&:active': {
    cursor: 'grabbing'
  }
})

const CarouselSlide = styled('div')(({ theme }) => ({
  flexShrink: 0,
  borderRadius: 16,
  overflow: 'hidden',
  opacity: 0,
  transform: 'scale(0.8)',
  transition: 'opacity 0.4s ease, box-shadow 0.4s ease, transform 0.4s ease',

  '&.active': {
    opacity: 1,
    transform: 'scale(1)',
    boxShadow: '0px 2px 8px 8px rgba(255, 255, 255, 0.15)'
  },

  '&.prev': {
    opacity: 0.7,
    maskImage: 'linear-gradient(to right, transparent 0%, black 50%)',

    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 50%)',
    [theme.breakpoints.down('sm')]: {
      maskImage: 'none',

      WebkitMaskImage: 'none'
    }
  },

  '&.next': {
    opacity: 0.7,
    maskImage: 'linear-gradient(to right, black 50%, transparent 100%)',

    WebkitMaskImage: 'linear-gradient(to right, black 50%, transparent 100%)',
    [theme.breakpoints.down('sm')]: {
      maskImage: 'none',

      WebkitMaskImage: 'none'
    }
  },
  [theme.breakpoints.down('sm')]: {
    opacity: 1,
    transform: 'scale(1)',

    '& > *': {
      width: '100%',
      minWidth: 0
    },

    '&.active': {
      boxShadow: 'none'
    }
  }
}))

const CarouselDots = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  gap: 8,
  paddingTop: 24,
  position: 'relative',
  zIndex: 3
})

const CarouselDot = styled('button')({
  width: 8,
  height: 8,
  borderRadius: '50%',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  backgroundColor: 'rgba(255, 255, 255, 0.4)',
  transition: 'background-color 0.3s ease',

  '&.active': {
    backgroundColor: neutral.white
  }
})

const NavButton = styled('button')(({ theme }) => ({
  position: 'absolute',
  top: '45%',
  transform: 'translateY(-50%)',
  zIndex: 10,
  width: 48,
  height: 48,
  borderRadius: '50%',
  border: '2px solid rgba(255, 255, 255, 0.5)',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  color: neutral.white,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: 0,
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.short
  }),

  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  },
  fontSize: 24,

  '@media (max-width: 991px)': {
    display: 'none'
  }
}))

const NavButtonPrev = styled(NavButton)(({ theme }) => ({
  left: theme.spacing(3)
}))

const NavButtonNext = styled(NavButton)(({ theme }) => ({
  right: theme.spacing(3)
}))

export { CarouselDot, CarouselDots, CarouselSlide, CarouselTrack, CarouselWrapper, NavButtonNext, NavButtonPrev }
