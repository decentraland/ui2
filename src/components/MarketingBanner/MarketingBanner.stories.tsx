import { ContentfulLocale } from "@dcl/schemas"
import { MarketingBanner } from "./MarketingBanner"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "Decentraland UI/MarketingBanner",
  component: MarketingBanner,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MarketingBanner>

type Story = StoryObj<typeof MarketingBanner>

const Default: Story = {
  args: {
    id: "2maJ4UuoqaYtbZxVGymsJo",
    environment: "development",
    token: "AATjg5ZJgxllQW8PBSQV4ZaY5wh9W_lQSKIiERHY-sc",
    space: "ea2ybdmmn1kv",
  },
}

const SpanishLocale: Story = {
  args: {
    ...Default.args,
    locale: ContentfulLocale.es,
  },
}

const ChineseLocale: Story = {
  args: {
    ...Default.args,
    locale: ContentfulLocale.zh,
  },
}

export { Default, SpanishLocale, ChineseLocale }
// eslint-disable-next-line import/no-default-export
export default meta
