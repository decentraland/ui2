import styled from "@emotion/styled"
import { Box, Typography } from "@mui/material"

interface MenuItemContainerProps {
  active: boolean
  backgroundColor?: string
}

interface MenuItemTitleProps {
  textColor?: string
}

const MenuItemContainer = styled(Box, {
  shouldForwardProp: (prop) =>
    !["active", "backgroundColor"].includes(prop as string),
})<MenuItemContainerProps>((props) => {
  const { active, backgroundColor, theme } = props
  let modifiedStyles
  if (active) {
    modifiedStyles = {
      fontWeight: "bold",
      color: theme.palette.text.primary,
    }
  }

  return {
    backgroundColor: backgroundColor ? backgroundColor : "transparent",
    display: "flex",
    cursor: "pointer",
    alignItems: "center",
    margin: "0 0 0 0",
    padding: "0 10px",
    border: 0,
    color: theme.palette.text.secondary,
    fontWeight: "normal",
    ...modifiedStyles,
    "& :hover": {
      color: theme.palette.text.primary,
    },
    [theme!.breakpoints.down("sm")]: {
      padding: "40px 0 23.66px",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: "normal",
      lineHeight: "18px",
      color: theme.palette.text.primary,
      borderBottomColor: theme.palette.text.primary,
      borderBottomStyle: "solid",
      borderBottomWidth: "1px",
      width: "calc(100% - 50px)",
      margin: "0 25px",
      justifyContent: "space-between",
    },
  }
})

const MenuItemTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "textColor",
})<MenuItemTitleProps>((props) => {
  const { textColor, theme } = props
  return {
    textTransform: "capitalize",
    fontWeight: "inherit",
    fontSize: "16px",
    color: textColor ? textColor : theme.palette.text.secondary,
    [theme!.breakpoints.down("sm")]: {
      color: textColor ? textColor : theme.palette.text.primary,
    },
  }
})

export { MenuItemContainer, MenuItemTitle }
