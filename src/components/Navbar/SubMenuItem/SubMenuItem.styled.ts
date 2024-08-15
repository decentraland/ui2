import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded"
import styled from "@emotion/styled"
import { Box, Link, Typography, useTheme } from "@mui/material"

const SubMenuItemContainer = styled(Box)((props: { isExternal?: boolean }) => {
  let otherStyles = {}

  const theme = useTheme()
  if (props.isExternal) {
    otherStyles = {
      backgroundImage: `url(${ArrowOutwardRoundedIcon})`,
    }
  }

  return {
    display: "flex",
    padding: 0,
    width: "100%",
    borderBottomColor: theme.palette.text.secondary,
    color: theme.palette.text.secondary,
    borderBottomStyle: "solid" as const,
    marginBottom: "6px",
    paddingBottom: "16px",
    height: "77.5px",
    cursor: "pointer",
    marginTop: "52px",
    position: "relative" as const,
    ...otherStyles,
    "&:not(:first-child)": {
      marginTop: "32px",
    },
    "&:hover": {
      borderBottomColor: theme.palette.text.primary,
      color: theme.palette.text.primary,
    },
    "@media (max-width: 991px)": {
      color: theme.palette.text.primary,
      borderBottomColor: theme.palette.text.primary,
    },
  }
})

const SubMenuLink = styled(Link)({
  textDecoration: "none",
  color: "inherit",
})

const SubMenuItemTitle = styled(Typography)(() => ({
  fontSize: "18px",
  fontWeight: 600,
  lineHeight: "18px",
  marginBottom: "6px",
  textDecoration: "none",
  color: "inherit",
}))

const SubMenuItemDescription = styled(Typography)(() => ({
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "18px",
  textDecoration: "none",
  color: "inherit",
}))

const SubMenuItemExternal = styled(ArrowOutwardRoundedIcon)(() => ({
  position: "absolute" as const,
  right: 0,
  top: "50%",
  transform: "translateY(-50%)",
}))

export {
  SubMenuItemContainer,
  SubMenuLink,
  SubMenuItemTitle,
  SubMenuItemDescription,
  SubMenuItemExternal,
}
