import { ThemeOptions, experimental_extendTheme as extendTheme } from '@mui/material/styles'
import createPalette, { Palette } from '@mui/material/styles/createPalette'
import { colorSchemas } from './colorSchemes'
import { components } from './components'
import { ThemeProvider } from './provider'
import { typography } from './typography'

function theme(type: 'light' | 'dark'): ThemeOptions {
  return {
    palette: createPalette(colorSchemas[type].palette),
    typography: typography,
    shape: {
      borderRadius: 6
    },
    breakpoints: {
      values: {
        xs: 768,
        sm: 991,
        md: 1024,
        lg: 1280,
        xl: 1500
      }
    },
    components: components(colorSchemas[type].palette as Palette)
  }
}

const light = extendTheme(theme('light'))
const dark = extendTheme(theme('dark'))

export { light, dark, ThemeProvider }
