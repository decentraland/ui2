import { Box, Link, styled } from '@mui/material'

const UserLabelContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1)
}))

const UserLabelLink = styled(Link)({
  textDecoration: 'none',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  '&:hover': {
    textDecoration: 'none'
  }
})

export { UserLabelContainer, UserLabelLink }
