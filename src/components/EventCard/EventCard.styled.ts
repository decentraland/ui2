import { Box, Card, CardActionArea, CardContent, CardMedia, Chip, Link, Skeleton, keyframes, styled } from '@mui/material'
import { hexToRgba } from '../../utils/colors'

const coinFlip = keyframes({
  '0%': { transform: 'perspective(800px) rotateX(0deg) rotateY(0deg)' },
  '15%': { transform: 'perspective(800px) rotateX(5deg) rotateY(1deg)' },
  '30%': { transform: 'perspective(800px) rotateX(4deg) rotateY(3deg)' },
  '50%': { transform: 'perspective(800px) rotateX(0deg) rotateY(5deg)' },
  '70%': { transform: 'perspective(800px) rotateX(-4deg) rotateY(3deg)' },
  '85%': { transform: 'perspective(800px) rotateX(-2deg) rotateY(1deg)' },
  '100%': { transform: 'perspective(800px) rotateX(0deg) rotateY(0deg)' }
})

const EventCardContainer = styled(Card)<{
  withShadow?: boolean
}>(({ theme, withShadow }) => ({
  borderRadius: theme.spacing(2),
  boxSizing: 'border-box',
  minWidth: 400,
  maxWidth: 850,
  flex: 1,
  backgroundColor: 'transparent',
  position: 'relative',
  overflow: 'hidden',
  transition: [
    theme.transitions.create('transform', {
      duration: theme.transitions.duration.complex
    }),
    theme.transitions.create('box-shadow', {
      duration: theme.transitions.duration.complex
    })
  ],

  [theme.breakpoints.up('sm')]: {
    '&:hover': {
      boxShadow: withShadow ? `0px 0px 20px 6px ${hexToRgba('#DD56FF', 0.37)}` : 'none',
      animation: `${coinFlip} 0.8s ease-in-out`,

      transition: [
        theme.transitions.create('transform', {
          duration: theme.transitions.duration.complex
        }),
        theme.transitions.create('box-shadow', {
          duration: theme.transitions.duration.complex
        })
      ].join(', ')
    }
  }
}))

const EventCardActionArea = styled(CardActionArea)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  height: 460,
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  backgroundColor: 'transparent',
  '&:hover .MuiCardActionArea-focusHighlight': {
    opacity: 0
  },
  [theme.breakpoints.down('sm')]: {
    height: 'auto'
  }
}))

const EventMediaContainer = styled(Box)({
  position: 'relative',
  width: '100%',
  overflow: 'hidden'
})

const EventCardMedia = styled(CardMedia)<{ imageHeight?: number; hoverHeight?: number }>(
  ({ theme, imageHeight = 329, hoverHeight = 271 }) => ({
    height: imageHeight,
    width: '100%',
    borderRadius: `${theme.spacing(2)} ${theme.spacing(2)} 0 0`,
    backgroundSize: 'cover',
    [theme.breakpoints.up('sm')]: {
      transition: theme.transitions.create('height', {
        duration: theme.transitions.duration.complex
      }),
      '.MuiCardActionArea-root:hover &': {
        height: hoverHeight
      }
    }
  })
)

const EventCardContent = styled(CardContent)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.4)',
  borderRadius: `0 0 ${theme.spacing(2)} ${theme.spacing(2)}`,
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  width: '100%',
  padding: theme.spacing(2),
  '&:last-child': {
    paddingBottom: theme.spacing(2)
  }
}))

const BadgesContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  left: theme.spacing(2),
  right: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(1),
  zIndex: 10,
  pointerEvents: 'none',
  '& > *': {
    pointerEvents: 'auto'
  }
}))

const LeftBadge = styled(Box)<{ transparent?: boolean }>(({ theme, transparent }) => ({
  ...(!transparent && {
    padding: theme.spacing(1, 1),
    minWidth: theme.spacing(4),
    height: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
    borderRadius: theme.spacing(1),
    fontSize: theme.typography.subtitle1.fontSize,
    fontWeight: theme.typography.fontWeightBold
  }),
  maxWidth: '45%',
  color: theme.palette.text.primary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  '& > *': {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    minWidth: 0,
    maxWidth: '100%'
  }
}))

const SceneTitle = styled(Box)({
  height: 71,
  '& .MuiTypography-root': {
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    wordBreak: 'break-word'
  }
})

const ContentContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  gap: theme.spacing(1)
}))

const AvatarContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  alignItems: 'center',
  flex: '1 1 auto',
  maxWidth: '50%',
  overflow: 'hidden',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%'
  }
}))

const AvatarTextContainer = styled(Box)({
  flex: 1,
  minWidth: 0,
  overflow: 'hidden',
  '& .MuiTypography-root': {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }
})

const AvatarLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  fontWeight: theme.typography.fontWeightBold,
  '&:hover': {
    textDecoration: 'none'
  }
}))

const AvatarAndLocationRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  alignItems: 'center',
  justifyContent: 'space-between',
  flex: 1,
  minWidth: 0
}))

const LocationChipContainer = styled(Box)(({ theme }) => ({
  flex: '1 1 auto',
  minWidth: 0,
  maxWidth: '50%',
  display: 'flex',
  justifyContent: 'flex-end',
  opacity: 0,
  height: 0,
  overflow: 'hidden',
  transform: 'translateX(20px)',
  transition: [
    theme.transitions.create('opacity', {
      duration: theme.transitions.duration.complex
    }),
    theme.transitions.create('height', {
      duration: theme.transitions.duration.complex
    }),
    theme.transitions.create('transform', {
      duration: theme.transitions.duration.complex
    })
  ].join(', '),
  '.MuiCardActionArea-root:hover &': {
    opacity: 1,
    height: 'auto',
    transform: 'translateX(0)'
  },
  [theme.breakpoints.down('xs')]: {
    display: 'none'
  }
}))

const LocationChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.4)',
  color: theme.palette.text.primary,
  cursor: 'pointer',
  borderRadius: theme.spacing(1),
  maxWidth: '100%',
  '& .MuiChip-label': {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  '& path:last-child': {
    fill: theme.palette.text.primary
  }
}))

const JumpInButtonContainer = styled(Box)(({ theme }) => ({
  marginTop: 'auto',
  opacity: 0,
  height: 0,
  overflow: 'hidden',
  transform: 'translateY(20px)',
  transition: [
    theme.transitions.create('opacity', {
      duration: theme.transitions.duration.complex
    }),
    theme.transitions.create('height', {
      duration: theme.transitions.duration.complex
    }),
    theme.transitions.create('transform', {
      duration: theme.transitions.duration.complex
    })
  ].join(', '),
  '.MuiCardActionArea-root:hover &': {
    opacity: 1,
    height: 'auto',
    transform: 'translateY(0)'
  },
  [theme.breakpoints.down('xs')]: {
    display: 'none'
  }
}))

const SceneInfoContainer = styled(Box)({
  width: '100%'
})

const JumpInButton = styled('button')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1),
  width: '100%',
  height: 46,
  border: 'none',
  borderRadius: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontSize: 16,
  fontWeight: theme.typography.fontWeightBold,
  textTransform: 'uppercase',
  cursor: 'pointer',
  '& svg': {
    width: 24,
    height: 24
  },
  '&:hover': {
    backgroundColor: theme.palette.primary.dark
  },
  '&:focus-visible': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: 2
  },
  '&:active': {
    backgroundColor: theme.palette.primary.dark
  }
}))

const SkeletonImage = styled(Skeleton)({
  height: 329,
  width: '100%',
  borderRadius: 0,
  transform: 'none'
})

const SkeletonTitle = styled(Skeleton)(({ theme }) => ({
  width: '60%',
  fontSize: '1.25rem',
  marginBottom: theme.spacing(6),
  borderRadius: theme.shape.borderRadius
}))

const SkeletonAvatar = styled(Skeleton)(({ theme }) => ({
  width: theme.spacing(4),
  height: theme.spacing(4),
  flexShrink: 0
}))

const SkeletonText = styled(Skeleton)(({ theme }) => ({
  height: 20,
  flex: 1,
  borderRadius: theme.shape.borderRadius
}))

export {
  AvatarAndLocationRow,
  AvatarContainer,
  AvatarLink,
  AvatarTextContainer,
  BadgesContainer,
  ContentContainer,
  EventCardActionArea,
  EventCardContainer,
  EventCardContent,
  EventCardMedia,
  EventMediaContainer,
  JumpInButton,
  JumpInButtonContainer,
  LeftBadge,
  LocationChip,
  LocationChipContainer,
  SceneInfoContainer,
  SceneTitle,
  SkeletonAvatar,
  SkeletonImage,
  SkeletonText,
  SkeletonTitle
}
