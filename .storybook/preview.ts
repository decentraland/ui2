import type { Preview } from "@storybook/react"
import { CssBaseline } from "@mui/material"
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles"
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
        order: ["Decentraland UI", "Material UI"],
      },
    },
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#f0f0f0",
        },
        {
          name: "dark",
          value: "#1a091c",
        },
      ],
    },
  },
  decorators: decorators,
}

export default preview
