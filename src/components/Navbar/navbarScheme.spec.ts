import { colorSchemas, navbar } from '../../theme/colorSchemes'
import { navbarScheme } from './Navbar.styled'

describe('navbarScheme', () => {
  it('reads the navbar tokens off the palette', () => {
    expect(navbarScheme({ palette: { _components: { navbar: navbar.light } } })).toBe(navbar.light)
    expect(navbarScheme({ palette: { _components: { navbar: navbar.dark } } })).toBe(navbar.dark)
  })

  // A palette from outside this library has no _components, but it does have a
  // mode -- honour it rather than forcing the bar dark.
  it('falls back to palette.mode when the palette carries no _components', () => {
    expect(navbarScheme({ palette: { mode: 'light' } })).toBe(navbar.light)
    expect(navbarScheme({ palette: { mode: 'dark' } })).toBe(navbar.dark)
    expect(navbarScheme({ palette: { mode: 'light', _components: {} } })).toBe(navbar.light)
  })

  // The navbar must keep rendering when it is mounted outside DclThemeProvider,
  // where emotion hands the styled callbacks an empty theme object.
  it('falls back to the dark tokens when there is nothing to read', () => {
    expect(navbarScheme()).toBe(navbar.dark)
    expect(navbarScheme({})).toBe(navbar.dark)
    expect(navbarScheme({ palette: {} })).toBe(navbar.dark)
  })
})

describe('colorSchemas', () => {
  // Guards the wiring the navbar depends on: drop `navbar: navbar.<scheme>` from
  // either palette and every bar silently falls back to the dark tokens with no
  // type or runtime error. This asserts the palette input only -- that the key
  // then survives createPalette -> extendTheme -> CssVarsProvider is verified by
  // reading the rendered computed style, since jest cannot import src/theme
  // (MUI ships ESM at its package root and components.ts imports font files).
  it.each(['light', 'dark'] as const)('registers the %s navbar tokens under _components', scheme => {
    const palette = colorSchemas[scheme].palette as { _components?: { navbar?: unknown } }
    expect(palette._components?.navbar).toBe(navbar[scheme])
  })
})
