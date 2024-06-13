import { ThemeOptions, createTheme } from "@mui/material/styles"
import createPalette from "@mui/material/styles/createPalette"
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
    components: components,
  }
}

export const light = createTheme(theme("light"))
export const dark = createTheme(theme("dark"))
