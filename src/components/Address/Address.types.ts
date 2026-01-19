type AddressProps = {
  value: string
  strong?: boolean
  shorten?: boolean
  tooltip?: boolean
  showCopyButton?: boolean
  onCopy?: (value: string) => void
}

export { AddressProps }
