import styled from "@emotion/styled"
import { ButtonBase as ButtonMui, Typography, useTheme } from "@mui/material"
import { IconBadgeProps } from "./IconBadge.types"

export const IconBadgeButtonContainer = styled(ButtonMui)((
  props: Pick<IconBadgeProps, "inline" | "onClick">
) => {
  const theme = useTheme()

  return {
    display: props.inline ? "inline-flex" : "flex",
    backgroundColor: theme.palette.secondary.dark,
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.text.primary,
    verticalAlign: "middle",
    fontSize: "13px",
    lineHeight: "inherit",
    textTransform: "uppercase",
    padding: "2px 8px",
    borderRadius: "5px",
    cursor: props.onClick ? "pointer" : "default",
    "& + &": {
      marginLeft: "0.3em",
    },
  }
})

export const ImageContainer = styled("div")(() => {
  const theme = useTheme()
  return {
    display: "flex",
    paddingRight: "0.3em",
    "& svg path": {
      fill: theme.palette.secondary.light,
    },
  }
})

export const TextContainer = styled(Typography)({
  fontSize: "inherit",
  color: "#fff",
})
