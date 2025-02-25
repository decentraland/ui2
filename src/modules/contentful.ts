import { ContentfulAsset, ContentfulLocale, SysLink } from "@dcl/schemas"

const getAssetUrl = (
  assets: Record<string, ContentfulAsset>,
  locale: ContentfulLocale,
  assetLink?: SysLink<"Asset">
): string => {
  if (!assetLink) return ""
  const asset = assets[assetLink.sys.id]
  return asset?.fields.file[locale]?.url
    ? `https:${asset.fields.file[locale].url}`
    : ""
}

export { getAssetUrl }
