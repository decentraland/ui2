import "@emotion/react"
import "@mui/material/styles"
import { Theme as MUITheme } from "@mui/material"
import type { Rarity } from "@dcl/schemas"

declare module "@emotion/react" {
  export interface Theme extends MUITheme {
    palette: MUITheme["palette"] & {
      icon: string
      rarities: Record<Rarity, string>
      raritiesText: Record<Rarity, string>
    }
  }
}

declare module "@emotion/styled" {
  interface CSSObject {
    position?: "absolute" | "relative" | "fixed" | "sticky" | "static"
    flexDirection?: "row" | "column" | "row-reverse" | "column-reverse"
    textTransform?:
      | "none"
      | "capitalize"
      | "uppercase"
      | "lowercase"
      | "initial"
    display?:
      | "flex"
      | "inline-flex"
      | "block"
      | "inline-block"
      | "none"
      | "inherit"
      | "inline"
    alignItems?: "center" | "flex-start" | "flex-end" | "stretch"
    justifyContent?: "center" | "flex-start" | "flex-end" | "space-between"
    verticalAlign?: "middle" | "top" | "bottom" | "text-top" | "text-bottom"
    overflowX?: "hidden" | "auto" | "scroll" | "visible" | "inherit"
    overflowY?: "hidden" | "auto" | "scroll" | "visible" | "inherit" | "default"
    overscrollBehaviorY?:
      | "auto"
      | "contain"
      | "none"
      | "initial"
      | "unset"
      | "default"
    maxHeight?: string
    width?: string
    height?: string
  }
}
