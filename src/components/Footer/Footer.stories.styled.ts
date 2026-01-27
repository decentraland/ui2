import styled from '@emotion/styled'
import { Box } from '@mui/material'

const FooterList = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2)
}))

export { FooterList }
