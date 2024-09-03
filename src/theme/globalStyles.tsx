import React from "react"
import { GlobalStyles as MUIGlobalStyles } from "@mui/material"
import { Theme } from "./types"

type GlobalStylesProps = {
  theme: Theme
}

const ALLOWED_CSS_VARS = ["palette", "shape"]

// Recursively extract properties from the theme object and convert them to CSS variables
const extractCssVars = (
  theme: Theme,
  prefix: string = "--mui-"
): Record<string, string> => {
  const cssVars: Record<string, string> = {}
  const traverse = (obj: Theme, currentPrefix: string) => {
    Object.keys(obj).forEach((key) => {
      const newPrefix = `${currentPrefix}${key}`

      // Skip properties that do not match the allowed CSS variables prefix
      if (
        !ALLOWED_CSS_VARS.some((cssVar: string) => newPrefix.startsWith(cssVar))
      ) {
        return
      }

      const value = obj[key]

      // Recursively traverse objects
      if (
        typeof value === "object" &&
        value !== null &&
        !Array.isArray(value)
      ) {
        traverse(value, `${newPrefix}-`)
      } else if (typeof value === "string" || typeof value === "number") {
        cssVars[`${prefix}${newPrefix}`] = value.toString()
      }
    })
  }

  traverse(theme, "")
  return cssVars
}

export const GlobalStyles = React.memo((props: GlobalStylesProps) => {
  const cssVars = extractCssVars(props.theme)

  const globalStyles = {
    ":root": cssVars,
  }

  return <MUIGlobalStyles styles={globalStyles} />
})
