import { navbar } from '../../theme/colorSchemes'
import { navbarScheme } from './Navbar.styled'

describe('navbarScheme', () => {
  it('reads the navbar tokens off the palette', () => {
    expect(navbarScheme({ palette: { _components: { navbar: navbar.light } } })).toBe(navbar.light)
    expect(navbarScheme({ palette: { _components: { navbar: navbar.dark } } })).toBe(navbar.dark)
  })

  // The navbar must keep rendering when it is mounted outside DclThemeProvider,
  // where emotion hands the styled callbacks an empty theme object.
  it('falls back to the dark tokens when there is no palette to read', () => {
    expect(navbarScheme()).toBe(navbar.dark)
    expect(navbarScheme({})).toBe(navbar.dark)
    expect(navbarScheme({ palette: {} })).toBe(navbar.dark)
    expect(navbarScheme({ palette: { _components: {} } })).toBe(navbar.dark)
  })
})
