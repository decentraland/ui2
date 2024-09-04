import { Components, Palette, Theme, getOverlayAlpha } from "@mui/material"
import RoobertPROBoldotf from "./fonts/RoobertPRO-Bold.otf"
import RoobertPROBoldttf from "./fonts/RoobertPRO-Bold.ttf"

export const components = (
  palette: Palette
): Components<Omit<Theme, "components">> => ({
  MuiCssBaseline: {
    styleOverrides: {
      "@font-face": {
        fontFamily: "DecentralandHero",
        src: `url(${RoobertPROBoldttf}) format("truetype"), url(${RoobertPROBoldotf}) format("otf")`,
        fontStyle: "Sans-serif",
        fontWeight: "700",
      },
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
  MuiAppBar: {
    styleOverrides: {
      root: {
        backdropFilter: "saturate(180%) blur(20px);",
        transition:
          "box-Shadow 200ms cubic-bezier(0,1, 0.15, 1), background-image 200ms cubic-bezier(0,1, 0.15, 1)",
        backgroundImage: "none",
        backgroundColor:
          palette.mode === "dark"
            ? "rgba(24,20,26, 0.9)"
            : "rgba(255,255,255, 0.9)",
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        "&.MuiButton-sizeLarge.MuiButton-containedPrimary": {
          fontFeatureSettings: "'liga' off, 'clig' off",
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.9375rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 160% */",
          letterSpacing: "0.46px",
          textTransform: "uppercase",
          padding: "8px 22px",
          borderRadius: "var(--mui-shape-borderRadius)",
          opacity: "1",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            background: "#FF2D55",
            boxShadow: "none",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-primary-contrast)",
            background: "var(--mui-palette-primary-main)",
            boxShadow: "none",
            "& .MuiTouchRipple-root": {
              width: "69.209px",
              height: "51.429px",
              borderRadius: "100px",
              opacity: "0.3",
              background: "var(--mui-palette-primary-contrast)",
              padding: "0",
              boxShadow: "none",
            },
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-primary-contrast)",
            background: "var(--mui-palette-primary-light)",
            boxShadow: "var(--mui-shadows-2)",
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "#FEE9EC",
            background: "var(--mui-palette-_components-alert-error-color)",
            boxShadow: "none",
          },
        },
        "&.MuiButton-sizeLarge.MuiButton-containedInherit": {
          fontFeatureSettings: "'liga' off, 'clig' off",
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.9375rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 160% */",
          letterSpacing: "0.46px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-text-primary)",
            padding: "8px 22px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "#A09BA8",
            opacity: "1",
            boxShadow: "none",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-text-primary)",
            padding: "8px 22px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "#A09BA8",
            opacity: "1",
            boxShadow: "none",
            "& .MuiTouchRipple-root": {
              width: "69.209px",
              height: "51.429px",
              borderRadius: "100px",
              background: "var(--mui-palette-text-_states-selected)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-text-primary)",
            padding: "8px 22px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "#716B7C",
            boxShadow: "var(--mui-shadows-2)",
            opacity: "1",
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
        },
        "&.MuiButton-sizeLarge.MuiButton-containedInherit (white)": {
          fontFeatureSettings: "'liga' off, 'clig' off",
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.9375rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 160% */",
          letterSpacing: "0.46px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-common-white_states-main)",
            padding: "8px 22px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "#CFCDD4",
            opacity: "1",
            boxShadow: "none",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-common-white_states-main)",
            padding: "8px 22px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "#ECEBED",
            opacity: "1",
            boxShadow: "none",
            "& .MuiTouchRipple-root": {
              width: "69.209px",
              height: "51.429px",
              borderRadius: "100px",
              background: "var(--mui-palette-common-black_states-selected)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-common-white_states-main)",
            padding: "8px 22px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "#A09BA8",
            boxShadow: "var(--mui-shadows-2)",
            opacity: "1",
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
        },
        "&.MuiButton-sizeLarge.MuiButton-containedSecondary": {
          fontFeatureSettings: "'liga' off, 'clig' off",
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.9375rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 160% */",
          letterSpacing: "0.46px",
          textTransform: "uppercase",
          padding: "8px 22px",
          borderRadius: "var(--mui-shape-borderRadius)",
          opacity: "1",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-secondary-contrast)",
            background: "var(--mui-palette-secondary-main)",
            boxShadow: "none",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-secondary-contrast)",
            background: "var(--mui-palette-secondary-main)",
            boxShadow: "none",
            "& .MuiTouchRipple-root": {
              width: "69.209px",
              height: "51.429px",
              borderRadius: "100px",
              opacity: "0.16",
              background: "var(--mui-palette-secondary-contrast)",
              padding: "0",
              boxShadow: "none",
            },
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-secondary-contrast)",
            background: "var(--mui-palette-secondary-light)",
            boxShadow: "var(--mui-shadows-2)",
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
            background: "#A09BA8",
            boxShadow: "none",
          },
        },
        "&.MuiButton-sizeLarge.MuiButton-containedError": {
          fontFeatureSettings: "'liga' off, 'clig' off",
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.9375rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 160% */",
          letterSpacing: "0.46px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-error-contrast)",
            padding: "8px 22px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "var(--mui-palette-error-main)",
            opacity: "1",
            boxShadow: "none",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-error-contrast)",
            padding: "8px 22px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "var(--mui-palette-error-main)",
            opacity: "1",
            boxShadow: "none",
            "& .MuiTouchRipple-root": {
              width: "69.209px",
              height: "51.429px",
              borderRadius: "100px",
              opacity: "0.3",
              background: "var(--mui-palette-error-contrast)",
              padding: "0",
              boxShadow: "none",
            },
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-error-contrast)",
            padding: "8px 22px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "var(--mui-palette-error-dark)",
            boxShadow: "var(--mui-shadows-2)",
            opacity: "1",
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
        },
        "&.MuiButton-sizeLarge.MuiButton-containedWarning": {
          fontFeatureSettings: "'liga' off, 'clig' off",
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.9375rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 160% */",
          letterSpacing: "0.46px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-warning-contrast)",
            padding: "8px 22px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "var(--mui-palette-warning-main)",
            opacity: "1",
            boxShadow: "none",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-warning-contrast)",
            padding: "8px 22px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "var(--mui-palette-warning-main)",
            opacity: "1",
            boxShadow: "none",
            "& .MuiTouchRipple-root": {
              width: "69.209px",
              height: "51.429px",
              borderRadius: "100px",
              opacity: "0.3",
              background: "var(--mui-palette-warning-contrast)",
              padding: "0",
              boxShadow: "none",
            },
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-warning-contrast)",
            padding: "8px 22px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "var(--mui-palette-warning-dark)",
            boxShadow: "var(--mui-shadows-2)",
            opacity: "1",
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
        },
        "&.MuiButton-sizeLarge.MuiButton-containedInfo": {
          fontFeatureSettings: "'liga' off, 'clig' off",
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.9375rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 160% */",
          letterSpacing: "0.46px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-info-contrast)",
            padding: "8px 22px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "var(--mui-palette-info-main)",
            opacity: "1",
            boxShadow: "none",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-info-contrast)",
            padding: "8px 22px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "var(--mui-palette-info-main)",
            opacity: "1",
            boxShadow: "none",
            "& .MuiTouchRipple-root": {
              width: "69.209px",
              height: "51.429px",
              borderRadius: "100px",
              opacity: "0.3",
              background: "var(--mui-palette-info-contrast)",
              padding: "0",
              boxShadow: "none",
            },
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-info-contrast)",
            padding: "8px 22px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "var(--mui-palette-info-dark)",
            boxShadow: "var(--mui-shadows-2)",
            opacity: "1",
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
        },
        "&.MuiButton-sizeLarge.MuiButton-containedSuccess": {
          fontFeatureSettings: "'liga' off, 'clig' off",
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.9375rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 160% */",
          letterSpacing: "0.46px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-success-contrast)",
            padding: "8px 22px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "var(--mui-palette-success-main)",
            opacity: "1",
            boxShadow: "none",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-success-contrast)",
            padding: "8px 22px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "var(--mui-palette-success-main)",
            opacity: "1",
            boxShadow: "none",
            "& .MuiTouchRipple-root": {
              width: "69.209px",
              height: "51.429px",
              borderRadius: "100px",
              opacity: "0.3",
              background: "var(--mui-palette-success-contrast)",
              padding: "0",
              boxShadow: "none",
            },
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-success-contrast)",
            padding: "8px 22px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "var(--mui-palette-success-dark)",
            boxShadow: "var(--mui-shadows-2)",
            opacity: "1",
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
        },
        "&.MuiButton-sizeMedium.MuiButton-containedPrimary": {
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.875rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 171.429% */",
          letterSpacing: "0.4px",
          textTransform: "uppercase",
          padding: "6px 16px",
          borderRadius: "var(--mui-shape-borderRadius)",
          opacity: "1",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            background: "#FF2D55",
            boxShadow: "none",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-primary-contrast)",
            background: "var(--mui-palette-primary-main)",
            boxShadow: "none",
            "& .MuiTouchRipple-root": {
              width: "57.429px",
              height: "46.286px",
              borderRadius: "100px",
              opacity: "0.3",
              background: "var(--mui-palette-primary-contrast)",
              padding: "0",
              boxShadow: "none",
            },
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "#FEE9EC",
            background: "var(--mui-palette-_components-alert-error-color)",
            boxShadow: "none",
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-primary-contrast)",
            background: "var(--mui-palette-primary-light)",
            boxShadow: "var(--mui-shadows-2)",
          },
        },
        "&.MuiButton-sizeMedium.MuiButton-containedInherit": {
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.875rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 171.429% */",
          letterSpacing: "0.4px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-text-primary)",
            padding: "6px 16px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "#A09BA8",
            opacity: "1",
            boxShadow: "none",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-text-primary)",
            padding: "6px 16px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "#A09BA8",
            opacity: "1",
            boxShadow: "none",
            "& .MuiTouchRipple-root": {
              width: "57.429px",
              height: "46.286px",
              borderRadius: "100px",
              background: "var(--mui-palette-text-_states-selected)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-text-primary)",
            padding: "6px 16px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "#716B7C",
            boxShadow: "var(--mui-shadows-2)",
            opacity: "1",
          },
        },
        "&.MuiButton-sizeMedium.MuiButton-containedInherit (white)": {
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.875rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 171.429% */",
          letterSpacing: "0.4px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-common-white_states-main)",
            padding: "6px 16px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "#CFCDD4",
            opacity: "1",
            boxShadow: "none",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-common-white_states-main)",
            padding: "6px 16px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "#ECEBED",
            opacity: "1",
            boxShadow: "none",
            "& .MuiTouchRipple-root": {
              width: "57.429px",
              height: "46.286px",
              borderRadius: "100px",
              background: "var(--mui-palette-common-black_states-selected)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-common-white_states-main)",
            padding: "6px 16px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "#A09BA8",
            boxShadow: "var(--mui-shadows-2)",
            opacity: "1",
          },
        },
        "&.MuiButton-sizeMedium.MuiButton-containedSecondary": {
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.875rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 171.429% */",
          letterSpacing: "0.4px",
          textTransform: "uppercase",
          padding: "6px 16px",
          borderRadius: "var(--mui-shape-borderRadius)",
          opacity: "1",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-secondary-contrast)",
            background: "var(--mui-palette-secondary-main)",
            boxShadow: "none",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-secondary-contrast)",
            background: "var(--mui-palette-secondary-main)",
            boxShadow: "none",
            "& .MuiTouchRipple-root": {
              width: "57.429px",
              height: "46.286px",
              borderRadius: "100px",
              opacity: "0.16",
              background: "var(--mui-palette-secondary-contrast)",
              padding: "0",
              boxShadow: "none",
            },
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
            background: "#A09BA8",
            boxShadow: "none",
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-secondary-contrast)",
            background: "var(--mui-palette-secondary-light)",
            boxShadow: "var(--mui-shadows-2)",
          },
        },
        "&.MuiButton-sizeMedium.MuiButton-containedError": {
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.875rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 171.429% */",
          letterSpacing: "0.4px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-error-contrast)",
            padding: "6px 16px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "var(--mui-palette-error-main)",
            opacity: "1",
            boxShadow: "none",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-error-contrast)",
            padding: "6px 16px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "var(--mui-palette-error-main)",
            opacity: "1",
            boxShadow: "none",
            "& .MuiTouchRipple-root": {
              width: "57.429px",
              height: "46.286px",
              borderRadius: "100px",
              opacity: "0.3",
              background: "var(--mui-palette-error-contrast)",
              padding: "0",
              boxShadow: "none",
            },
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-error-contrast)",
            padding: "6px 16px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "var(--mui-palette-error-dark)",
            boxShadow: "var(--mui-shadows-2)",
            opacity: "1",
          },
        },
        "&.MuiButton-sizeMedium.MuiButton-containedWarning": {
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.875rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 171.429% */",
          letterSpacing: "0.4px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-warning-contrast)",
            padding: "6px 16px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "var(--mui-palette-warning-main)",
            opacity: "1",
            boxShadow: "none",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-warning-contrast)",
            padding: "6px 16px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "var(--mui-palette-warning-main)",
            opacity: "1",
            boxShadow: "none",
            "& .MuiTouchRipple-root": {
              width: "57.429px",
              height: "46.286px",
              borderRadius: "100px",
              opacity: "0.3",
              background: "var(--mui-palette-warning-contrast)",
              padding: "0",
              boxShadow: "none",
            },
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-warning-contrast)",
            padding: "6px 16px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "var(--mui-palette-warning-dark)",
            boxShadow: "var(--mui-shadows-2)",
            opacity: "1",
          },
        },
        "&.MuiButton-sizeMedium.MuiButton-containedInfo": {
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.875rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 171.429% */",
          letterSpacing: "0.4px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-info-contrast)",
            padding: "6px 16px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "var(--mui-palette-info-main)",
            opacity: "1",
            boxShadow: "none",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-info-contrast)",
            padding: "6px 16px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "var(--mui-palette-info-main)",
            opacity: "1",
            boxShadow: "none",
            "& .MuiTouchRipple-root": {
              width: "57.429px",
              height: "46.286px",
              borderRadius: "100px",
              opacity: "0.3",
              background: "var(--mui-palette-info-contrast)",
              padding: "0",
              boxShadow: "none",
            },
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-info-contrast)",
            padding: "6px 16px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "var(--mui-palette-info-dark)",
            boxShadow: "var(--mui-shadows-2)",
            opacity: "1",
          },
        },
        "&.MuiButton-sizeMedium.MuiButton-containedSuccess": {
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.875rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 171.429% */",
          letterSpacing: "0.4px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-success-contrast)",
            padding: "6px 16px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "var(--mui-palette-success-main)",
            opacity: "1",
            boxShadow: "none",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-success-contrast)",
            padding: "6px 16px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "var(--mui-palette-success-main)",
            opacity: "1",
            boxShadow: "none",
            "& .MuiTouchRipple-root": {
              width: "57.429px",
              height: "46.286px",
              borderRadius: "100px",
              opacity: "0.3",
              background: "var(--mui-palette-success-contrast)",
              padding: "0",
              boxShadow: "none",
            },
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-success-contrast)",
            padding: "6px 16px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "var(--mui-palette-success-dark)",
            boxShadow: "var(--mui-shadows-2)",
            opacity: "1",
          },
        },
        "&.MuiButton-sizeSmall.MuiButton-containedPrimary": {
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.8125rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 184.615% */",
          letterSpacing: "0.46px",
          textTransform: "uppercase",
          padding: "4px 10px",
          borderRadius: "var(--mui-shape-borderRadius)",
          opacity: "1",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            background: "#FF2D55",
            boxShadow: "none",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-primary-contrast)",
            background: "var(--mui-palette-primary-main)",
            boxShadow: "none",
            "& .MuiTouchRipple-root": {
              width: "46.385px",
              height: "41.143px",
              borderRadius: "100px",
              opacity: "0.3",
              background: "var(--mui-palette-primary-contrast)",
              padding: "0",
              boxShadow: "none",
            },
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "#FEE9EC",
            background: "var(--mui-palette-_components-alert-error-color)",
            boxShadow: "none",
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-primary-contrast)",
            background: "var(--mui-palette-primary-light)",
            boxShadow: "var(--mui-shadows-2)",
          },
        },
        "&.MuiButton-sizeSmall.MuiButton-containedInherit": {
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.8125rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 184.615% */",
          letterSpacing: "0.46px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-text-primary)",
            padding: "4px 10px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "#A09BA8",
            opacity: "1",
            boxShadow: "none",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-text-primary)",
            padding: "4px 10px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "#A09BA8",
            opacity: "1",
            boxShadow: "none",
            "& .MuiTouchRipple-root": {
              width: "46.385px",
              height: "41.143px",
              borderRadius: "100px",
              background: "var(--mui-palette-text-_states-selected)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-text-primary)",
            padding: "4px 10px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "#716B7C",
            boxShadow: "var(--mui-shadows-2)",
            opacity: "1",
          },
        },
        "&.MuiButton-sizeSmall.MuiButton-containedInherit (white)": {
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.8125rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 184.615% */",
          letterSpacing: "0.46px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-common-white_states-main)",
            padding: "4px 10px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "#CFCDD4",
            opacity: "1",
            boxShadow: "none",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-common-white_states-main)",
            padding: "4px 10px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "#ECEBED",
            opacity: "1",
            boxShadow: "none",
            "& .MuiTouchRipple-root": {
              width: "46.385px",
              height: "41.143px",
              borderRadius: "100px",
              background: "var(--mui-palette-common-black_states-selected)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-common-white_states-main)",
            padding: "4px 10px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "#A09BA8",
            boxShadow: "var(--mui-shadows-2)",
            opacity: "1",
          },
        },
        "&.MuiButton-sizeSmall.MuiButton-containedSecondary": {
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.8125rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 184.615% */",
          letterSpacing: "0.46px",
          textTransform: "uppercase",
          padding: "4px 10px",
          borderRadius: "var(--mui-shape-borderRadius)",
          opacity: "1",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-secondary-contrast)",
            background: "var(--mui-palette-secondary-main)",
            boxShadow: "none",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-secondary-contrast)",
            background: "var(--mui-palette-secondary-main)",
            boxShadow: "none",
            "& .MuiTouchRipple-root": {
              width: "46.385px",
              height: "41.143px",
              borderRadius: "100px",
              opacity: "0.16",
              background: "var(--mui-palette-secondary-contrast)",
              padding: "0",
              boxShadow: "none",
            },
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
            background: "#A09BA8",
            boxShadow: "none",
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-secondary-contrast)",
            background: "var(--mui-palette-secondary-light)",
            boxShadow: "var(--mui-shadows-2)",
          },
        },
        "&.MuiButton-sizeSmall.MuiButton-containedError": {
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.8125rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 184.615% */",
          letterSpacing: "0.46px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-error-contrast)",
            padding: "4px 10px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "var(--mui-palette-error-main)",
            opacity: "1",
            boxShadow: "none",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-error-contrast)",
            padding: "4px 10px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "var(--mui-palette-error-main)",
            opacity: "1",
            boxShadow: "none",
            "& .MuiTouchRipple-root": {
              width: "46.385px",
              height: "41.143px",
              borderRadius: "100px",
              opacity: "0.3",
              background: "var(--mui-palette-error-contrast)",
              padding: "0",
              boxShadow: "none",
            },
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-error-contrast)",
            padding: "4px 10px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "var(--mui-palette-error-dark)",
            boxShadow: "var(--mui-shadows-2)",
            opacity: "1",
          },
        },
        "&.MuiButton-sizeSmall.MuiButton-containedWarning": {
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.8125rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 184.615% */",
          letterSpacing: "0.46px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-warning-contrast)",
            padding: "4px 10px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "var(--mui-palette-warning-main)",
            opacity: "1",
            boxShadow: "none",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-warning-contrast)",
            padding: "4px 10px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "var(--mui-palette-warning-main)",
            opacity: "1",
            boxShadow: "none",
            "& .MuiTouchRipple-root": {
              width: "46.385px",
              height: "41.143px",
              borderRadius: "100px",
              opacity: "0.3",
              background: "var(--mui-palette-warning-contrast)",
              padding: "0",
              boxShadow: "none",
            },
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-warning-contrast)",
            padding: "4px 10px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "var(--mui-palette-warning-dark)",
            boxShadow: "var(--mui-shadows-2)",
            opacity: "1",
          },
        },
        "&.MuiButton-sizeSmall.MuiButton-containedInfo": {
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.8125rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 184.615% */",
          letterSpacing: "0.46px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-info-contrast)",
            padding: "4px 10px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "var(--mui-palette-info-main)",
            opacity: "1",
            boxShadow: "none",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-info-contrast)",
            padding: "4px 10px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "var(--mui-palette-info-main)",
            opacity: "1",
            boxShadow: "none",
            "& .MuiTouchRipple-root": {
              width: "46.385px",
              height: "41.143px",
              borderRadius: "100px",
              opacity: "0.3",
              background: "var(--mui-palette-info-contrast)",
              padding: "0",
              boxShadow: "none",
            },
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-info-contrast)",
            padding: "4px 10px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "var(--mui-palette-info-dark)",
            boxShadow: "var(--mui-shadows-2)",
            opacity: "1",
          },
        },
        "&.MuiButton-sizeSmall.MuiButton-containedSuccess": {
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.8125rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 184.615% */",
          letterSpacing: "0.46px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-success-contrast)",
            padding: "4px 10px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "var(--mui-palette-success-main)",
            opacity: "1",
            boxShadow: "none",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-success-contrast)",
            padding: "4px 10px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "var(--mui-palette-success-main)",
            opacity: "1",
            boxShadow: "none",
            "& .MuiTouchRipple-root": {
              width: "46.385px",
              height: "41.143px",
              borderRadius: "100px",
              opacity: "0.3",
              background: "var(--mui-palette-success-contrast)",
              padding: "0",
              boxShadow: "none",
            },
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-success-contrast)",
            padding: "4px 10px",
            borderRadius: "var(--mui-shape-borderRadius)",
            background: "var(--mui-palette-success-dark)",
            boxShadow: "var(--mui-shadows-2)",
            opacity: "1",
          },
        },
        "&.MuiButton-sizeLarge.MuiButton-outlinedPrimary": {
          fontFeatureSettings: "'liga' off, 'clig' off",
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.9375rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 160% */",
          letterSpacing: "0.46px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-primary-main)",
            "& .MuiTouchRipple-root": {
              width: "69.209px",
              height: "51.429px",
              borderRadius: "100px",
              background: "var(--mui-palette-primary-_states-focusVisible)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-primary-main)",
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
        },
        "&.MuiButton-sizeLarge.MuiButton-outlinedInherit": {
          fontFeatureSettings: "'liga' off, 'clig' off",
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.9375rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 160% */",
          letterSpacing: "0.46px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-text-primary)",
            padding: "8px 22px",
            borderRadius: "var(--mui-shape-borderRadius)",
            border: "1px solid #A09BA8",
            background: "none",
            opacity: "1",
            boxShadow: "none",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-text-primary)",
            padding: "8px 22px",
            borderRadius: "var(--mui-shape-borderRadius)",
            border: "1px solid #A09BA8",
            background: "none",
            opacity: "1",
            boxShadow: "none",
            "& .MuiTouchRipple-root": {
              width: "69.209px",
              height: "51.429px",
              borderRadius: "100px",
              background: "var(--mui-palette-text-_states-focusVisible)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-text-primary)",
            padding: "8px 22px",
            borderRadius: "var(--mui-shape-borderRadius)",
            border: "1px solid #A09BA8",
            background: "var(--mui-palette-action-hover)",
            opacity: "1",
            boxShadow: "none",
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
        },
        "&.MuiButton-sizeLarge.MuiButton-outlinedInherit (white)": {
          fontFeatureSettings: "'liga' off, 'clig' off",
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.9375rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 160% */",
          letterSpacing: "0.46px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-common-white_states-main)",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-common-white_states-main)",
            "& .MuiTouchRipple-root": {
              width: "69.209px",
              height: "51.429px",
              borderRadius: "100px",
              background: "var(--mui-palette-common-white_states-focusVisible)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-common-white_states-main)",
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
        },
        "&.MuiButton-sizeLarge.MuiButton-outlinedSecondary": {
          fontFeatureSettings: "'liga' off, 'clig' off",
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.9375rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 160% */",
          letterSpacing: "0.46px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-secondary-contrast)",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-secondary-contrast)",
            "& .MuiTouchRipple-root": {
              width: "69.209px",
              height: "51.429px",
              borderRadius: "100px",
              background: "var(--mui-palette-secondary-_states-focusVisible)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-secondary-contrast)",
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
        },
        "&.MuiButton-sizeLarge.MuiButton-outlinedError": {
          fontFeatureSettings: "'liga' off, 'clig' off",
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.9375rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 160% */",
          letterSpacing: "0.46px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-error-main)",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-error-main)",
            "& .MuiTouchRipple-root": {
              width: "69.209px",
              height: "51.429px",
              borderRadius: "100px",
              background: "var(--mui-palette-error-_states-focusVisible)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-error-main)",
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
        },
        "&.MuiButton-sizeLarge.MuiButton-outlinedWarning": {
          fontFeatureSettings: "'liga' off, 'clig' off",
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.9375rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 160% */",
          letterSpacing: "0.46px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-warning-main)",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-warning-main)",
            "& .MuiTouchRipple-root": {
              width: "69.209px",
              height: "51.429px",
              borderRadius: "100px",
              background: "var(--mui-palette-warning-_states-focusVisible)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-warning-main)",
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
        },
        "&.MuiButton-sizeLarge.MuiButton-outlinedInfo": {
          fontFeatureSettings: "'liga' off, 'clig' off",
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.9375rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 160% */",
          letterSpacing: "0.46px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-info-main)",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-info-main)",
            "& .MuiTouchRipple-root": {
              width: "69.209px",
              height: "51.429px",
              borderRadius: "100px",
              background: "var(--mui-palette-info-_states-focusVisible)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-info-main)",
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
        },
        "&.MuiButton-sizeLarge.MuiButton-outlinedSuccess": {
          fontFeatureSettings: "'liga' off, 'clig' off",
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.9375rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 160% */",
          letterSpacing: "0.46px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-success-main)",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-success-main)",
            "& .MuiTouchRipple-root": {
              width: "69.209px",
              height: "51.429px",
              borderRadius: "100px",
              background: "var(--mui-palette-success-_states-focusVisible)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-success-main)",
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
        },
        "&.MuiButton-sizeMedium.MuiButton-outlinedPrimary": {
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.875rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 171.429% */",
          letterSpacing: "0.4px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-primary-main)",
            "& .MuiTouchRipple-root": {
              width: "57.429px",
              height: "46.286px",
              borderRadius: "100px",
              background: "var(--mui-palette-primary-_states-focusVisible)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-primary-main)",
          },
        },
        "&.MuiButton-sizeMedium.MuiButton-outlinedInherit": {
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.875rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 171.429% */",
          letterSpacing: "0.4px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-text-primary)",
            padding: "6px 16px",
            borderRadius: "var(--mui-shape-borderRadius)",
            border: "1px solid #A09BA8",
            background: "none",
            opacity: "1",
            boxShadow: "none",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-text-primary)",
            padding: "6px 16px",
            borderRadius: "var(--mui-shape-borderRadius)",
            border: "1px solid #A09BA8",
            background: "none",
            opacity: "1",
            boxShadow: "none",
            "& .MuiTouchRipple-root": {
              width: "57.429px",
              height: "46.286px",
              borderRadius: "100px",
              background: "var(--mui-palette-text-_states-focusVisible)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-text-primary)",
            padding: "6px 16px",
            borderRadius: "var(--mui-shape-borderRadius)",
            border: "1px solid #A09BA8",
            background: "var(--mui-palette-action-hover)",
            opacity: "1",
            boxShadow: "none",
          },
        },
        "&.MuiButton-sizeMedium.MuiButton-outlinedInherit (white)": {
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.875rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 171.429% */",
          letterSpacing: "0.4px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-common-white_states-main)",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-common-white_states-main)",
            "& .MuiTouchRipple-root": {
              width: "57.429px",
              height: "46.286px",
              borderRadius: "100px",
              background: "var(--mui-palette-common-white_states-focusVisible)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-common-white_states-main)",
          },
        },
        "&.MuiButton-sizeMedium.MuiButton-outlinedSecondary": {
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.875rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 171.429% */",
          letterSpacing: "0.4px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-secondary-contrast)",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-secondary-contrast)",
            "& .MuiTouchRipple-root": {
              width: "57.429px",
              height: "46.286px",
              borderRadius: "100px",
              background: "var(--mui-palette-secondary-_states-focusVisible)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-secondary-contrast)",
          },
        },
        "&.MuiButton-sizeMedium.MuiButton-outlinedError": {
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.875rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 171.429% */",
          letterSpacing: "0.4px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-error-main)",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-error-main)",
            "& .MuiTouchRipple-root": {
              width: "57.429px",
              height: "46.286px",
              borderRadius: "100px",
              background: "var(--mui-palette-error-_states-focusVisible)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-error-main)",
          },
        },
        "&.MuiButton-sizeMedium.MuiButton-outlinedWarning": {
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.875rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 171.429% */",
          letterSpacing: "0.4px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-warning-main)",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-warning-main)",
            "& .MuiTouchRipple-root": {
              width: "57.429px",
              height: "46.286px",
              borderRadius: "100px",
              background: "var(--mui-palette-warning-_states-focusVisible)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-warning-main)",
          },
        },
        "&.MuiButton-sizeMedium.MuiButton-outlinedInfo": {
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.875rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 171.429% */",
          letterSpacing: "0.4px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-info-main)",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-info-main)",
            "& .MuiTouchRipple-root": {
              width: "57.429px",
              height: "46.286px",
              borderRadius: "100px",
              background: "var(--mui-palette-info-_states-focusVisible)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-info-main)",
          },
        },
        "&.MuiButton-sizeMedium.MuiButton-outlinedSuccess": {
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.875rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 171.429% */",
          letterSpacing: "0.4px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-success-main)",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-success-main)",
            "& .MuiTouchRipple-root": {
              width: "57.429px",
              height: "46.286px",
              borderRadius: "100px",
              background: "var(--mui-palette-success-_states-focusVisible)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-success-main)",
          },
        },
        "&.MuiButton-sizeSmall.MuiButton-outlinedPrimary": {
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.8125rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 184.615% */",
          letterSpacing: "0.46px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-primary-main)",
            "& .MuiTouchRipple-root": {
              width: "46.385px",
              height: "41.143px",
              borderRadius: "100px",
              background: "var(--mui-palette-primary-_states-focusVisible)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-primary-main)",
          },
        },
        "&.MuiButton-sizeSmall.MuiButton-outlinedInherit": {
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.8125rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 184.615% */",
          letterSpacing: "0.46px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-text-primary)",
            padding: "4px 10px",
            borderRadius: "var(--mui-shape-borderRadius)",
            border: "1px solid #A09BA8",
            background: "none",
            opacity: "1",
            boxShadow: "none",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-text-primary)",
            padding: "4px 10px",
            borderRadius: "var(--mui-shape-borderRadius)",
            border: "1px solid #A09BA8",
            background: "none",
            opacity: "1",
            boxShadow: "none",
            "& .MuiTouchRipple-root": {
              width: "46.385px",
              height: "41.143px",
              borderRadius: "100px",
              background: "var(--mui-palette-text-_states-focusVisible)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-text-primary)",
            padding: "4px 10px",
            borderRadius: "var(--mui-shape-borderRadius)",
            border: "1px solid #A09BA8",
            background: "var(--mui-palette-action-hover)",
            opacity: "1",
            boxShadow: "none",
          },
        },
        "&.MuiButton-sizeSmall.MuiButton-outlinedInherit (white)": {
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.8125rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 184.615% */",
          letterSpacing: "0.46px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-common-white_states-main)",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-common-white_states-main)",
            "& .MuiTouchRipple-root": {
              width: "46.385px",
              height: "41.143px",
              borderRadius: "100px",
              background: "var(--mui-palette-common-white_states-focusVisible)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-common-white_states-main)",
          },
        },
        "&.MuiButton-sizeSmall.MuiButton-outlinedSecondary": {
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.8125rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 184.615% */",
          letterSpacing: "0.46px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-secondary-contrast)",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-secondary-contrast)",
            "& .MuiTouchRipple-root": {
              width: "46.385px",
              height: "41.143px",
              borderRadius: "100px",
              background: "var(--mui-palette-secondary-_states-focusVisible)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-secondary-contrast)",
          },
        },
        "&.MuiButton-sizeSmall.MuiButton-outlinedError": {
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.8125rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 184.615% */",
          letterSpacing: "0.46px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-error-main)",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-error-main)",
            "& .MuiTouchRipple-root": {
              width: "46.385px",
              height: "41.143px",
              borderRadius: "100px",
              background: "var(--mui-palette-error-_states-focusVisible)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-error-main)",
          },
        },
        "&.MuiButton-sizeSmall.MuiButton-outlinedWarning": {
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.8125rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 184.615% */",
          letterSpacing: "0.46px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-warning-main)",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-warning-main)",
            "& .MuiTouchRipple-root": {
              width: "46.385px",
              height: "41.143px",
              borderRadius: "100px",
              background: "var(--mui-palette-warning-_states-focusVisible)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-warning-main)",
          },
        },
        "&.MuiButton-sizeSmall.MuiButton-outlinedInfo": {
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.8125rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 184.615% */",
          letterSpacing: "0.46px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-info-main)",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-info-main)",
            "& .MuiTouchRipple-root": {
              width: "46.385px",
              height: "41.143px",
              borderRadius: "100px",
              background: "var(--mui-palette-info-_states-focusVisible)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-info-main)",
          },
        },
        "&.MuiButton-sizeSmall.MuiButton-outlinedSuccess": {
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.8125rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 184.615% */",
          letterSpacing: "0.46px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-success-main)",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-success-main)",
            "& .MuiTouchRipple-root": {
              width: "46.385px",
              height: "41.143px",
              borderRadius: "100px",
              background: "var(--mui-palette-success-_states-focusVisible)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-success-main)",
          },
        },
        "&.MuiButton-sizeMedium.MuiButton-textPrimary": {
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.875rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 171.429% */",
          letterSpacing: "0.4px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-primary-main)",
            "& .MuiTouchRipple-root": {
              width: "45.648px",
              height: "46.286px",
              borderRadius: "100px",
              background: "var(--mui-palette-primary-_states-focusVisible)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-primary-main)",
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
        },
        "&.MuiButton-sizeMedium.MuiButton-textInherit": {
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.875rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 171.429% */",
          letterSpacing: "0.4px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-text-primary)",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-text-primary)",
            "& .MuiTouchRipple-root": {
              width: "45.648px",
              height: "46.286px",
              borderRadius: "100px",
              background: "var(--mui-palette-text-_states-focusVisible)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-text-primary)",
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
        },
        "&.MuiButton-sizeMedium.MuiButton-textInherit (white)": {
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.875rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 171.429% */",
          letterSpacing: "0.4px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-common-white_states-main)",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-common-white_states-main)",
            "& .MuiTouchRipple-root": {
              width: "45.648px",
              height: "46.286px",
              borderRadius: "100px",
              background: "var(--mui-palette-common-white_states-focusVisible)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-common-white_states-main)",
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
        },
        "&.MuiButton-sizeMedium.MuiButton-textSecondary": {
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.875rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 171.429% */",
          letterSpacing: "0.4px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-secondary-contrast)",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-secondary-contrast)",
            "& .MuiTouchRipple-root": {
              width: "45.648px",
              height: "46.286px",
              borderRadius: "100px",
              background: "var(--mui-palette-secondary-_states-focusVisible)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-secondary-contrast)",
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
        },
        "&.MuiButton-sizeMedium.MuiButton-textError": {
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.875rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 171.429% */",
          letterSpacing: "0.4px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-error-main)",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-error-main)",
            "& .MuiTouchRipple-root": {
              width: "45.648px",
              height: "46.286px",
              borderRadius: "100px",
              background: "var(--mui-palette-error-_states-focusVisible)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-error-main)",
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
        },
        "&.MuiButton-sizeMedium.MuiButton-textWarning": {
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.875rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 171.429% */",
          letterSpacing: "0.4px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-warning-main)",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-warning-main)",
            "& .MuiTouchRipple-root": {
              width: "45.648px",
              height: "46.286px",
              borderRadius: "100px",
              background: "var(--mui-palette-warning-_states-focusVisible)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-warning-main)",
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
        },
        "&.MuiButton-sizeMedium.MuiButton-textInfo": {
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.875rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 171.429% */",
          letterSpacing: "0.4px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-info-main)",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-info-main)",
            "& .MuiTouchRipple-root": {
              width: "45.648px",
              height: "46.286px",
              borderRadius: "100px",
              background: "var(--mui-palette-info-_states-focusVisible)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-info-main)",
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
        },
        "&.MuiButton-sizeMedium.MuiButton-textSuccess": {
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.875rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 171.429% */",
          letterSpacing: "0.4px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-success-main)",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-success-main)",
            "& .MuiTouchRipple-root": {
              width: "45.648px",
              height: "46.286px",
              borderRadius: "100px",
              background: "var(--mui-palette-success-_states-focusVisible)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-success-main)",
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
        },
        "&.MuiButton-sizeLarge.MuiButton-textPrimary": {
          fontFeatureSettings: "'liga' off, 'clig' off",
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.9375rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 160% */",
          letterSpacing: "0.46px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-primary-main)",
            "& .MuiTouchRipple-root": {
              width: "53.011px",
              height: "51.429px",
              borderRadius: "100px",
              background: "var(--mui-palette-primary-_states-focusVisible)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-primary-main)",
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
        },
        "&.MuiButton-sizeLarge.MuiButton-textInherit": {
          fontFeatureSettings: "'liga' off, 'clig' off",
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.9375rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 160% */",
          letterSpacing: "0.46px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-text-primary)",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-text-primary)",
            "& .MuiTouchRipple-root": {
              width: "53.011px",
              height: "51.429px",
              borderRadius: "100px",
              background: "var(--mui-palette-text-_states-focusVisible)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-text-primary)",
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
        },
        "&.MuiButton-sizeLarge.MuiButton-textInherit (white)": {
          fontFeatureSettings: "'liga' off, 'clig' off",
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.9375rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 160% */",
          letterSpacing: "0.46px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-common-white_states-main)",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-common-white_states-main)",
            "& .MuiTouchRipple-root": {
              width: "53.011px",
              height: "51.429px",
              borderRadius: "100px",
              background: "var(--mui-palette-common-white_states-focusVisible)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-common-white_states-main)",
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
        },
        "&.MuiButton-sizeLarge.MuiButton-textSecondary": {
          fontFeatureSettings: "'liga' off, 'clig' off",
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.9375rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 160% */",
          letterSpacing: "0.46px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-secondary-contrast)",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-secondary-contrast)",
            "& .MuiTouchRipple-root": {
              width: "53.011px",
              height: "51.429px",
              borderRadius: "100px",
              background: "var(--mui-palette-secondary-_states-focusVisible)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-secondary-contrast)",
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
        },
        "&.MuiButton-sizeLarge.MuiButton-textError": {
          fontFeatureSettings: "'liga' off, 'clig' off",
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.9375rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 160% */",
          letterSpacing: "0.46px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-error-main)",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-error-main)",
            "& .MuiTouchRipple-root": {
              width: "53.011px",
              height: "51.429px",
              borderRadius: "100px",
              background: "var(--mui-palette-error-_states-focusVisible)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-error-main)",
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
        },
        "&.MuiButton-sizeLarge.MuiButton-textWarning": {
          fontFeatureSettings: "'liga' off, 'clig' off",
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.9375rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 160% */",
          letterSpacing: "0.46px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-warning-main)",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-warning-main)",
            "& .MuiTouchRipple-root": {
              width: "53.011px",
              height: "51.429px",
              borderRadius: "100px",
              background: "var(--mui-palette-warning-_states-focusVisible)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-warning-main)",
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
        },
        "&.MuiButton-sizeLarge.MuiButton-textInfo": {
          fontFeatureSettings: "'liga' off, 'clig' off",
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.9375rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 160% */",
          letterSpacing: "0.46px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-info-main)",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-info-main)",
            "& .MuiTouchRipple-root": {
              width: "53.011px",
              height: "51.429px",
              borderRadius: "100px",
              background: "var(--mui-palette-info-_states-focusVisible)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-info-main)",
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
        },
        "&.MuiButton-sizeLarge.MuiButton-textSuccess": {
          fontFeatureSettings: "'liga' off, 'clig' off",
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.9375rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 160% */",
          letterSpacing: "0.46px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-success-main)",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-success-main)",
            "& .MuiTouchRipple-root": {
              width: "53.011px",
              height: "51.429px",
              borderRadius: "100px",
              background: "var(--mui-palette-success-_states-focusVisible)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-success-main)",
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
        },
        "&.MuiButton-sizeSmall.MuiButton-textPrimary": {
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.8125rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 184.615% */",
          letterSpacing: "0.46px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-primary-main)",
            "& .MuiTouchRipple-root": {
              width: "39.022px",
              height: "41.143px",
              borderRadius: "100px",
              background: "var(--mui-palette-primary-_states-focusVisible)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-primary-main)",
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
        },
        "&.MuiButton-sizeSmall.MuiButton-textInherit": {
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.8125rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 184.615% */",
          letterSpacing: "0.46px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-text-primary)",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-text-primary)",
            "& .MuiTouchRipple-root": {
              width: "39.022px",
              height: "41.143px",
              borderRadius: "100px",
              background: "var(--mui-palette-text-_states-focusVisible)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-text-primary)",
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
        },
        "&.MuiButton-sizeSmall.MuiButton-textInherit (white)": {
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.8125rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 184.615% */",
          letterSpacing: "0.46px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-common-white_states-main)",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-common-white_states-main)",
            "& .MuiTouchRipple-root": {
              width: "39.022px",
              height: "41.143px",
              borderRadius: "100px",
              background: "var(--mui-palette-common-white_states-focusVisible)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-common-white_states-main)",
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
        },
        "&.MuiButton-sizeSmall.MuiButton-textSecondary": {
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.8125rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 184.615% */",
          letterSpacing: "0.46px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-secondary-contrast)",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-secondary-contrast)",
            "& .MuiTouchRipple-root": {
              width: "39.022px",
              height: "41.143px",
              borderRadius: "100px",
              background: "var(--mui-palette-secondary-_states-focusVisible)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-secondary-contrast)",
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
        },
        "&.MuiButton-sizeSmall.MuiButton-textError": {
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.8125rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 184.615% */",
          letterSpacing: "0.46px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-error-main)",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-error-main)",
            "& .MuiTouchRipple-root": {
              width: "39.022px",
              height: "41.143px",
              borderRadius: "100px",
              background: "var(--mui-palette-error-_states-focusVisible)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-error-main)",
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
        },
        "&.MuiButton-sizeSmall.MuiButton-textWarning": {
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.8125rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 184.615% */",
          letterSpacing: "0.46px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-warning-main)",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-warning-main)",
            "& .MuiTouchRipple-root": {
              width: "39.022px",
              height: "41.143px",
              borderRadius: "100px",
              background: "var(--mui-palette-warning-_states-focusVisible)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-warning-main)",
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
        },
        "&.MuiButton-sizeSmall.MuiButton-textInfo": {
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.8125rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 184.615% */",
          letterSpacing: "0.46px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-info-main)",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-info-main)",
            "& .MuiTouchRipple-root": {
              width: "39.022px",
              height: "41.143px",
              borderRadius: "100px",
              background: "var(--mui-palette-info-_states-focusVisible)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-info-main)",
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
        },
        "&.MuiButton-sizeSmall.MuiButton-textSuccess": {
          fontFamily: "Inter, Helvetica, Arial, sans-serif",
          fontSize: "0.8125rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "24px /* 184.615% */",
          letterSpacing: "0.46px",
          textTransform: "uppercase",
          "&:not(.Mui-disabled):not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-success-main)",
          },
          "&:not(.Mui-disabled).Mui-focusVisible:not(:hover)": {
            color: "var(--mui-palette-success-main)",
            "& .MuiTouchRipple-root": {
              width: "39.022px",
              height: "41.143px",
              borderRadius: "100px",
              background: "var(--mui-palette-success-_states-focusVisible)",
              padding: "0",
              opacity: "1",
              boxShadow: "none",
            },
          },
          "&:not(.Mui-disabled):not(.Mui-focusVisible):hover": {
            color: "var(--mui-palette-success-main)",
          },
          "&.Mui-disabled:not(.Mui-focusVisible):not(:hover)": {
            color: "var(--mui-palette-action-disabled)",
          },
        },
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundColor: palette.background.paper,
      },
      elevation0: {
        backgroundImage:
          palette.mode === "dark"
            ? `linear-gradient(rgba(255, 255, 255, ${getOverlayAlpha(0)}), rgba(255, 255, 255, ${getOverlayAlpha(0)}))`
            : "none",
      },
      elevation1: {
        backgroundImage:
          palette.mode === "dark"
            ? `linear-gradient(rgba(255, 255, 255, ${getOverlayAlpha(1)}), rgba(255, 255, 255, ${getOverlayAlpha(1)}))`
            : "none",
      },
      elevation2: {
        backgroundImage:
          palette.mode === "dark"
            ? `linear-gradient(rgba(255, 255, 255, ${getOverlayAlpha(2)}), rgba(255, 255, 255, ${getOverlayAlpha(2)}))`
            : "none",
      },
      elevation3: {
        backgroundImage:
          palette.mode === "dark"
            ? `linear-gradient(rgba(255, 255, 255, ${getOverlayAlpha(3)}), rgba(255, 255, 255, ${getOverlayAlpha(3)}))`
            : "none",
      },
      elevation4: {
        backgroundImage:
          palette.mode === "dark"
            ? `linear-gradient(rgba(255, 255, 255, ${getOverlayAlpha(4)}), rgba(255, 255, 255, ${getOverlayAlpha(4)}))`
            : "none",
      },
      elevation5: {
        backgroundImage:
          palette.mode === "dark"
            ? `linear-gradient(rgba(255, 255, 255, ${getOverlayAlpha(5)}), rgba(255, 255, 255, ${getOverlayAlpha(5)}))`
            : "none",
      },
      elevation6: {
        backgroundImage:
          palette.mode === "dark"
            ? `linear-gradient(rgba(255, 255, 255, ${getOverlayAlpha(6)}), rgba(255, 255, 255, ${getOverlayAlpha(6)}))`
            : "none",
      },
      elevation7: {
        backgroundImage:
          palette.mode === "dark"
            ? `linear-gradient(rgba(255, 255, 255, ${getOverlayAlpha(7)}), rgba(255, 255, 255, ${getOverlayAlpha(7)}))`
            : "none",
      },
      elevation8: {
        backgroundImage:
          palette.mode === "dark"
            ? `linear-gradient(rgba(255, 255, 255, ${getOverlayAlpha(8)}), rgba(255, 255, 255, ${getOverlayAlpha(8)}))`
            : "none",
      },
      elevation9: {
        backgroundImage:
          palette.mode === "dark"
            ? `linear-gradient(rgba(255, 255, 255, ${getOverlayAlpha(9)}), rgba(255, 255, 255, ${getOverlayAlpha(9)}))`
            : "none",
      },
      elevation10: {
        backgroundImage:
          palette.mode === "dark"
            ? `linear-gradient(rgba(255, 255, 255, ${getOverlayAlpha(10)}), rgba(255, 255, 255, ${getOverlayAlpha(10)}))`
            : "none",
      },
      elevation11: {
        backgroundImage:
          palette.mode === "dark"
            ? `linear-gradient(rgba(255, 255, 255, ${getOverlayAlpha(11)}), rgba(255, 255, 255, ${getOverlayAlpha(11)}))`
            : "none",
      },
      elevation12: {
        backgroundImage:
          palette.mode === "dark"
            ? `linear-gradient(rgba(255, 255, 255, ${getOverlayAlpha(12)}), rgba(255, 255, 255, ${getOverlayAlpha(12)}))`
            : "none",
      },
      elevation13: {
        backgroundImage:
          palette.mode === "dark"
            ? `linear-gradient(rgba(255, 255, 255, ${getOverlayAlpha(13)}), rgba(255, 255, 255, ${getOverlayAlpha(13)}))`
            : "none",
      },
      elevation14: {
        backgroundImage:
          palette.mode === "dark"
            ? `linear-gradient(rgba(255, 255, 255, ${getOverlayAlpha(14)}), rgba(255, 255, 255, ${getOverlayAlpha(14)}))`
            : "none",
      },
      elevation15: {
        backgroundImage:
          palette.mode === "dark"
            ? `linear-gradient(rgba(255, 255, 255, ${getOverlayAlpha(15)}), rgba(255, 255, 255, ${getOverlayAlpha(15)}))`
            : "none",
      },
      elevation16: {
        backgroundImage:
          palette.mode === "dark"
            ? `linear-gradient(rgba(255, 255, 255, ${getOverlayAlpha(16)}), rgba(255, 255, 255, ${getOverlayAlpha(16)}))`
            : "none",
      },
      elevation17: {
        backgroundImage:
          palette.mode === "dark"
            ? `linear-gradient(rgba(255, 255, 255, ${getOverlayAlpha(17)}), rgba(255, 255, 255, ${getOverlayAlpha(17)}))`
            : "none",
      },
      elevation18: {
        backgroundImage:
          palette.mode === "dark"
            ? `linear-gradient(rgba(255, 255, 255, ${getOverlayAlpha(18)}), rgba(255, 255, 255, ${getOverlayAlpha(18)}))`
            : "none",
      },
      elevation19: {
        backgroundImage:
          palette.mode === "dark"
            ? `linear-gradient(rgba(255, 255, 255, ${getOverlayAlpha(19)}), rgba(255, 255, 255, ${getOverlayAlpha(19)}))`
            : "none",
      },
      elevation20: {
        backgroundImage:
          palette.mode === "dark"
            ? `linear-gradient(rgba(255, 255, 255, ${getOverlayAlpha(20)}), rgba(255, 255, 255, ${getOverlayAlpha(20)}))`
            : "none",
      },
      elevation21: {
        backgroundImage:
          palette.mode === "dark"
            ? `linear-gradient(rgba(255, 255, 255, ${getOverlayAlpha(21)}), rgba(255, 255, 255, ${getOverlayAlpha(21)}))`
            : "none",
      },
      elevation22: {
        backgroundImage:
          palette.mode === "dark"
            ? `linear-gradient(rgba(255, 255, 255, ${getOverlayAlpha(22)}), rgba(255, 255, 255, ${getOverlayAlpha(22)}))`
            : "none",
      },
      elevation23: {
        backgroundImage:
          palette.mode === "dark"
            ? `linear-gradient(rgba(255, 255, 255, ${getOverlayAlpha(23)}), rgba(255, 255, 255, ${getOverlayAlpha(23)}))`
            : "none",
      },
      elevation24: {
        backgroundImage:
          palette.mode === "dark"
            ? `linear-gradient(rgba(255, 255, 255, ${getOverlayAlpha(24)}), rgba(255, 255, 255, ${getOverlayAlpha(24)}))`
            : "none",
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
