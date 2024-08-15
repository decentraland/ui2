import styled from "@emotion/styled"
import { useTheme } from "@mui/material"

const StyledAddress = styled("span")(() => {
  const theme = useTheme()

  return {
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily,
  }
})

export { StyledAddress }
