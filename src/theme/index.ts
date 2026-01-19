import { createTheme, type Palette } from "@mui/material/styles"
import { colorSchemas } from "./colorSchemes"
import { components } from "./components"
import { ThemeProvider } from "./provider"
import { typography } from "./typography"

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data",
  },
  colorSchemes: {
    light: {
      palette: colorSchemas.light.palette,
    },
    dark: {
      palette: colorSchemas.dark.palette,
    },
  },
  typography: typography,
  shape: {
    borderRadius: 6,
  },
  breakpoints: {
    values: {
      xs: 768,
      sm: 991,
      md: 1024,
      lg: 1280,
      xl: 1500,
    },
  },
  components: components(colorSchemas.light.palette as Palette),
})

const light = theme
const dark = theme

export { light, dark, theme, ThemeProvider }
