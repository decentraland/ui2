import styled from "@emotion/styled"
import { Box, ButtonBase as ButtonMui, Typography } from "@mui/material"
import { neutral, textOnNeutral } from "../../theme/colors"
import { IconBadgeProps } from "./IconBadge.types"

type IconBadgeButtonProps = Pick<IconBadgeProps, "inline" | "onClick">

const IconBadgeButtonContainer = styled(ButtonMui)<IconBadgeButtonProps>((
  props
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
    textTransform: "uppercase",
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
  marginRight: "0.3em",
  "& svg path": {
    fill: textOnNeutral.gray1,
  },
})

const TextContainer = styled(Typography)({
  fontSize: "inherit",
  color: "inherit",
})

export { IconBadgeButtonContainer, ImageContainer, TextContainer }
