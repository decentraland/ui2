import { Chip, Palette, styled } from "@mui/material"
import {
  rarity as rarityColors,
  rarityLightTheme,
  textOnRarity,
} from "../../theme/colors"
import { hexToRgba } from "../../utils/colors"
import { RarityBadgeProps } from "./RarityBadge.types"

type ExtendedPalette = Palette & {
  rarities?: Record<string, string>
  raritiesText?: Record<string, string>
}

const RarityBadge = styled(Chip, {
  shouldForwardProp: (prop) => prop !== "rarity" && prop !== "square",
})<RarityBadgeProps>((props) => {
  const { theme, rarity, size = "medium", square = false } = props
  const palette = theme.palette as ExtendedPalette
  const rarityBackground =
    palette.rarities?.[rarity] ??
    (palette.mode === "dark"
      ? hexToRgba(rarityColors[rarity], 0.2)
      : rarityLightTheme[rarity])
  const rarityText = palette.raritiesText?.[rarity] ?? textOnRarity[rarity]
  const typographyBySize = {
    small: {
      fontSize: theme.typography.caption.fontSize,
      fontWeight: theme.typography.caption.fontWeight,
      lineHeight: theme.typography.caption.lineHeight,
    },
    medium: {
      fontSize: theme.typography.body2.fontSize,
      fontWeight: theme.typography.body2.fontWeight,
      lineHeight: theme.typography.body2.lineHeight,
    },
  }
  return {
    backgroundColor: rarityBackground,
    color: rarityText,
    textTransform: "uppercase",
    ...(square
      ? {
          borderRadius: "5px",
          height: size === "small" ? theme.spacing(3) : theme.spacing(3.25),
        }
      : {}),
    ...typographyBySize[size],
    ":hover": {
      backgroundColor: rarityBackground,
    },
  }
})

export { RarityBadge }
