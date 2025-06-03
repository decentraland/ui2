import { BannerFields, ContentfulAsset, ContentfulLocale } from "@dcl/schemas"

type BannerProps = {
  fields: BannerFields | null
  assets: Record<string, ContentfulAsset>
  isLoading: boolean
  error: string | null
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  locale?: ContentfulLocale
}

type LowercasedAlignment = "left" | "center" | "right"

export type { BannerProps, BannerFields, LowercasedAlignment }
