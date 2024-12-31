import styled from "@emotion/styled"
import { Box, Typography } from "@mui/material"

interface MenuItemContainerProps {
  active: boolean
  backgroundColor?: string
}

interface MenuItemTitleProps {
  textColor?: string
}

const MenuItemContainer = styled(Box)<MenuItemContainerProps>((props) => {
  const { active, backgroundColor, theme } = props
  let modifiedStyles
  if (active) {
    modifiedStyles = {
      fontWeight: "bold",
      color: "#000",
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
    color: "#666",
    fontWeight: "normal",
    ...modifiedStyles,
    "& :hover": {
      color: "#000",
    },
    [theme!.breakpoints.down("sm")]: {
      padding: "40px 0 23.66px",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: "normal",
      lineHeight: "18px",
      color: "#000",
      borderBottomColor: "#000",
      borderBottomStyle: "solid",
      borderBottomWidth: "1px",
      width: "calc(100% - 50px)",
      margin: "0 25px",
      justifyContent: "space-between",
    },
  }
})

const MenuItemTitle = styled(Typography)<MenuItemTitleProps>((props) => {
  const { textColor, theme } = props
  return {
    textTransform: "capitalize",
    fontWeight: "inherit",
    color: textColor ? textColor : "#666",
    [theme!.breakpoints.down("sm")]: {
      color: textColor ? textColor : "#000",
    },
  }
})

export { MenuItemContainer, MenuItemTitle }
