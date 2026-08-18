import { ContentfulAsset, ContentfulLocale, SysLink } from '@dcl/schemas'

const getAssetUrl = (assets: Record<string, ContentfulAsset>, locale: ContentfulLocale, assetLink?: SysLink<'Asset'>): string => {
  if (!assetLink) return ''
  const assetUrl = assets[assetLink.sys.id]?.fields.file[locale]?.url
  if (assetUrl) {
    return assetUrl.startsWith('https:') || assetUrl.startsWith('http:') ? assetUrl : `https:${assetUrl}`
  }
  return ''
}

const getAssetAspectRatio = (
  assets: Record<string, ContentfulAsset>,
  locale: ContentfulLocale,
  assetLink?: SysLink<'Asset'>
): number | undefined => {
  if (!assetLink) return undefined
  const image = assets[assetLink.sys.id]?.fields.file[locale]?.details?.image
  if (!image?.width || !image?.height) return undefined
  return image.width / image.height
}

export { getAssetUrl, getAssetAspectRatio }
