import '@emotion/react'
import { Theme as MUITheme } from '@mui/material'
import type { Rarity } from '@dcl/schemas'

declare module '@emotion/react' {
  export interface Theme extends MUITheme {
    palette: MUITheme['palette'] & {
      icon: string
      rarities: Record<Rarity, string>
      raritiesText: Record<Rarity, string>
    }
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    muted: true
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    muted: Palette['primary']
  }
  interface PaletteOptions {
    muted?: PaletteOptions['primary']
  }
}

export {}
