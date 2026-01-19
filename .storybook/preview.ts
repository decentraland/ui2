import React, { type ReactNode, type ReactElement } from "react"
import type { Preview } from "@storybook/react"
import { useColorScheme } from "@mui/material/styles"
import { ThemeProvider, theme } from "../src/theme"

const ColorSchemeWrapper = ({
  children,
  mode,
}: {
  children: ReactNode
  mode: "light" | "dark"
}): ReactElement => {
  const { setMode } = useColorScheme()
  React.useEffect(() => {
    setMode(mode)
  }, [mode, setMode])
  return React.createElement(React.Fragment, null, children)
}

const withDclTheme = (Story, context): ReactElement => {
  const selectedMode = context.globals?.dclTheme ?? "light"
  const storyElement = React.createElement(Story)
  const wrapperElement = React.createElement(ColorSchemeWrapper, {
    mode: selectedMode,
    children: storyElement,
  })
  return React.createElement(ThemeProvider, {
    theme,
    defaultMode: selectedMode,
    children: wrapperElement,
  })
}

export const decorators = [withDclTheme]

export const globalTypes = {
  dclTheme: {
    name: "Theme",
    description: "Decentraland theme selector",
    defaultValue: "light",
    toolbar: {
      icon: "paintbrush",
      items: [
        { value: "light", title: "Light" },
        { value: "dark", title: "Dark" },
      ],
    },
  },
}

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
