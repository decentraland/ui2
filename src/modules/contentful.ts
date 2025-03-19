import { ContentfulAsset, ContentfulLocale, SysLink } from "@dcl/schemas"

const getAssetUrl = (
  assets: Record<string, ContentfulAsset>,
  locale: ContentfulLocale,
  assetLink?: SysLink<"Asset">
): string => {
  if (!assetLink) return ""
  const assetUrl = assets[assetLink.sys.id]?.fields.file[locale]?.url
  if (assetUrl) {
    return assetUrl.startsWith("https:") || assetUrl.startsWith("http:")
      ? assetUrl
      : `https:${assetUrl}`
  }
  return ""
}

export { getAssetUrl }
