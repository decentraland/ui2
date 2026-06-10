import styled from '@emotion/styled'
import { Button, MenuItem } from '@mui/material'

const LanguageButton = styled(Button)(({ theme }) => ({
  minWidth: 'auto',
  padding: theme.spacing(0.5, 1),
  color: theme.palette.text.secondary,
  fontSize: theme.typography.body2.fontSize,
  textTransform: 'none',
  fontWeight: 'normal',

  '&:hover': {
    backgroundColor: 'transparent',
    color: theme.palette.primary.main
  }
}))

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  fontSize: theme.typography.body2.fontSize,
  minHeight: 'auto',
  padding: theme.spacing(1, 2)
}))

const FlagIcon = styled('span')({
  marginRight: 8,
  display: 'inline-flex',
  alignItems: 'center'
})

export { LanguageButton, StyledMenuItem, FlagIcon }
