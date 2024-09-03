import React, { ReactNode } from "react"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles"
import { GlobalStyles } from "./globalStyles"
import { Theme } from "./types"

export type ThemeProviderProps = {
  theme: Theme
  children: ReactNode
}

export const ThemeProvider = React.memo((props: ThemeProviderProps) => (
  <MUIThemeProvider theme={props.theme}>
    <CssBaseline />
    <GlobalStyles theme={props.theme} />
    {props.children}
  </MUIThemeProvider>
))
