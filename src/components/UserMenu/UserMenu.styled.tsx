import zIndex from "@mui/material/styles/zIndex"
import styled from "@emotion/styled"
import { Box, Button } from "@mui/material"

const UserMenuContainer = styled(Box)({
  display: "flex",
  position: "relative",
  textAlign: "left",
  outline: "none",
  alignItems: "center",
  zIndex: zIndex.appBar,
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

const DownloadLink = styled(Button)((props) => {
  const { theme } = props
  return {
    height: "46px",
    marginLeft: "24px",
    [theme!.breakpoints.down("sm")]: {
      display: "none",
    },
  }
})

export {
  UserMenuContainer,
  UserMenuLoaderContainer,
  SignInButton,
  DownloadLink,
}
