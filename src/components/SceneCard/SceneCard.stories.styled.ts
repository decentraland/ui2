import { Box, Typography, styled } from '@mui/material'

const StoryGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: theme.spacing(3),
  width: '100%',
  alignItems: 'flex-start'
}))

const StoryGrid3Cols = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: theme.spacing(3),
  width: '100%',
  alignItems: 'flex-start'
}))

const StoryGrid3ColsPadded = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: theme.spacing(3),
  width: '100%',
  alignItems: 'flex-start',
  padding: theme.spacing(2)
}))

const StoryGrid2ColsPadded = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: theme.spacing(4),
  width: '100%',
  alignItems: 'flex-start',
  padding: theme.spacing(3)
}))

const StoryFlexWrap = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  flexWrap: 'wrap',
  alignItems: 'flex-start'
}))

const RatingBadgeContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5)
}))

const NewLabel = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  fontSize: 10
}))

export {
  NewLabel,
  RatingBadgeContent,
  StoryFlexWrap,
  StoryGrid,
  StoryGrid2ColsPadded,
  StoryGrid3Cols,
  StoryGrid3ColsPadded
}
