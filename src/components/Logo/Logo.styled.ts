import styled from "@emotion/styled"
import { SvgIcon } from "@mui/material"

const LogoContainer = styled(SvgIcon)(() => {
  return {
    fontSize: "36px",
    "@media (max-width: 768px)": {
      fontSize: "32px",
    },
  }
})

export { LogoContainer }
