import zIndex from "@mui/material/styles/zIndex"
import styled from "@emotion/styled"
import { Box } from "@mui/material"

interface MainMenuContainerProps {
  isOpenOnMobile?: boolean
}

const MainMenuContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isOpenOnMobile",
})<MainMenuContainerProps>((props) => {
  const { isOpenOnMobile, theme } = props

  let mobileOpenedStyles
  if (isOpenOnMobile) {
    mobileOpenedStyles = {
      top: "56px",
    }
  }
  return {
    display: "flex",
    height: "64px",
    marginLeft: "10px",
    [theme!.breakpoints.down("sm")]: {
      position: "absolute",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      backgroundColor: theme!.palette.background.default,
      width: "100vw",
      height: "100vh",
      top: "-150vh",
      left: 0,
      marginLeft: 0,
      zIndex: zIndex.mobileStepper,
      transition: `${theme!.transitions.create(["top"], {
        duration: theme!.transitions.duration.shorter,
        easing: theme!.transitions.easing.easeInOut,
      })}`,
      ...mobileOpenedStyles,
    },
  }
})

export { MainMenuContainer }
