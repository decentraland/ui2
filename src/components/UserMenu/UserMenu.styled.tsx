import styled from "@emotion/styled"
import { Box, Button } from "@mui/material"

const UserMenuContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  position: "relative",
  textAlign: "left",
  outline: "none",
  alignItems: "center",
  zIndex: theme.zIndex.appBar,
}))

const UserMenuLoaderContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  height: "100%",
})

const SignInButton = styled(Button)({
  height: "46px",
  minWidth: "90px",
})

export { UserMenuContainer, UserMenuLoaderContainer, SignInButton }
