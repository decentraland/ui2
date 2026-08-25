import { navbarScheme } from './Navbar.styled'

describe('navbarScheme', () => {
  it('returns the light tokens when the theme is in light mode', () => {
    const scheme = navbarScheme({ palette: { mode: 'light' } })
    expect(scheme.backdropDesktop).toBe('rgba(255, 255, 255, 0.4)')
    expect(scheme.backdropMobile).toBe('rgba(255, 255, 255, 0.75)')
  })

  it('returns the dark tokens when the theme is in dark mode', () => {
    const scheme = navbarScheme({ palette: { mode: 'dark' } })
    expect(scheme.backdropDesktop).toBe('rgba(22, 21, 24, 0.4)')
    expect(scheme.backdropMobile).toBe('rgba(22, 21, 24, 0.75)')
  })

  // The navbar must keep rendering when it is mounted outside DclThemeProvider,
  // where emotion hands the styled callbacks an empty theme object.
  it('falls back to the dark tokens when the theme carries no mode', () => {
    expect(navbarScheme()).toBe(navbarScheme({ palette: { mode: 'dark' } }))
    expect(navbarScheme({})).toBe(navbarScheme({ palette: { mode: 'dark' } }))
    expect(navbarScheme({ palette: {} })).toBe(navbarScheme({ palette: { mode: 'dark' } }))
  })
})
