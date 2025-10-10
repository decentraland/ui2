import type { SupportedLanguage } from "../LanguageDropdown/LanguageDropdown.types"

interface Language {
  code: SupportedLanguage
  name: string
  flag: string
}

interface FooterLink {
  label: string
  href: string
}

interface SocialLink {
  name: string
  href: string
  icon?: React.ReactNode
}

interface FooterProps {
  languages?: Language[]
  selectedLanguage?: SupportedLanguage
  onLanguageChange?: (language: SupportedLanguage) => void
  hideSocialNetworks?: boolean
}

export type { Language, FooterLink, SocialLink, SupportedLanguage, FooterProps }
