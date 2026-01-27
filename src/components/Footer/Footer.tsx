import React from 'react'
import { translations } from './Footer.i18n'
import { config } from '../../config'
import { DiscordIcon, GitHubIcon, RedditIcon, XIcon } from '../Icon'
import { LanguageDropdown } from '../LanguageDropdown'
import { SupportedLanguage } from '../LanguageDropdown/LanguageDropdown.types'
import type { FooterProps, Language, SocialLink } from './Footer.types'
import {
  CopyrightText,
  FooterContainer,
  FooterContent,
  FooterLink,
  FooterSocialLink,
  LanguageSelector,
  LegalLinks,
  SocialLinks,
  StyledFooter
} from './Footer.styled'

const defaultLanguages: Language[] = [
  { code: SupportedLanguage.EN, name: 'English', flag: '🇺🇸' },
  { code: SupportedLanguage.ES, name: 'Español', flag: '🇪🇸' },
  { code: SupportedLanguage.FR, name: 'Français', flag: '🇫🇷' },
  { code: SupportedLanguage.ZH, name: '中文', flag: '🇨🇳' },
  { code: SupportedLanguage.KO, name: '한국어', flag: '🇰🇷' },
  { code: SupportedLanguage.JA, name: '日本語', flag: '🇯🇵' }
]

const defaultSocialLinks: SocialLink[] = [
  {
    name: 'Discord',
    href: config.get('DISCORD_URL'),
    icon: <DiscordIcon fontSize="small" />
  },
  {
    name: 'Reddit',
    href: config.get('REDDIT_URL'),
    icon: <RedditIcon fontSize="small" />
  },
  {
    name: 'GitHub',
    href: config.get('GITHUB_URL'),
    icon: <GitHubIcon fontSize="small" />
  },
  {
    name: 'X',
    href: config.get('X_URL'),
    icon: <XIcon fontSize="small" />
  }
]

const Footer = React.memo((props: FooterProps) => {
  const { languages = defaultLanguages, selectedLanguage = SupportedLanguage.EN, onLanguageChange, hideSocialNetworks = false } = props

  const t = translations[selectedLanguage] || translations.en

  const legalLinks = [
    { label: t.home, href: '/' },
    { label: t.privacy_policy, href: config.get('PRIVACY_POLICY_URL') },
    { label: t.terms_of_use, href: config.get('TERMS_OF_USE_URL') },
    { label: t.content_policy, href: config.get('CONTENT_POLICY_URL') },
    { label: t.code_of_ethics, href: config.get('CODE_OF_ETHICS_URL') }
  ]

  const handleLanguageChange = (languageCode: SupportedLanguage) => {
    onLanguageChange?.(languageCode)
  }

  return (
    <StyledFooter>
      <FooterContainer>
        <FooterContent>
          <LanguageSelector>
            <LanguageDropdown languages={languages} selectedLanguage={selectedLanguage} onLanguageChange={handleLanguageChange} />
          </LanguageSelector>
          <LegalLinks>
            {legalLinks.map((link, index) => (
              <FooterLink key={index} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </LegalLinks>
        </FooterContent>
        <FooterContent>
          {!hideSocialNetworks && (
            <SocialLinks>
              {defaultSocialLinks.map((social, index) => (
                <FooterSocialLink key={index} href={social.href} target="_blank" rel="noopener noreferrer" title={social.name}>
                  {social.icon}
                </FooterSocialLink>
              ))}
            </SocialLinks>
          )}
          <CopyrightText variant="body2">{t.copyright}</CopyrightText>
        </FooterContent>
      </FooterContainer>
    </StyledFooter>
  )
})

export { Footer, defaultLanguages }
