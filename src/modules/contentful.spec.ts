import { ContentfulAsset, ContentfulLocale, SysLink } from '@dcl/schemas'
import { getAssetAspectRatio } from './contentful'

const ASSET_ID = 'asset-id'

const assetLink: SysLink<'Asset'> = {
  sys: { type: 'Link', linkType: 'Asset', id: ASSET_ID }
}

const buildAsset = (file: Record<string, unknown>): ContentfulAsset =>
  ({
    metadata: { tags: [], concepts: [] },
    sys: { id: ASSET_ID, type: 'Asset' },
    fields: {
      title: { [ContentfulLocale.enUS]: 'title' },
      description: { [ContentfulLocale.enUS]: '' },
      file: { [ContentfulLocale.enUS]: file }
    }
  }) as unknown as ContentfulAsset

const buildAssets = (file: Record<string, unknown>): Record<string, ContentfulAsset> => ({
  [ASSET_ID]: buildAsset(file)
})

describe('getAssetAspectRatio', () => {
  it('should return undefined when the asset link is not defined', () => {
    expect(getAssetAspectRatio(buildAssets({ details: { image: { width: 1920, height: 300 } } }), ContentfulLocale.enUS)).toBeUndefined()
  })

  it('should return undefined when the asset is missing from the assets map', () => {
    expect(getAssetAspectRatio({}, ContentfulLocale.enUS, assetLink)).toBeUndefined()
  })

  it('should return undefined when the asset has no details', () => {
    expect(getAssetAspectRatio(buildAssets({ url: 'https://an.url/image.jpg' }), ContentfulLocale.enUS, assetLink)).toBeUndefined()
  })

  it('should return undefined when the details have no image dimensions', () => {
    expect(getAssetAspectRatio(buildAssets({ details: { size: 100 } }), ContentfulLocale.enUS, assetLink)).toBeUndefined()
  })

  it('should return undefined when a dimension is zero', () => {
    expect(
      getAssetAspectRatio(buildAssets({ details: { image: { width: 1920, height: 0 } } }), ContentfulLocale.enUS, assetLink)
    ).toBeUndefined()
  })

  it('should return undefined when the requested locale has no file', () => {
    expect(
      getAssetAspectRatio(buildAssets({ details: { image: { width: 1920, height: 300 } } }), ContentfulLocale.es, assetLink)
    ).toBeUndefined()
  })

  it('should return the ratio between the width and the height of the image', () => {
    expect(getAssetAspectRatio(buildAssets({ details: { image: { width: 1920, height: 300 } } }), ContentfulLocale.enUS, assetLink)).toBe(
      6.4
    )
  })
})
