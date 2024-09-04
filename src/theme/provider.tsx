import React, { ReactNode } from "react"
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles"
import { CssBaseline } from "@mui/material"
import type { Theme } from "./types"

export type ThemeProviderProps = {
  theme: Theme
  children: ReactNode
}

export const ThemeProvider = React.memo((props: ThemeProviderProps) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <CssVarsProvider theme={props.theme as any}>
    <CssBaseline />
    {props.children}
  </CssVarsProvider>
))
