import { PaletteOptions } from '@mui/material'
import { neutral, rarity, rarityLightTheme } from './colors'
import { hexToRgba } from '../utils/colors'

const colorSchemas = {
  light: {
    palette: {
      mode: 'light',
      colorScheme: 'light',
      text: {
        primary: 'rgba(22, 21, 24, 0.9)',
        secondary: 'rgba(22, 21, 24, 0.6)',
        disabled: 'rgba(22, 21, 24, 0.38)',
        _states: {
          hover: 'rgba(22, 21, 24, 0.04)',
          selected: 'rgba(22, 21, 24, 0.08)',
          focus: 'rgba(22, 21, 24, 0.12)',
          focusVisible: 'rgba(22, 21, 24, 0.16)'
        }
      },
      primary: {
        main: '#FF2D55',
        dark: '#F70038',
        light: '#F70038',
        _states: {
          hover: 'rgba(255, 45, 85, 0.08)',
          selected: 'rgba(255, 45, 85, 0.08)',
          focus: 'rgba(255, 45, 85, 0.12)',
          focusVisible: 'rgba(255, 45, 85, 0.16)',
          outlinedBorder: 'rgba(255, 45, 85, 0.32)'
        }
      },
      secondary: {
        main: neutral.gray5,
        dark: neutral.gray3,
        light: neutral.gray4,
        contrast: neutral.gray1,
        outlinedColor: neutral.gray1,
        _states: {
          hover: 'rgba(94, 91, 103, 0.08)',
          selected: 'rgba(94, 91, 103, 0.08)',
          focus: 'rgba(94, 91, 103, 0.12)',
          focusVisible: 'rgba(94, 91, 103, 0.16)',
          outlinedBorder: neutral.gray1
        }
      },
      action: {
        active: 'rgba(22, 21, 24, 0.56)',
        hover: 'rgba(22, 21, 24, 0.08)',
        selected: 'rgba(22, 21, 24, 0.16)',
        focus: 'rgba(22, 21, 24, 0.24)',
        disabled: 'rgba(22, 21, 24, 0.32)',
        disabledBackground: 'rgba(22, 21, 24, 0.12)'
      },
      error: {
        main: '#FB3B3B',
        dark: '#EC303A',
        light: '#E97177',
        _states: {
          hover: 'rgba(251, 59, 59, 0.08)',
          selected: 'rgba(251, 59, 59, 0.16)',
          focusVisible: 'rgba(251, 59, 59, 0.16)',
          outlinedBorder: 'rgba(251, 59, 59, 0.48)'
        },
        contrast: '#FFFFFF'
      },
      warning: {
        main: '#FE9C2A',
        dark: '#F38025',
        light: '#FFB95B',
        _states: {
          hover: 'rgba(244, 130, 33, 0.08)',
          selected: 'rgba(244, 130, 33, 0.08)',
          focusVisible: 'rgba(244, 130, 33, 0.16)',
          outlinedBorder: 'rgba(244, 130, 33, 0.32)'
        }
      },
      info: {
        main: '#2196F3',
        dark: '#1A75D2',
        light: '#63B4F6',
        _states: {
          hover: 'rgba(33, 150, 243, 0.08)',
          focusVisible: 'rgba(33, 150, 243, 0.16)',
          outlinedBorder: 'rgba(33, 150, 243, 0.48)'
        }
      },
      success: {
        main: '#34CE77',
        dark: '#00B453',
        light: '#65D890',
        _states: {
          hover: 'rgba(52, 206, 119, 0.08)',
          selected: 'rgba(52, 206, 119, 0.16)',
          focusVisible: 'rgba(52, 206, 119, 0.16)',
          outlinedBorder: 'rgba(52, 206, 119, 0.32)'
        }
      },
      common: {
        black_states: {
          main: neutral.softBlack1,
          hover: 'rgba(22, 21, 24, 0.04)',
          selected: 'rgba(22, 21, 24, 0.08)',
          focus: 'rgba(22, 21, 24, 0.12)',
          focusVisible: 'rgba(22, 21, 24, 0.3)',
          outlinedBorder: 'rgba(22, 21, 24, 0.5)'
        },
        white_states: {
          main: '#FFFFFF',
          focusVisible: 'rgba(255, 255, 255, 0.3)'
        }
      },
      background: {
        default: '#FFF'
      },
      divider: 'rgba(22, 21, 24, 0.12)',
      _components: {
        avatar: {
          fill: '#A09BA8'
        },
        input: {
          standard: {
            enabledBorder: 'rgba(22, 21, 24, 0.42)',
            hoverBorder: neutral.softBlack1
          },
          filled: {
            enabledFill: 'rgba(22, 21, 24, 0.06)',
            hoverFill: 'rgba(22, 21, 24, 0.09)'
          },
          outlined: {
            enabledBorder: 'rgba(22, 21, 24, 0.23)',
            hoverBorder: neutral.softBlack1
          }
        },
        switch: {
          knobFillEnabled: '#FFFFFF',
          slideFill: neutral.softBlack1,
          knowFillDisabled: '#ECEBED'
        },
        rating: {
          enabledBorder: 'rgba(22, 21, 24, 0.23)',
          activeFill: '#FF2D55'
        },
        snackbar: {
          fill: '#43404A'
        },
        chip: {
          defaultCloseFill: neutral.softBlack1,
          defaultHoverFill: 'rgba(22, 21, 24, 0.12)',
          defaultEnabledBorder: '#A09BA8',
          defaultFocusFill: 'rgba(22, 21, 24, 0.2)'
        },
        tooltip: {
          fill: '#5E5B67'
        },
        backdrop: {
          fill: 'rgba(22, 21, 24, 0.5)'
        },
        appBar: {
          defaultFill: '#ECEBED'
        },
        breadcrumbs: {
          collapseFill: '#ECEBED'
        },
        alert: {
          error: {
            color: '#FB3B3B',
            background: 'rgba(251, 59, 59, 0.16)'
          },
          success: {
            background: '#C1EECF'
          }
        }
      },
      rarities: {
        common: rarityLightTheme.common,
        uncommon: rarityLightTheme.uncommon,
        rare: rarityLightTheme.rare,
        epic: rarityLightTheme.epic,
        legendary: rarityLightTheme.legendary,
        exotic: rarityLightTheme.exotic,
        mythic: rarityLightTheme.mythic,
        unique: rarityLightTheme.unique
      },
      raritiesText: {
        common: '#FFFFFF',
        uncommon: '#FFFFFF',
        rare: '#FFFFFF',
        epic: '#FFFFFF',
        legendary: '#FFFFFF',
        exotic: '#FFFFFF',
        mythic: '#FFFFFF',
        unique: '#FFFFFF'
      },
      icon: '#000'
    } as PaletteOptions
  },
  dark: {
    palette: {
      mode: 'dark',
      colorScheme: 'dark',
      text: {
        primary: 'rgba(240,240,240, 1)',
        secondary: 'rgba(240,240,240, 0.7)',
        disabled: 'rgba(240,240,240, 0.38)',
        _states: {
          hover: 'rgba(240,240,240, 0.08)',
          selected: 'rgba(240,240,240, 0.16)',
          focus: 'rgba(240,240,240, 0.12)',
          focusVisible: 'rgba(240,240,240, 0.3)'
        }
      },
      primary: {
        main: '#FF2D55',
        dark: '#F70038',
        light: '#F26276',
        contrast: '#FFFFFF',
        _states: {
          hover: 'rgba(255, 45, 85, 0.08)',
          selected: 'rgba(255, 45, 85, 0.16)',
          focus: 'rgba(255, 45, 85, 0.12)',
          focusVisible: 'rgba(255, 45, 85, 0.24)',
          outlinedBorder: 'rgba(255, 45, 85, 0.5)'
        }
      },
      secondary: {
        main: neutral.trueWhite,
        dark: neutral.gray4,
        light: neutral.gray4,
        contrast: neutral.softBlack1,
        outlinedColor: neutral.trueWhite,
        _states: {
          hover: 'rgba(255, 255, 255, 0.08)',
          selected: 'rgba(255, 255, 255, 0.16)',
          focus: 'rgba(255, 255, 255, 0.12)',
          focusVisible: 'rgba(255, 255, 255, 0.24)',
          outlinedBorder: neutral.trueWhite
        }
      },
      action: {
        active: 'rgba(256, 256, 256, 0.56)',
        hover: 'rgba(256, 256, 256, 0.08)',
        selected: 'rgba(256, 256, 256, 0.16)',
        focus: 'rgba(256, 256, 256, 0.12)',
        disabled: 'rgba(256, 256, 256, 0.38)',
        disabledBackground: 'rgba(256, 256, 256, 0.12)'
      },
      error: {
        main: '#FB3B3B',
        dark: '#EC303A',
        light: '#E97177',
        _states: {
          hover: 'rgba(251, 59, 59, 0.16)',
          selected: 'rgba(251, 59, 59, 0.24)',
          focusVisible: 'rgba(251, 59, 59, 0.24)',
          outlinedBorder: 'rgba(251, 59, 59, 0.48)'
        },
        contrast: '#FFFFFF'
      },
      warning: {
        main: '#FE9C2A',
        dark: '#F38025',
        light: '#FFB95B',
        contrast: '#FFFFFF',
        _states: {
          hover: 'rgba(244, 130, 33, 0.08)',
          selected: 'rgba(244, 130, 33, 0.16)',
          focusVisible: 'rgba(244, 130, 33, 0.3)',
          outlinedBorder: 'rgba(244, 130, 33, 0.5)'
        }
      },
      info: {
        main: '#2196F3',
        dark: '#1A75D2',
        light: '#63B4F6',
        contrast: '#FFFFFF',
        _states: {
          hover: 'rgba(33, 150, 243, 0.16)',
          selected: 'rgba(33, 150, 243, 0.24)',
          focusVisible: 'rgba(33, 150, 243, 0.32)',
          outlinedBorder: 'rgba(33, 150, 243, 0.48)'
        }
      },
      success: {
        main: '#34CE77',
        dark: '#00B453',
        light: '#65D890',
        contrast: '#FFFFFF',
        _states: {
          hover: 'rgba(52, 206, 119, 0.08)',
          selected: 'rgba(52, 206, 119, 0.24)',
          focusVisible: 'rgba(52, 206, 119, 0.24)',
          outlinedBorder: 'rgba(52, 206, 119, 0.48)'
        }
      },
      common: {
        black_states: {
          main: neutral.softBlack1,
          hover: 'rgba(22, 21, 24, 0.08)',
          selected: 'rgba(22, 21, 24, 0.16)',
          focus: 'rgba(22, 21, 24, 0.12)',
          focusVisible: 'rgba(22, 21, 24, 0.3)',
          outlinedBorder: 'rgba(22, 21, 24, 0.5)'
        },
        white_states: {
          main: 'rgba(255, 255, 255, 0.98)',
          focusVisible: 'rgba(255, 255, 255, 0.16)',
          outlinedBorder: 'rgba(255, 255, 255, 0.32)'
        }
      },
      background: {
        default: neutral.softBlack1,
        paper: '#1D1C20'
      },
      elevation: {
        outlined: 'rgba(255, 255, 255, 0.12)'
      },
      _components: {
        avatar: {
          fill: '#716B7C'
        },
        switch: {
          knobFillEnabled: '#FCFCFC',
          knowFillDisabled: '#716B7C'
        },
        rating: {
          activeFill: '#F70038'
        },
        snackbar: {
          fill: '#322F37'
        },
        chip: {
          defaultEnabledBorder: '#43404A'
        },
        tooltip: {
          fill: '#242129'
        },
        appBar: {
          defaultFill: '#2B292F'
        },
        breadcrumbs: {
          collapseFill: '#716B7C'
        },
        alert: {
          error: {
            color: '#F8919D',
            background: 'rgba(204, 29, 44, 0.24)'
          },
          warning: {
            color: '#FFCD88',
            background: 'rgba(236, 113, 34, 0.24)'
          },
          info: {
            color: '#BBDEFB',
            background: 'rgba(23, 100, 192, 0.24)'
          },
          success: {
            background: 'rgba(0, 161, 70, 0.24)'
          }
        }
      },
      rarities: {
        common: hexToRgba(rarity.common, 0.2),
        uncommon: hexToRgba(rarity.uncommon, 0.2),
        rare: hexToRgba(rarity.rare, 0.2),
        epic: hexToRgba(rarity.epic, 0.2),
        legendary: hexToRgba(rarity.legendary, 0.2),
        exotic: hexToRgba(rarity.exotic, 0.2),
        mythic: hexToRgba(rarity.mythic, 0.2),
        unique: hexToRgba(rarity.unique, 0.2)
      },
      raritiesText: {
        common: rarity.common,
        uncommon: rarity.uncommon,
        rare: rarity.rare,
        epic: rarity.epic,
        legendary: rarity.legendary,
        exotic: rarity.exotic,
        mythic: rarity.mythic,
        unique: rarity.unique
      },
      icon: '#fff'
    } as PaletteOptions
  }
}

export { colorSchemas }
