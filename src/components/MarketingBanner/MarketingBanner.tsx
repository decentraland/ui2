import React from "react"
import { Banner, IBannerFields } from "../../components/Banner"
import { Locales, useGetContentfulEntry } from "../../hooks/contentful"
import { MarketingBannerProps } from "./MarketingBanner.types"

const BANNER_CONTENT_TYPE = "banner"

export const MarketingBanner: React.FC<MarketingBannerProps> = (
  props: MarketingBannerProps
) => {
  const { id, environment, token, space, locale = Locales.enUS } = props
  const { fields, assets, isLoading, error } =
    useGetContentfulEntry<IBannerFields>(
      id,
      environment,
      BANNER_CONTENT_TYPE,
      token,
      space
    )

  return (
    <Banner
      fields={fields}
      assets={assets}
      isLoading={isLoading}
      error={error}
      locale={locale}
    />
  )
}
