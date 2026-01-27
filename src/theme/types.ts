/* eslint-disable @typescript-eslint/no-explicit-any */
import { SupportedColorScheme } from '@mui/material'

type Theme =
  | {
      cssVarPrefix?: string
      colorSchemes: Record<SupportedColorScheme, Record<string, any>>
    }
  | {
      $$material: {
        cssVarPrefix?: string
        colorSchemes: Record<SupportedColorScheme, Record<string, any>>
      }
    }
  | undefined

export type { Theme }
