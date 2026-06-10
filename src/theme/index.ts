import { type Palette, type Theme, createTheme } from '@mui/material/styles'
import { colorSchemas } from './colorSchemes'
import { components } from './components'
import { ThemeProvider } from './provider'
import { typography } from './typography'

function buildTheme(type: 'light' | 'dark'): Theme {
  return createTheme({
    cssVariables: true,
    palette: colorSchemas[type].palette,
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
  })
}

const light = buildTheme('light')
const dark = buildTheme('dark')

export { light, dark, ThemeProvider }
