import { MouseEventHandler } from "react"
import { Rarity } from "@dcl/schemas"

type RarityBadgeI18N = Record<string, Record<Rarity, string>>

type RarityBadgeProps = {
  rarity: Rarity
  size?: "small" | "medium"
  square?: boolean
  withTooltip?: boolean
  onClick?: MouseEventHandler<HTMLDivElement>
  i18n?: RarityBadgeI18N
}

export { RarityBadgeProps, RarityBadgeI18N }
