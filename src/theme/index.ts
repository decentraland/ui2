import { experimental_extendTheme as extendTheme } from "@mui/material/styles"
import createPalette, { Palette } from "@mui/material/styles/createPalette"
import { colorSchemas } from "./colorSchemes"
import { components } from "./components"
import { ThemeProvider } from "./provider"
import { typography } from "./typography"
import type { Theme } from "./types"

function theme(type: "light" | "dark"): Theme {
  const palette = createPalette(colorSchemas[type].palette)

  return {
    ...extendTheme({
      palette,
      typography: typography,
      shape: {
        borderRadius: 6,
      },
      components: components(colorSchemas[type].palette as Palette),
      getColorSchemeSelector: (type: string) => colorSchemas[type],
    } as Theme),
    palette,
  } as Theme
}

const light = theme("light")
const dark = theme("dark")

export { light, dark, ThemeProvider }
