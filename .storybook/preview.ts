import type { Preview } from "@storybook/react"
import { CssBaseline } from "@mui/material"
import { CssVarsProvider } from "@mui/material/styles"
import { withThemeFromJSXProvider } from "@storybook/addon-themes"
import { light, dark } from "../src/theme"

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: light,
      dark: dark,
    },
    defaultTheme: "light",
    Provider: CssVarsProvider,
    GlobalStyles: CssBaseline,
  }),
]

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
    options: {
      storySort: {
        method: "alphabetical",
        order: ["Decentraland UI", "Material UI"],
      },
    },
    backgrounds: {
      default: "Theme background",
      values: [
        {
          name: "Theme background",
          value: "var(--mui-palette-background-default, #f0f0f0)",
        },
        {
          name: "Theme surface",
          value: "var(--mui-palette-background-paper, #ffffff)",
        },
        {
          name: "light",
          value: "#f0f0f0",
        },
        {
          name: "dark",
          value: "#1a091c",
        },
        {
          name: "Decentraland default",
          value: "rgb(24, 20, 26)",
        },
        {
          name: "Decentraland new",
          value: "#1a091c",
        },
      ],
    },
    docs: {
      codePanel: true,
    },
  },
  decorators: decorators,
}

export default preview
