import { ThemeOptions, createTheme } from "@mui/material/styles"
import createPalette, { Palette } from "@mui/material/styles/createPalette"
import { colorSchemas } from "./colorSchemes"
import { components } from "./components"
import { typography } from "./typography"

function theme(type: "light" | "dark"): ThemeOptions {
  return {
    palette: createPalette(colorSchemas[type].palette),
    typography: typography,
    shape: {
      borderRadius: 6,
    },
    components: components(colorSchemas[type].palette as Palette),
  }
}

const light = createTheme(theme("light"))
const dark = createTheme(theme("dark"))

export { light, dark }
