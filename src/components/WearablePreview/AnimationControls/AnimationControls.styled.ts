import styled from "@emotion/styled"
import { Button, Divider, Grow } from "@mui/material"

const StyledAnimationButton = styled(Button)(({ theme }) => ({
  gap: theme.spacing(1),
}))

const StyledAnimationDivider = styled(Divider)(({ theme }) => ({
  height: "calc(100% + 8px)",
  marginTop: theme.spacing(-0.5),
  borderColor: theme.palette.common.white,
}))

const StyledAnimationGrow = styled(Grow)<{ placement?: string }>(
  ({ placement }) => ({
    transformOrigin: placement === "bottom" ? "center top" : "center bottom",
  })
)

export { StyledAnimationButton, StyledAnimationDivider, StyledAnimationGrow }
