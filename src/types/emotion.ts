import '@emotion/react'
import { Theme as MUITheme } from '@mui/material'
import type { NavbarTokens } from '../theme/colorSchemes'
import type { Rarity } from '@dcl/schemas'

declare module '@emotion/react' {
  export interface Theme extends MUITheme {
    palette: MUITheme['palette'] & {
      icon: string
      rarities: Record<Rarity, string>
      raritiesText: Record<Rarity, string>
      // Optional on purpose: `Theme` is re-exported from src/index.ts, so making
      // this required would break any consumer that builds a Theme-shaped value
      // (CLAUDE.md §12 — never tighten an existing public type). Read it with
      // optional chaining and a fallback.
      _components?: { navbar: NavbarTokens }
    }
  }
}

export {}
