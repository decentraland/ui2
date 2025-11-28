import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded"
import styled from "@emotion/styled"
import { Box, Link, Typography } from "@mui/material"

interface SubMenuItemContainerProps {
  isExternal?: boolean
}

interface SubMenuLinkProps {
  isExternal?: boolean
}

const SubMenuItemContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isExternal",
})<SubMenuItemContainerProps>((props) => {
  const { isExternal, theme } = props
  let otherStyles = {}

  if (isExternal) {
    otherStyles = {
      backgroundImage: `url(${ArrowOutwardRoundedIcon})`,
    }
  }

  return {
    display: "flex",
    padding: 0,
    width: "100%",
    borderBottomColor: theme!.palette.text.secondary,
    color: theme!.palette.text.secondary,
    borderBottomStyle: "solid",
    marginBottom: "6px",
    paddingBottom: "16px",
    height: "77.5px",
    cursor: "pointer",
    marginTop: "52px",
    position: "relative",
    ...otherStyles,
    "&:nth-child(n+2)": {
      marginTop: "32px",
    },
    "&:hover": {
      borderBottomColor: theme!.palette.text.primary,
      color: theme!.palette.text.primary,
    },
    [theme!.breakpoints.down("sm")]: {
      color: theme!.palette.text.primary,
      borderBottomColor: theme!.palette.text.primary,
    },
  }
})

const SubMenuLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== "isExternal",
})<SubMenuLinkProps>((props) => {
  const { isExternal } = props
  return {
    textDecoration: "none",
    color: "inherit",
    "&:hover": {
      color: "inherit",
    },
    ...(isExternal && {
      paddingRight: "32px",
    }),
  }
})

const SubMenuItemTitle = styled(Typography)(() => ({
  fontSize: "18px",
  fontWeight: 600,
  lineHeight: "18px",
  marginBottom: "6px",
  textDecoration: "none",
  color: "inherit",
  "&:hover": {
    color: "inherit",
  },
}))

const SubMenuItemDescription = styled(Typography)(() => ({
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "18px",
  textDecoration: "none",
  color: "inherit",
  "&:hover": {
    color: "inherit",
  },
}))

const SubMenuItemExternal = styled(ArrowOutwardRoundedIcon)({
  position: "absolute",
  right: 0,
  top: "50%",
  transform: "translateY(-50%)",
})

export {
  SubMenuItemContainer,
  SubMenuLink,
  SubMenuItemTitle,
  SubMenuItemDescription,
  SubMenuItemExternal,
}
