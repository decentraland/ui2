import styled from "@emotion/styled"
import { Avatar as AvatarMui } from "@mui/material"
import { AvatarFaceProps } from "./AvatarFace.types"

const AvatarContainer = styled("div", {
  shouldForwardProp: (prop) => prop !== "inline",
})<Pick<AvatarFaceProps, "inline">>((props) => {
  return {
    width: "inherit",
    height: "inherit",
    display: props.inline ? "inline-flex" : "flex",
    alignItems: "center",
    justifyContent: "center",
    verticalAlign: "middle",
  }
})

const Avatar = styled(AvatarMui)<Pick<AvatarFaceProps, "size">>((props) => {
  const { size, theme } = props
  const dimensions = {
    width: theme.spacing(4),
    height: theme.spacing(4),
  }

  if (size === "tiny") {
    dimensions.width = theme.spacing(2.5)
    dimensions.height = theme.spacing(2.5)
  } else if (size === "small") {
    dimensions.width = theme.spacing(4)
    dimensions.height = theme.spacing(4)
  } else if (size === "medium") {
    dimensions.width = theme.spacing(6)
    dimensions.height = theme.spacing(6)
  } else if (size === "large") {
    dimensions.width = theme.spacing(13.5)
    dimensions.height = theme.spacing(13.5)
  } else if (size === "massive") {
    dimensions.width = theme.spacing(22.5)
    dimensions.height = theme.spacing(22.5)
  } else if (size === "responsive") {
    dimensions.width = theme.spacing(11.625) // TODO: check this sizing
    dimensions.height = theme.spacing(11.625)
  }

  return {
    backgroundColor: theme!.palette.secondary.light,
    ...dimensions,
    "@media (min-width: 1200px)": size === "responsive" && {
      width: theme.spacing(21.25),
      height: theme.spacing(21.25),
    },
  }
})

export { AvatarContainer, Avatar }
