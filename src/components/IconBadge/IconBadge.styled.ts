import styled from "@emotion/styled"
import { ButtonBase as ButtonMui, Typography, useTheme } from "@mui/material"
import { IconBadgeProps } from "./IconBadge.types"

const IconBadgeButtonContainer = styled(ButtonMui)((
  props: Pick<IconBadgeProps, "inline" | "onClick">
) => {
  const theme = useTheme()

  return {
    display: props.inline ? "inline-flex" : "flex",
    backgroundColor: theme.palette.secondary.main,
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.text.primary,
    verticalAlign: "middle",
    fontSize: "13px",
    lineHeight: "inherit",
    textTransform: "uppercase" as const,
    padding: "2px 8px",
    borderRadius: "5px",
    cursor: props.onClick ? "pointer" : "default",
    "& + &": {
      marginLeft: "0.3em",
    },
  }
})

const ImageContainer = styled("div")(() => {
  const theme = useTheme()
  return {
    display: "flex",
    paddingRight: "0.3em",
    "& svg path": {
      fill: theme.palette.text.primary,
    },
  }
})

const TextContainer = styled(Typography)({
  fontSize: "inherit",
  color: "inherit",
})

export { IconBadgeButtonContainer, ImageContainer, TextContainer }
