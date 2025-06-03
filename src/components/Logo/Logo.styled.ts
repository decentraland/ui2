import styled from "@emotion/styled"
import { SvgIcon } from "@mui/material"

const LogoContainer = styled(SvgIcon)(({ theme }) => ({
  fontSize: "36px",
  [theme.breakpoints.down("xs")]: {
    fontSize: "32px",
  },
}))

export { LogoContainer }
