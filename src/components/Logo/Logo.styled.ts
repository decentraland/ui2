import styled from "@emotion/styled"
import { Box, SvgIcon } from "@mui/material"
import { LogoProps } from "./Logo.types"

const dimensionsBySize = {
  normal: 2.5,
  large: 4,
  navbar: 4.5,
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

const StoryContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: 32,
  justifyContent: "center",
}))

const StoryItemContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 8,
})

export { LogoContainer, StoryContainer, StoryItemContainer }
