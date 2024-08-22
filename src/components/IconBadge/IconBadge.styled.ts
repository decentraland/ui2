import styled from "@emotion/styled"
import { Box, ButtonBase as ButtonMui, Typography } from "@mui/material"
import { neutral, textOnNeutral } from "../../theme/colors"
import { IconBadgeProps } from "./IconBadge.types"

const IconBadgeButtonContainer = styled(ButtonMui)((
  props: Pick<IconBadgeProps, "inline" | "onClick">
) => {
  const { inline, onClick } = props
  return {
    display: inline ? "inline-flex" : "flex",
    backgroundColor: neutral.gray1,
    alignItems: "center",
    justifyContent: "center",
    color: textOnNeutral.gray1,
    verticalAlign: "middle",
    fontSize: "13px",
    lineHeight: "inherit",
    textTransform: "uppercase" as const,
    padding: "2px 8px",
    borderRadius: "5px",
    cursor: onClick ? "pointer" : "default",
    "& + &": {
      marginLeft: "0.3em",
    },
  }
})

const ImageContainer = styled(Box)({
  display: "flex",
  "& svg path": {
    fill: textOnNeutral.gray1,
  },
})

const TextContainer = styled(Typography)({
  fontSize: "inherit",
  color: "inherit",
  ":not(:first-child)": {
    paddingLeft: "0.3em",
  },
})

export { IconBadgeButtonContainer, ImageContainer, TextContainer }
