import styled from "@emotion/styled"
import { ButtonBase as ButtonMui, useTheme } from "@mui/material"
import { ManaProps } from "./Mana.types"

export const ManaButtonContainer = styled(ButtonMui)((
  props: Pick<ManaProps, "inline" | "href" | "onClick"> & {
    fontSize?: string
  }
) => {
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
    cursor: !!props.href || !!props.onClick ? "pointer" : "default",
    "& + &": {
      marginLeft: "0.3em",
    },
  }
})

export const ImageContainer = styled("div")((props: { primary?: boolean }) => {
  const theme = useTheme()
  return {
    display: "flex",
    paddingRight: "0.3em",
    "& svg path": {
      fill: props.primary ? theme.palette.primary.main : "#000000",
    },
  }
})
