import styled from "@emotion/styled"
import { Avatar as AvatarMui, useTheme } from "@mui/material"
import { AvatarFaceProps } from "./AvatarFace.types"

const AvatarContainer = styled("div")((
  props: Pick<AvatarFaceProps, "inline">
) => {
  return {
    width: "inherit",
    height: "inherit",
    display: props.inline ? "inline-flex" : "flex",
    alignItems: "center",
    justifyContent: "center",
    verticalAlign: "middle",
  }
})

const Avatar = styled(AvatarMui)((props: Pick<AvatarFaceProps, "size">) => {
  const theme = useTheme()
  const size = {
    width: "32px",
    height: "32px",
  }

  if (props.size === "tiny") {
    size.width = "20px"
    size.height = "20px"
  } else if (props.size === "small") {
    size.width = "32px"
    size.height = "32px"
  } else if (props.size === "medium") {
    size.width = "48px"
    size.height = "48px"
  } else if (props.size === "large") {
    size.width = "108px"
    size.height = "108px"
  } else if (props.size === "responsive") {
    size.width = "93px"
    size.height = "93px"
  }

  return {
    backgroundColor: theme.palette.secondary.light,
    ...size,
    "@media (min-width: 1200px)": props.size === "responsive" && {
      width: "170px",
      height: "170px",
    },
  }
})

export { AvatarContainer, Avatar }
