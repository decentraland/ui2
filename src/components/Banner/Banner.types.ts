import { BannerFields, ContentfulAsset, ContentfulLocale } from "@dcl/schemas"

type BannerProps = {
  fields: BannerFields | null
  assets: Record<string, ContentfulAsset>
  isLoading: boolean
  locale?: ContentfulLocale
  error: string | null
}

type LowercasedAlignment = "left" | "center" | "right"

export type { BannerProps, BannerFields, LowercasedAlignment }
