import styled from "@emotion/styled"
import { useTheme } from "@mui/material"

export const Button = styled("div")((props: {
  inline?: boolean
  fontSize?: string
}) => {
  const theme = useTheme()

  let fontSize = "inherit"

  if (props.fontSize === "small") {
    fontSize = "20px"
  } else if (props.fontSize === "medium") {
    fontSize = "24px"
  } else if (props.fontSize === "large") {
    fontSize = "36px"
  }

  return {
    display: props.inline ? "inline-flex" : "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.text.primary,
    verticalAlign: "middle",
    fontSize: fontSize,
    lineHeight: "inherit",
  }
})

export const ImageContainer = styled("div")((props: { primary?: boolean }) => {
  const theme = useTheme()
  return {
    display: "flex",
    "& svg path": {
      fill: props.primary ? theme.palette.primary.main : "#000000",
    },
  }
})
