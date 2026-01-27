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
