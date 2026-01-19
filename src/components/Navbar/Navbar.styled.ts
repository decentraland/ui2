import styled from "@emotion/styled"
import { AppBar, Box, Button, Link, Modal } from "@mui/material"
import { Logo as LogoComponent } from "../Logo/Logo"

interface DclAppBarProps {
  isSubmenuOpen: boolean
  isMobileOpen: boolean
}

interface LogoLinkProps {
  isMobile?: boolean
}

const DclAppBar = styled(AppBar, {
  shouldForwardProp: (prop) =>
    !["isSubmenuOpen", "isMobileOpen"].includes(prop as string),
})<DclAppBarProps>((props) => {
  const { isSubmenuOpen, isMobileOpen } = props
  let openedStyles

  if (isSubmenuOpen || isMobileOpen) {
    openedStyles = {
      boxShadow: "none",
      backgroundImage: "none",
    }
  }

  return { ...openedStyles }
})

const LogoLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== "isMobile",
})<LogoLinkProps>((props) => {
  const { isMobile, theme } = props
  let mobileStyles
  if (isMobile) {
    mobileStyles = {
      zIndex: theme!.zIndex.appBar,
    }
  }
  return {
    height: "36px",
    ...mobileStyles,
  }
})

const AppBarDesktopWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}))

const AppBarWrapper = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  alignItems: "center",
  height: "66px",
})

const AppBarTabletAndBelowWrapper = styled(Box)({
  width: "85px",
  display: "flex",
  alignItems: "center",
  height: "66px",
  justifyContent: "space-between",
})

const AppBarRightWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
})

const MenuIcon = styled(Button)({
  height: "32px",
  width: "32px",
  minWidth: "32px",
  position: "relative",
  padding: 0,
  "&:hover": {
    backgroundColor: "transparent",
  },
})

interface MenuIconBarProps {
  isOpen: boolean
}

const MenuIconBar = styled("span", {
  shouldForwardProp: (prop) => prop !== "isOpen" && prop !== "active",
})<MenuIconBarProps>((props) => {
  const { isOpen, theme } = props
  let openedStyles

  if (isOpen) {
    openedStyles = {
      "&:nth-of-type(1)": {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%) rotate(45deg)",
        width: "33.94px",
      },
      "&:nth-of-type(2)": {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%) rotate(-45deg)",
        width: "33.94px",
      },
    }
  }

  return {
    transition: `all 0.3s ease`,
    height: "2px",
    width: "100%",
    backgroundColor: theme.palette.text.primary,
    position: "absolute",
    "&:nth-of-type(1)": {
      top: "8px",
      left: 0,
    },
    "&:nth-of-type(2)": {
      top: "21px",
      left: 0,
    },
    ...openedStyles,
  }
})

const MenuModal = styled(Modal)(() => {
  return {
    "& .MuiBackdrop-root.MuiModal-backdrop": {
      backgroundColor: "transparent",
    },
  }
})

const Logo = styled(LogoComponent)(({ theme }) => ({
  width: theme.spacing(4.5),
  height: theme.spacing(4.5),
  [theme.breakpoints.down("sm")]: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}))

export {
  DclAppBar,
  LogoLink,
  AppBarDesktopWrapper,
  AppBarWrapper,
  AppBarTabletAndBelowWrapper,
  AppBarRightWrapper,
  MenuIcon,
  MenuIconBar,
  MenuModal,
  Logo,
}
