import {
  ThemeOptions,
  experimental_extendTheme as extendTheme,
} from "@mui/material/styles"
import createPalette, { Palette } from "@mui/material/styles/createPalette"
import { colorSchemas } from "./colorSchemes"
import { components } from "./components"
import { typography } from "./typography"

function theme(type: "light" | "dark"): ThemeOptions {
  const palette = createPalette(colorSchemas[type].palette)

  return {
    ...extendTheme({
      palette,
      typography: typography,
      shape: {
        borderRadius: 6,
      },
      components: components(colorSchemas[type].palette as Palette),
    } as ThemeOptions),
    palette,
  }
}

const light = theme("light")
const dark = theme("dark")

export { light, dark }
