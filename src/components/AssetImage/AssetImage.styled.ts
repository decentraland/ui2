import { Rarity } from "@dcl/schemas"
import styled from "@emotion/styled"
import { AssetImageProps } from "./AssetImage.types"

const AssetImageContainer = styled("div")<Pick<AssetImageProps, "rarity">>(({
  rarity,
}) => {
  const [lightColor, regularColor] = Rarity.getGradient(rarity)
  const backgroundImage = `radial-gradient(${lightColor}, ${regularColor})`

  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "inherit",
    width: "inherit",
    margin: "auto",
    backgroundImage,
  }
})

const AssetImageStyled = styled("img")({
  magin: "auto",
  maxHeight: "100%",
})

export { AssetImageContainer, AssetImageStyled }
