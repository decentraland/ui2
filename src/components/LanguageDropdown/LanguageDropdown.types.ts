enum SupportedLanguage {
  EN = 'en',
  ES = 'es',
  FR = 'fr',
  ZH = 'zh',
  KO = 'ko',
  JA = 'ja'
}

type Language = {
  code: SupportedLanguage
  name: string
  flag: string
}

type LanguageDropdownProps = {
  languages: Language[]
  selectedLanguage: SupportedLanguage
  onLanguageChange: (language: SupportedLanguage) => void
}

export { SupportedLanguage }
export type { Language, LanguageDropdownProps }
