import React, { ReactNode } from "react"
import { ThemeProvider as MuiThemeProvider, type Theme } from "@mui/material/styles"
import { CssBaseline } from "@mui/material"

type ThemeProviderProps = {
  theme: Theme
  children: ReactNode
  defaultMode?: "light" | "dark" | "system"
}

const ThemeProvider = React.memo((props: ThemeProviderProps) => (
  <MuiThemeProvider theme={props.theme} defaultMode={props.defaultMode}>
    <CssBaseline />
    {props.children}
  </MuiThemeProvider>
))

export type { ThemeProviderProps }
export { ThemeProvider }
