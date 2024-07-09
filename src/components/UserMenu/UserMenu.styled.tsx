import styled from "@emotion/styled"
import { Box, Button } from "@mui/material"

const UserMenuContainer = styled(Box)({
  display: "flex",
  position: "relative",
  textAlign: "left",
  outline: "none",
  alignItems: "center",
})

const UserMenuLoaderContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  height: "100%",
})

const SignInButton = styled(Button)({
  height: "46px",
  minWidth: "90px",
})

const JumpInLink = styled(Button)({
  height: "46px",
  marginLeft: "24px",
  "@media (max-width: 991px)": {
    display: "none",
  },
})

export { UserMenuContainer, UserMenuLoaderContainer, SignInButton, JumpInLink }
