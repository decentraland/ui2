import { PaletteOptions } from "@mui/material"

export const colorSchemas = {
  light: {
    palette: {
      text: {
        primary: "rgba(22, 21, 24, 0.9)",
        secondary: "rgba(22, 21, 24, 0.6)",
        disabled: "rgba(22, 21, 24, 0.38)",
        _states: {
          hover: "rgba(22, 21, 24, 0.04)",
          selected: "rgba(22, 21, 24, 0.08)",
          focus: "rgba(22, 21, 24, 0.12)",
          focusVisible: "rgba(22, 21, 24, 0.3)",
        },
      },
      primary: {
        main: "#FF2D54",
        dark: "#D80029",
        light: "#FF2D54",
        _states: {
          hover: "rgba(255, 45, 84, 0.04)",
          selected: "rgba(255, 45, 84, 0.08)",
          focus: "rgba(255, 45, 84, 0.12)",
          focusVisible: "rgba(255, 45, 84, 0.3)",
          outlinedBorder: "rgba(255, 45, 84, 0.5)",
        },
      },
      secondary: {
        main: "#ECEBED",
        dark: "#A09BA8",
        light: "#CFCDD4",
        contrast: "#716B7C",
        _states: {
          hover: "rgba(160, 155, 168, 0.08)",
          selected: "rgba(160, 155, 168, 0.08)",
          focus: "rgba(160, 155, 168, 0.12)",
          focusVisible: "rgba(160, 155, 168, 0.3)",
          outlinedBorder: "#A09BA8",
        },
      },
      action: {
        active: "rgba(22, 21, 24, 0.56)",
        hover: "rgba(22, 21, 24, 0.04)",
        selected: "rgba(22, 21, 24, 0.08)",
        focus: "rgba(22, 21, 24, 0.12)",
        disabled: "rgba(22, 21, 24, 0.38)",
        disabledBackground: "rgba(22, 21, 24, 0.12)",
      },
      error: {
        main: "#E53835",
        dark: "#B71A1C",
        light: "#F8919D",
        _states: {
          hover: "rgba(229, 56, 53, 0.04)",
          selected: "rgba(229, 56, 53, 0.08)",
          focusVisible: "rgba(229, 56, 53, 0.3)",
          outlinedBorder: "rgba(229, 56, 53, 0.5)",
        },
        contrast: "#FFFFFF",
      },
      warning: {
        main: "#FB8A00",
        dark: "#E64F01",
        light: "#FB8A00",
        _states: {
          hover: "rgba(239, 106, 1, 0.04)",
          selected: "rgba(239, 106, 1, 0.08)",
          focusVisible: "rgba(239, 106, 1, 0.3)",
          outlinedBorder: "rgba(239, 106, 1, 0.5)",
        },
      },
      info: {
        main: "#00BBD4",
        dark: "#00828F",
        light: "#4DCFE1",
        _states: {
          hover: "rgba(0, 187, 212, 0.04)",
          selected: "rgba(0, 187, 212, 0.08)",
          focusVisible: "rgba(0, 187, 212, 0.3)",
          outlinedBorder: "rgba(0, 187, 212, 0.5)",
        },
      },
      success: {
        main: "#4CAF50",
        dark: "#2E7D31",
        _states: {
          focusVisible: "rgba(46, 125, 50, 0.3)",
        },
      },
      common: {
        black_states: {
          main: "#161518",
          hover: "rgba(22, 21, 24, 0.04)",
          selected: "rgba(22, 21, 24, 0.08)",
          focus: "rgba(22, 21, 24, 0.12)",
          focusVisible: "rgba(22, 21, 24, 0.3)",
          outlinedBorder: "rgba(22, 21, 24, 0.5)",
        },
        white_states: {
          main: "#FFFFFF",
          focusVisible: "rgba(255, 255, 255, 0.3)",
        },
      },
      background: {
        default: "#FCFCFC",
      },
      divider: "rgba(22, 21, 24, 0.12)",
      _components: {
        input: {
          standard: {
            enabledBorder: "rgba(22, 21, 24, 0.42)",
            hoverBorder: "#161518",
          },
          filled: {
            enabledFill: "rgba(22, 21, 24, 0.06)",
            hoverFill: "rgba(22, 21, 24, 0.09)",
          },
          outlined: {
            enabledBorder: "rgba(22, 21, 24, 0.23)",
            hoverBorder: "#161518",
          },
        },
        switch: {
          slideFill: "#161518",
        },
        rating: {
          enabledBorder: "rgba(22, 21, 24, 0.23)",
          activeFill: "#FF2D54",
        },
        chip: {
          defaultCloseFill: "#161518",
          defaultHoverFill: "rgba(22, 21, 24, 0.12)",
          defaultFocusFill: "rgba(22, 21, 24, 0.2)",
        },
        tooltip: {
          fill: "#A09BA8",
        },
        backdrop: {
          fill: "rgba(22, 21, 24, 0.2)",
        },
        alert: {
          error: {
            color: "#E53835",
            background: "rgba(229, 56, 53, 0.16)",
          },
          warning: {
            color: "#E64F01",
            background: "#FFDFB2",
          },
          info: {
            color: "#00828F",
            background: "#B2EBF2",
          },
          success: {
            color: "#2E7D31",
            background: "#C8E6C9",
          },
        },
      },
    } as PaletteOptions,
  },
  dark: {
    palette: {
      primary: {
        main: "#FF2D54",
        dark: "#D80029",
        light: "#FFC9D5",
        contrast: "#FFFFFF",
        _states: {
          hover: "rgba(255, 45, 84, 0.24)",
          selected: "rgba(255, 45, 84, 0.32)",
          focus: "rgba(255, 45, 84, 0.4)",
          focusVisible: "rgba(255, 45, 84, 0.48)",
          outlinedBorder: "rgba(255, 45, 84, 0.56)",
        },
      },
      secondary: {
        main: "#716B7C",
        dark: "#A09BA8",
        light: "#CFCDD4",
        contrast: "#ECEBED",
        _states: {
          hover: "rgba(226, 224, 231, 0.08)",
          selected: "rgba(226, 224, 231, 0.16)",
          focus: "rgba(226, 224, 231, 0.12)",
          focusVisible: "rgba(226, 224, 231, 0.3)",
          outlinedBorder: "rgba(226, 224, 231, 0.5)",
        },
      },
      error: {
        main: "#D32E2F",
        dark: "#B71A1C",
        light: "#FFCDD2",
        _states: {
          hover: "rgba(211, 46, 47, 0.08)",
          selected: "rgba(211, 46, 47, 0.16)",
          focusVisible: "rgba(211, 46, 47, 0.3)",
          outlinedBorder: "rgba(211, 46, 47, 0.5)",
        },
        contrast: "#FFFFFF",
      },
      warning: {
        main: "#EF6A01",
        dark: "#E64F01",
        light: "#FFB64C",
        contrast: "rgba(255, 255, 255, 0.87)",
        _states: {
          hover: "rgba(255, 182, 76, 0.08)",
          selected: "rgba(255, 182, 76, 0.16)",
          focusVisible: "rgba(255, 182, 76, 0.3)",
          outlinedBorder: "rgba(255, 182, 76, 0.5)",
        },
      },
      info: {
        main: "#0096A7",
        dark: "#00828F",
        light: "#B2EBF2",
        contrast: "#FFFFFF",
        _states: {
          hover: "rgba(77, 207, 225, 0.08)",
          selected: "rgba(77, 207, 225, 0.16)",
          focusVisible: "rgba(77, 207, 225, 0.3)",
          outlinedBorder: "rgba(77, 207, 225, 0.5)",
        },
      },
      success: {
        main: "#81C783",
        dark: "#00B453",
        light: "#81C783",
        contrast: "#FFFFFF",
        _states: {
          focusVisible: "rgba(102, 187, 106, 0.3)",
        },
      },
      common: {
        black_states: {
          main: "#161518",
          hover: "rgba(22, 21, 24, 0.08)",
          selected: "rgba(22, 21, 24, 0.16)",
          focus: "rgba(22, 21, 24, 0.12)",
          focusVisible: "rgba(22, 21, 24, 0.3)",
          outlinedBorder: "rgba(22, 21, 24, 0.5)",
        },
        white_states: {
          main: "#FFFFFF",
          focusVisible: "rgba(255, 255, 255, 0.3)",
        },
      },
      background: {
        default: "#161518",
        "paper-elevation-0": "#1D1C20",
        "paper-elevation-1": "#201F24",
        "paper-elevation-2": "#242227",
        "paper-elevation-3": "#27262B",
        "paper-elevation-4": "#2B292F",
        "paper-elevation-5": "#2E2C33",
        "paper-elevation-6": "#322F37",
        "paper-elevation-7": "#322F37",
        "paper-elevation-8": "#35333B",
        "paper-elevation-9": "#35333B",
        "paper-elevation-10": "#39363E",
        "paper-elevation-11": "#39363E",
        "paper-elevation-12": "#3C3942",
        "paper-elevation-13": "#3C3942",
        "paper-elevation-14": "#3C3942",
        "paper-elevation-15": "#3C3942",
        "paper-elevation-16": "#403D46",
        "paper-elevation-17": "#403D46",
        "paper-elevation-18": "#403D46",
        "paper-elevation-19": "#403D46",
        "paper-elevation-20": "#43404A",
        "paper-elevation-21": "#43404A",
        "paper-elevation-22": "#43404A",
        "paper-elevation-23": "#43404A",
        "paper-elevation-24": "#43404A",
      },
      elevation: {
        outlined: "rgba(22, 21, 24, 0.12)",
      },
      _components: {
        rating: {
          activeFill: "#FF2D54",
        },
        backdrop: {
          fill: "#1D1C20",
        },
        alert: {
          error: {
            color: "#FFCDD2",
            background: "rgba(183, 26, 28, 0.16)",
          },
          warning: {
            color: "#FFDFB2",
            background: "rgba(230, 79, 1, 0.24)",
          },
          info: {
            color: "#B2EBF2",
            background: "rgba(0, 130, 143, 0.24)",
          },
          success: {
            color: "#C8E6C9",
            background: "rgba(46, 125, 49, 0.24)",
          },
        },
      },
    } as PaletteOptions,
  },
}
