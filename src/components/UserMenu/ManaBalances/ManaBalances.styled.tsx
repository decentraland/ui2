import styled from "@emotion/styled"
import { Typography } from "@mui/material"

const ManaBalancesWrapper = styled("div")((props) => {
  const { theme } = props
  return {
    display: "flex",
    "& svg": {
      fontSize: theme!.typography.subtitle2.fontSize,
    },
  }
})

const ManaBalanceNumber = styled(Typography)({
  lineHeight: "inherit",
})

export { ManaBalancesWrapper, ManaBalanceNumber }
