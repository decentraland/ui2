import styled from "@emotion/styled"
import { SvgIcon, useTheme } from "@mui/material"

const LogoContainer = styled(SvgIcon)(() => {
  const theme = useTheme()
  return {
    fontSize: "36px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "32px",
    },
  }
})

export { LogoContainer }
