import { useMemo } from "react"
import Tooltip from "@mui/material/Tooltip"
import { AddressProps } from "./Address.types"
import { StyledAddress } from "./Address.styled"

const Address = (props: AddressProps) => {
  const {
    value,
    strong = false,
    shorten = true,
    tooltip = false,
    ...restProps
  } = props
  const address = useMemo(
    () => (shorten ? `${value.slice(0, 6)}\u2026${value.slice(-4)}` : value),
    [value, shorten]
  )

  const content = (
    <StyledAddress as={strong ? "strong" : "span"} {...restProps}>
      {address}
    </StyledAddress>
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
