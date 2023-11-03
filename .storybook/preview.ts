import type { Preview } from "@storybook/react"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { withThemeFromJSXProvider } from "@storybook/addon-themes"
import { light, dark } from "../src/theme"

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: light,
      dark: dark,
    },
    defaultTheme: "light",
    Provider: ThemeProvider,
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
        order: ["Decentraland UI", "Material UI"],
      },
    },
  },
}

export default preview
