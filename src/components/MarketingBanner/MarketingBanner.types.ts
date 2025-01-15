import { Locales } from "hooks/contentful"

type MarketingBannerProps = {
  id: string
  environment: string
  token: string
  space: string
  locale?: Locales
}

export type { MarketingBannerProps }
