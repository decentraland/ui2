import { ContentfulLocale } from "@dcl/schemas"

type MarketingBannerProps = {
  id: string
  environment: string
  token: string
  space: string
  locale?: ContentfulLocale
}

export type { MarketingBannerProps }
