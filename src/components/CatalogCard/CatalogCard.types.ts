import { Item } from "@dcl/schemas"
import { RarityBadgeI18N } from "components/RarityBadge/RarityBadge.types"

type CatalogCardProps = {
  asset: Pick<Item, "id" | "url" | "name" | "rarity" | "network" | "creator">
  action: React.ReactNode
  actionIcon?: React.ReactNode
  imageSrc: string
  extraInformation: React.ReactNode
  notForSale: boolean
  withShadow: boolean
  price?: string
  owners?: string
  i18n?: RarityBadgeI18N
}

export { CatalogCardProps }
