import React, { ReactNode } from 'react'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import type { Theme } from './types'

type ThemeProviderProps = {
  theme: Theme
  children: ReactNode
}

const ThemeProvider = React.memo((props: ThemeProviderProps) => (
  <CssVarsProvider theme={props.theme}>
    <CssBaseline />
    {props.children}
  </CssVarsProvider>
))

export type { ThemeProviderProps }
export { ThemeProvider }
