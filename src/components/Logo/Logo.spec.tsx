import { ThemeProvider, createTheme } from '@mui/material/styles'
import { renderToStaticMarkup } from 'react-dom/server'
import { Logo } from './Logo'

const render = (node: React.ReactNode) => renderToStaticMarkup(<ThemeProvider theme={createTheme()}>{node}</ThemeProvider>)

const getGradientIds = (markup: string) => [...markup.matchAll(/<linearGradient id="([^"]+)"/g)].map(([, id]) => id)
const getFillReferences = (markup: string) => [...markup.matchAll(/fill="url\(#([^)]+)\)"/g)].map(([, id]) => id)

describe('when rendering a Logo', () => {
  let markup: string

  beforeEach(() => {
    markup = render(<Logo />)
  })

  it('should fill every gradient shape with a gradient defined in the same svg', () => {
    const ids = getGradientIds(markup)

    expect(ids).toHaveLength(3)
    expect(getFillReferences(markup).sort()).toEqual([...ids].sort())
  })

  it('should not use characters in the gradient ids that need escaping inside url()', () => {
    getGradientIds(markup).forEach(id => expect(id).toMatch(/^[A-Za-z0-9_-]+$/))
  })
})

describe('when rendering two Logos on the same page', () => {
  let markup: string

  beforeEach(() => {
    markup = render(
      <>
        <div style={{ display: 'none' }}>
          <Logo />
        </div>
        <Logo />
      </>
    )
  })

  it('should give each one its own gradient ids', () => {
    const ids = getGradientIds(markup)

    expect(ids).toHaveLength(6)
    expect(new Set(ids).size).toBe(6)
  })

  it('should point the fills of each Logo to ids that exist exactly once', () => {
    const ids = getGradientIds(markup)

    getFillReferences(markup).forEach(reference => expect(ids.filter(id => id === reference)).toHaveLength(1))
  })
})
