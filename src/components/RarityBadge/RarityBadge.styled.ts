import { Rarity } from "@dcl/schemas"
import styled, { CSSObject } from "@emotion/styled"
import { Chip } from "@mui/material"
import { hexToRgba } from "../../utils/colors"
import { RarityBadgeProps } from "./RarityBadge.types"

const RarityBadge = styled(Chip)<RarityBadgeProps>(({
  theme,
  rarity,
  size = "medium",
  square = false,
}) => {
  const [lightColor, regularColor] = Rarity.getGradient(rarity)
  const typographyBySize = {
    small: theme.typography.caption,
    medium: theme.typography.body2,
  }
  return {
    backgroundColor: hexToRgba(regularColor, 0.2),
    color: lightColor,
    textTransform: "uppercase",
    ...(square
      ? {
          borderRadius: "5px",
          height: size === "small" ? theme.spacing(3) : theme.spacing(3.25),
        }
      : {}),
    ...typographyBySize[size],
    ":hover": {
      backgroundColor: hexToRgba(regularColor, 0.2),
    },
  } as CSSObject
})

export { RarityBadge }
