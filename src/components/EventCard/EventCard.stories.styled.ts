import { Box, styled } from '@mui/material'

const StorySection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4),
  width: '100%'
}))

const StoryRow = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
  gap: theme.spacing(3),
  width: '100%'
}))

export { StoryRow, StorySection }
