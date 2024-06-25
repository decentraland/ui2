import { Network } from "@dcl/schemas"

type ManaProps = {
  size?: "small" | "medium" | "large"
  inline?: boolean
  network?: Network
  children?: React.ReactChild
  color?: string
  primary?: boolean
  showTooltip?: boolean
  href?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement> &
    ((
      event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
      network: Network
    ) => void)
}

export { ManaProps }
