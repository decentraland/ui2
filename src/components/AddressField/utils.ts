const isValid = (addr = '') => {
  return /^0x[a-fA-F0-9]{40}$/g.test(addr)
}

const shorten = (address?: string) => {
  return address ? address.slice(0, 6) + '...' + address.slice(42 - 5) : ''
}

export { isValid, shorten }
