import "@emotion/react"
import { Theme as MUITheme } from "@mui/material"

declare module "@emotion/react" {
  export interface Theme extends MUITheme {
    palette: MUITheme["palette"] & {
      icon: string
    }
  }
}

declare module "@emotion/styled" {
  interface CSSObject {
    position?: "absolute" | "relative" | "fixed" | "sticky" | "static"
    flexDirection?: "row" | "column" | "row-reverse" | "column-reverse"
  }
}
