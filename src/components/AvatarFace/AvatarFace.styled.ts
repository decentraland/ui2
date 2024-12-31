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
    width: "32px",
    height: "32px",
  }

  if (size === "tiny") {
    dimensions.width = "20px"
    dimensions.height = "20px"
  } else if (size === "small") {
    dimensions.width = "32px"
    dimensions.height = "32px"
  } else if (size === "medium") {
    dimensions.width = "48px"
    dimensions.height = "48px"
  } else if (size === "large") {
    dimensions.width = "108px"
    dimensions.height = "108px"
  } else if (size === "responsive") {
    dimensions.width = "93px"
    dimensions.height = "93px"
  }

  return {
    backgroundColor: theme!.palette.secondary.light,
    ...dimensions,
    "@media (min-width: 1200px)": size === "responsive" && {
      width: "170px",
      height: "170px",
    },
  }
})

export { AvatarContainer, Avatar }
