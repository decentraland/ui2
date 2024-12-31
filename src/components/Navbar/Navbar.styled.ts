import zIndex from "@mui/material/styles/zIndex"
import styled from "@emotion/styled"
import { AppBar, Box, Button, Link, Modal } from "@mui/material"

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
  const { isMobile } = props
  let mobileStyles
  if (isMobile) {
    mobileStyles = {
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: zIndex.appBar,
    }
  }
  return {
    height: "36px",
    ...mobileStyles,
  }
})

const AppBarDesktopWrapper = styled(Box)({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
})

const AppBarWrapper = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  alignItems: "center",
  height: "66px",
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
})((props: MenuIconBarProps) => {
  const { isOpen } = props
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
    backgroundColor: "text.primary",
    position: "absolute",
    "&:nth-of-type(1)": {
      top: "10.5px",
      left: 0,
    },
    "&:nth-of-type(2)": {
      top: "21.5px",
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

export {
  DclAppBar,
  LogoLink,
  AppBarDesktopWrapper,
  AppBarWrapper,
  AppBarRightWrapper,
  MenuIcon,
  MenuIconBar,
  MenuModal,
}
