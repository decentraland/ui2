import * as React from "react"
import { Network } from "@dcl/schemas/dist/dapps/network"

type ManaBalancesProps = {
  manaBalances?: Partial<Record<Network, number>>
  onClickBalance?: React.MouseEventHandler<HTMLButtonElement> &
    ((
      event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
      network: Network
    ) => void)
}

export { ManaBalancesProps }
