import { useCallback, useMemo } from 'react'
import Tooltip from '@mui/material/Tooltip'
import { AddressProps } from './Address.types'
import { AddressContainer, CopyButton, CopyIcon, StyledAddress } from './Address.styled'

const Address = (props: AddressProps) => {
  const { value, strong = false, shorten = true, tooltip = false, showCopyButton = false, onCopy, ...restProps } = props
  const address = useMemo(() => (shorten ? `${value.slice(0, 6)}\u2026${value.slice(-4)}` : value), [value, shorten])

  const handleCopy = useCallback(() => {
    if (onCopy) {
      onCopy(value)
      return
    }

    navigator.clipboard.writeText(value)
  }, [onCopy, value])

  const content = (
    <AddressContainer>
      <StyledAddress as={strong ? 'strong' : 'span'} {...restProps}>
        {address}
      </StyledAddress>
      {showCopyButton ? (
        <CopyButton aria-label="Copy address" size="small" onClick={handleCopy}>
          <CopyIcon />
        </CopyButton>
      ) : null}
    </AddressContainer>
  )

  return tooltip ? (
    <Tooltip title={value} placement="top">
      <span>{content}</span>
    </Tooltip>
  ) : (
    content
  )
}

export { Address }
