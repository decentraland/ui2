import {
  AlignmentFieldType,
  Locales,
  LocalizedField,
  SysAssetLink,
} from "hooks/contenful"
import type { Document } from "@contentful/rich-text-types"

type LowercasedAlignment = "left" | "center" | "right"

type IBannerFields = {
  id: LocalizedField<string>
  showBanner: LocalizedField<boolean>
  title: LocalizedField<string>
  mobileTitleAlignment: LocalizedField<AlignmentFieldType>
  desktopTitleAlignment: LocalizedField<AlignmentFieldType>
  text: LocalizedField<Document>
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

type MarketingBannerProps = {
  id: string
  environment: string
  token: string
  space: string
  locale?: Locales
}

export type { LowercasedAlignment, IBannerFields, MarketingBannerProps }
