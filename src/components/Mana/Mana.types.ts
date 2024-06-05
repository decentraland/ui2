import { Network } from "@dcl/schemas"

export type ManaProps = {
  size?: "small" | "medium" | "large"
  inline?: boolean
  network?: Network
  children?: React.ReactChild
  primary?: boolean
  showTooltip?: boolean
}
