import styled from "@emotion/styled"
import { useTheme } from "@mui/material"

const ManaBalancesWrapper = styled("div")(() => {
  const theme = useTheme()
  return {
    display: "flex",
    "& svg": {
      fontSize: theme.typography.subtitle2.fontSize,
    },
  }
})

export { ManaBalancesWrapper }
