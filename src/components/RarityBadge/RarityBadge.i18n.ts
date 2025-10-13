import { Rarity } from "@dcl/schemas"
import { RarityBadgeI18N } from "./RarityBadge.types"

const i18n = {
  rarities: {
    [Rarity.COMMON]: "Common",
    [Rarity.UNCOMMON]: "Uncommon",
    [Rarity.RARE]: "Rare",
    [Rarity.EPIC]: "Epic",
    [Rarity.LEGENDARY]: "Legendary",
    [Rarity.EXOTIC]: "Exotic",
    [Rarity.MYTHIC]: "Mythic",
    [Rarity.UNIQUE]: "Unique",
  },
  raritiesDescription: {
    [Rarity.COMMON]: "This is the common rarity",
    [Rarity.UNCOMMON]: "This is the uncommon rarity",
    [Rarity.RARE]: "This is the rare rarity",
    [Rarity.EPIC]: "This is the epic rarity",
    [Rarity.LEGENDARY]: "This is the legendary rarity",
    [Rarity.EXOTIC]: "This is the exotic rarity",
    [Rarity.MYTHIC]: "This is the mythic rarity",
    [Rarity.UNIQUE]: "This is the unique rarity",
  },
} as RarityBadgeI18N

export { i18n }
