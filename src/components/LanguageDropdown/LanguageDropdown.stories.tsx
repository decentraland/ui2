import { LanguageDropdown } from "./LanguageDropdown"
import { SupportedLanguage } from "./LanguageDropdown.types"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof LanguageDropdown> = {
  title: "Decentraland UI/LanguageDropdown",
  component: LanguageDropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

type Story = StoryObj<typeof LanguageDropdown>

const Default: Story = {
  args: {
    languages: [
      { code: SupportedLanguage.EN, name: "English", flag: "🇺🇸" },
      { code: SupportedLanguage.ES, name: "Español", flag: "🇪🇸" },
      { code: SupportedLanguage.FR, name: "Français", flag: "🇫🇷" },
      { code: SupportedLanguage.ZH, name: "中文", flag: "🇨🇳" },
      { code: SupportedLanguage.KO, name: "한국어", flag: "" },
      { code: SupportedLanguage.JA, name: "日本語", flag: "" },
    ],
    selectedLanguage: SupportedLanguage.EN,
    onLanguageChange: (language) => console.log(`Selected: ${language}`),
  },
}

const SpanishSelected: Story = {
  args: {
    ...Default.args,
    selectedLanguage: SupportedLanguage.ES,
  },
}

const LimitedLanguages: Story = {
  args: {
    languages: [
      { code: SupportedLanguage.EN, name: "English", flag: "🇺🇸" },
      { code: SupportedLanguage.ES, name: "Español", flag: "🇪🇸" },
      { code: SupportedLanguage.FR, name: "Français", flag: "🇫🇷" },
    ],
    selectedLanguage: SupportedLanguage.FR,
    onLanguageChange: (language) => console.log(`Selected: ${language}`),
  },
}

// eslint-disable-next-line import/no-default-export
export default meta
export { Default, SpanishSelected, LimitedLanguages }
