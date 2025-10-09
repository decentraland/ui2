import { Footer } from "./Footer"
import { SupportedLanguage } from "../LanguageDropdown/LanguageDropdown.types"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Footer> = {
  title: "Decentraland UI/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    isSignedIn: { control: "boolean", description: "Whether the user is signed in" },
    isSigningIn: { control: "boolean", description: "Whether the user is signing in" },
    isGuest: { control: "boolean", description: "Whether the user is a guest" },
    onLanguageChange: { action: "languageChanged", description: "The function to handle the language change" },
    languages: { control: "object", description: "The languages to display in the footer" },
    selectedLanguage: { control: "select", description: "The selected language", options: Object.values(SupportedLanguage) },
    hideSocialNetworks: { control: "boolean", description: "Whether to hide the social networks" },
  },
}

type Story = StoryObj<typeof Footer>

const Default: Story = {}

const SpanishLanguage: Story = {
  args: {
    selectedLanguage: SupportedLanguage.ES,
    onLanguageChange: (language) => console.log(`Selected: ${language}`),
  },
}

const HiddenSocialNetworks: Story = {
  args: {
    hideSocialNetworks: true,
  },
}

const CustomLanguages: Story = {
  args: {
    languages: [
      { code: SupportedLanguage.EN, name: "English", flag: "🇺🇸" },
      { code: SupportedLanguage.ES, name: "Español", flag: "🇪🇸" },
      { code: SupportedLanguage.FR, name: "Français", flag: "🇫🇷" },
    ],
    selectedLanguage: SupportedLanguage.ES,
    onLanguageChange: (language) => console.log(`Selected: ${language}`),
  },
}

// eslint-disable-next-line import/no-default-export
export default meta
export { Default, SpanishLanguage, HiddenSocialNetworks, CustomLanguages }
