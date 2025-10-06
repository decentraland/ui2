import styled from "@emotion/styled"
import { SvgIcon } from "@mui/material"
import { LogoProps } from "./Logo.types"

const dimensionsBySize = {
  normal: 2.5,
  large: 4,
  huge: 6,
  massive: 22.5,
}

const LogoContainer = styled(SvgIcon)<LogoProps>(
  ({ theme, size = "normal" }) => ({
    width: theme.spacing(dimensionsBySize[size]),
    height: theme.spacing(dimensionsBySize[size]),
    fontSize: theme.spacing(4.5),
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.spacing(4),
    },
  })
)

export { LogoContainer }
