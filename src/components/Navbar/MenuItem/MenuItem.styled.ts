import styled from "@emotion/styled"
import { Box, Typography, useTheme } from "@mui/material"

const MenuItemContainer = styled(Box)((props: {
  active: boolean
  backgroundColor?: string
}) => {
  const { active, backgroundColor } = props

  const theme = useTheme()

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
    [theme.breakpoints.down("sm")]: {
      padding: "40px 0 23.66px",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: "normal",
      lineHeight: "18px",
      color: theme.palette.text.primary,
      borderBottomColor: theme.palette.text.primary,
      borderBottomStyle: "solid" as const,
      borderBottomWidth: "1px",
      width: "calc(100% - 50px)",
      margin: "0 25px",
      justifyContent: "space-between",
    },
  }
})

const MenuItemTitle = styled(Typography)((props: { textColor?: string }) => {
  const { textColor } = props
  const theme = useTheme()

  return {
    textTransform: "capitalize" as const,
    fontWeight: "inherit",
    color: textColor ? textColor : theme.palette.text.secondary,
    [theme.breakpoints.down("sm")]: {
      color: textColor ? textColor : theme.palette.text.primary,
    },
  }
})

export { MenuItemContainer, MenuItemTitle }
