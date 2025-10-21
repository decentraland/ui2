import { Rarity } from "@dcl/schemas"

type AssetImageProps = {
  name: string
  rarity: Rarity
  src: string
} & React.HTMLAttributes<HTMLDivElement>

export type { AssetImageProps }
