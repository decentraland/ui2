import zIndex from "@mui/material/styles/zIndex"
import styled from "@emotion/styled"
import { Box, Button, useTheme } from "@mui/material"
import CreateImage from "../../../Assets/Navbar/create-submenu.png"
import ExploreImage from "../../../Assets/Navbar/explore-submenu.png"
import GovernanceImage from "../../../Assets/Navbar/governance-submenu.png"
import LearnImage from "../../../Assets/Navbar/learn-submenu.png"
import MarketplaceImage from "../../../Assets/Navbar/marketplace-submenu.png"
import { NavbarPages } from "../Navbar.types"

const SubMenuContainer = styled(Box)(() => {
  const theme = useTheme()
  return {
    [theme.breakpoints.down("sm")]: {
      position: "absolute" as const,
      zIndex: zIndex.modal,
    },
  }
})

const MenuItemContainer = styled(Box)((props: {
  active: boolean
  section: NavbarPages
  isMobile?: boolean
}) => {
  const { active, section } = props
  const theme = useTheme()

  let modifiedStyles
  let mobileModifiedStyles
  let leftImageStyles

  const defaultStyles = {
    opacity: 1,
    top: "-200%",
    backgroundSize: "100% 100%",
    backgroundPosition: "0px 0px, 0px 0px",
    position: "fixed" as const,
    zIndex: 0,
    left: 0,
    paddingLeft: "370px",
    width: "100%",
    height: "328px",
    minHeight: "calc(390px + 64px)",
    boxShadow: "none",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    paddingTop: "64px",
    backgroundColor: theme.palette.background.default,
    transition: `${theme.transitions.create(["box-shadow", "height"], {
      duration: theme.transitions.duration.shorter,
      easing: theme.transitions.easing.easeInOut,
    })}, ${theme.transitions.create(["top", "left"], {
      duration: theme.transitions.duration.complex,
      easing: "cubic-bezier(1, 0, 0.15, 1)",
    })}`,
  }

  if (active) {
    modifiedStyles = {
      opacity: 1,
      top: 0,
      zIndex: 10,
      boxShadow: theme.shadows[20],
    }
    mobileModifiedStyles = {
      left: 0,
    }
  }

  switch (section) {
    case NavbarPages.MARKETPLACE:
      modifiedStyles = {
        ...modifiedStyles,
        backgroundImage:
          "radial-gradient(350px 200px at 400px 120%,#691fa933 0%,transparent 150%),radial-gradient(350px 200px at 1280px 120%, #691fa933 0%, #073aff00 100%)",
      }
      leftImageStyles = {
        backgroundImage: `url(${MarketplaceImage})`,
      }
      break
    case NavbarPages.CREATE:
      modifiedStyles = {
        ...modifiedStyles,
        backgroundImage:
          "radial-gradient(350px 200px at 400px 120%,#ff743933 0%,transparent 150%),radial-gradient(350px 200px at 1280px 120%, #ff743933 0%, #073aff00 100%)",
      }
      leftImageStyles = {
        backgroundImage: `url(${CreateImage})`,
      }
      break
    case NavbarPages.EXPLORE:
      modifiedStyles = {
        ...modifiedStyles,
        backgroundImage:
          "radial-gradient(350px 200px at 400px 120%,#3dd0ff33 0%,transparent 150%),radial-gradient(350px 200px at 1280px 120%, #3dd0ff33 0%, #073aff00 100%)",
      }
      leftImageStyles = {
        backgroundImage: `url(${ExploreImage})`,
      }
      break
    case NavbarPages.LEARN:
      modifiedStyles = {
        ...modifiedStyles,
        backgroundImage:
          "radial-gradient(350px 200px at 400px 120%,#a6746433 0%,transparent 150%),radial-gradient(350px 200px at 1280px 120%, #a6746433 0%, #073aff00 100%)",
      }
      leftImageStyles = {
        backgroundImage: `url(${LearnImage})`,
      }
      break
    case NavbarPages.GOVERNANCE:
      modifiedStyles = {
        ...modifiedStyles,
        backgroundImage:
          "radial-gradient(350px 200px at 400px 120%,#ff3dec33 0%,transparent 150%),radial-gradient(350px 200px at 1280px 120%, #ff3dec33 0%, #073aff00 100%)",
      }
      leftImageStyles = {
        backgroundImage: `url(${GovernanceImage})`,
      }
      break
  }

  return {
    ...defaultStyles,
    ...modifiedStyles,
    "&::after": {
      content: '""',
      position: "absolute" as const,
      width: "370px",
      height: "calc(100% - 64px)",
      top: "64px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom center",
      left: 0,
      backgroundSize: "auto 90%",
      ...leftImageStyles,
    },
    [theme.breakpoints.down("sm")]: {
      top: "64px",
      left: "150%",
      height: "100vh",
      paddingLeft: 0,
      width: "100%",
      padding: "0 25px",
      margin: 0,
      alignItems: "flex-start",
      boxShadow: "none",
      backgroundColor: theme.palette.background.default,
      ...mobileModifiedStyles,
      "&::after": {
        content: "none",
      },
    },
  }
})

const SubMenuWrapper = styled(Box)(() => {
  const theme = useTheme()
  return {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    height: "fit-content",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column" as const,
    },
  }
})

const BackButton = styled(Button)({ padding: "0" })

export { SubMenuContainer, MenuItemContainer, SubMenuWrapper, BackButton }
