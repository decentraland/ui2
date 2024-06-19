import { Components, Palette, Theme } from "@mui/material"

export const components = (
  palette: Palette
): Components<Omit<Theme, "components">> => ({
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        "& ::-webkit-scrollbar-track": {
          background: "rgba(0, 0, 0, .1)",
          borderRadius: 0,
        },
        "& ::-webkit-scrollbar-thumb": {
          cursor: "pointer",
          borderRadius: "5px",
          background: "rgba(0, 0, 0, .25)",
          "-webkit-transition": "color .2s ease",
          transition: "color .2s ease",
        },
        "& ::-webkit-scrollbar": {
          "-webkit-appearance": "none",
          width: "10px",
          height: "10px",
        },
      },
    },
  },
  MuiTabs: {
    styleOverrides: {
      root: {
        borderBottom: `${palette.divider} solid 1px`,
        minHeight: "30px",
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        textTransform: "capitalize",
        color: palette.text.secondary,
        fontWeight: 400,
        "&.Mui-selected": {
          color: palette.text.primary,
          fontWeight: 600,
        },
      },
    },
  },
})
