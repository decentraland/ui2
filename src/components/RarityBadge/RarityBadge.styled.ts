import styled, { CSSObject } from "@emotion/styled"
import { Chip } from "@mui/material"
import { RarityBadgeProps } from "./RarityBadge.types"

const RarityBadge = styled(Chip)<RarityBadgeProps>(({
  theme,
  rarity,
  size = "medium",
  square = false,
}) => {
  const typographyBySize = {
    small: theme.typography.caption,
    medium: theme.typography.body2,
  }
  return {
    backgroundColor: theme.palette.rarities[rarity],
    color: theme.palette.raritiesText[rarity],
    textTransform: "uppercase",
    ...(square
      ? {
          borderRadius: "5px",
          height: size === "small" ? theme.spacing(3) : theme.spacing(3.25),
        }
      : {}),
    ...typographyBySize[size],
    ":hover": {
      backgroundColor: theme.palette.rarities[rarity],
    },
  } as CSSObject
})

export { RarityBadge }
