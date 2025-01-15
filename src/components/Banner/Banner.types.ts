import {
  AlignmentFieldType,
  ContentfulAsset,
  Locales,
  LocalizedField,
  SysAssetLink,
} from "../../hooks/contentful"
import type { Document } from "@contentful/rich-text-types"

type IBannerFields = {
  id: LocalizedField<string>
  showBanner: LocalizedField<boolean>
  desktopTitle: LocalizedField<string>
  mobileTitle: LocalizedField<string>
  mobileTitleAlignment: LocalizedField<AlignmentFieldType>
  desktopTitleAlignment: LocalizedField<AlignmentFieldType>
  desktopText: LocalizedField<Document>
  mobileText: LocalizedField<Document>
  desktopTextAlignment: LocalizedField<AlignmentFieldType>
  mobileTextAlignment: LocalizedField<AlignmentFieldType>
  showButton: LocalizedField<boolean>
  buttonLink?: LocalizedField<string>
  buttonsText?: LocalizedField<string>
  desktopButtonAlignment: LocalizedField<AlignmentFieldType>
  mobileButtonAlignment: LocalizedField<AlignmentFieldType>
  fullSizeBackground: LocalizedField<SysAssetLink>
  mobileBackground: LocalizedField<SysAssetLink>
  logo?: LocalizedField<SysAssetLink>
}

type BannerProps = {
  fields: IBannerFields | null
  assets: Record<string, ContentfulAsset>
  isLoading: boolean
  locale?: Locales
  error: string | null
}

type LowercasedAlignment = "left" | "center" | "right"

export type { BannerProps, IBannerFields, LowercasedAlignment }
