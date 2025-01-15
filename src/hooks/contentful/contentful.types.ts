import type { Document } from "@contentful/rich-text-types"

enum ContentfulLocale {
  enUS = "en-US",
  es = "es",
  zh = "zh",
}

type LocalizedField<T> = {
  [ContentfulLocale.enUS]: T
  [ContentfulLocale.es]?: T
  [ContentfulLocale.zh]?: T
}

type SysAssetLink = {
  sys: {
    type: "Link"
    linkType: "Asset"
    id: string
  }
}

type ContentfulAsset = {
  sys: {
    id: string
    type: "Asset"
  }
  fields: {
    title: LocalizedField<string>
    description: LocalizedField<string>
    file: LocalizedField<{
      url: string
      details: {
        size: number
        image?: {
          width: number
          height: number
        }
      }
      fileName: string
      contentType: string
    }>
  }
}

type AlignmentFieldType = "Left" | "Center" | "Right"
type LocalizedFieldType =
  | string
  | boolean
  | Document
  | SysAssetLink
  | AlignmentFieldType

type ContentfulResponse<
  T extends Record<string, LocalizedField<LocalizedFieldType>>,
> = {
  items: Array<{
    fields: T
    sys: {
      id: string
      type: "Entry"
    }
  }>
  includes: {
    Asset: ContentfulAsset[]
  }
}

export {
  ContentfulLocale as Locales,
  LocalizedField,
  SysAssetLink,
  ContentfulAsset,
  AlignmentFieldType,
  LocalizedFieldType,
  ContentfulResponse,
}
