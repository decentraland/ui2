import { Box, IconButton as MuiIconButton, styled } from '@mui/material'

const StoryContainer = styled(Box)({
  maxWidth: 500
})

const StoryColumn = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  maxWidth: 500
}))

const StoryGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
  gap: theme.spacing(3)
}))

const ActionIconButton = styled(MuiIconButton)(({ theme }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.spacing(1),
  width: 30,
  height: 30,
  color: theme.palette.text.primary
}))

export { ActionIconButton, StoryColumn, StoryContainer, StoryGrid }
