import { formatBalance } from './formatBalance'

describe('formatBalance', () => {
  it('groups thousands with commas', () => {
    expect(formatBalance(1234)).toBe('1,234')
    expect(formatBalance(5500000)).toBe('5,500,000')
  })

  it('floors decimals', () => {
    expect(formatBalance(1234.99)).toBe('1,234')
  })

  it('renders zero', () => {
    expect(formatBalance(0)).toBe('0')
  })
})
