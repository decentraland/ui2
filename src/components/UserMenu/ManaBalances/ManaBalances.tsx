import React from "react"
import { Network } from "@dcl/schemas"
import { config } from "../../../config"
import { Mana } from "../../Mana"
import { ManaBalancesProps } from "./ManaBalances.types"
import { ManaBalanceNumber, ManaBalancesWrapper } from "./ManaBalances.styled"

const ManaBalances = React.memo((props: ManaBalancesProps) => {
  const { manaBalances, onClickBalance } = props

  return (
    <ManaBalancesWrapper>
      {manaBalances &&
        Object.keys(manaBalances).map((network) => (
          <Mana
            key={network}
            network={network as Network}
            href={config.get("ACCOUNT_URL")}
            onClick={onClickBalance}
            primary={network === Network.ETHEREUM}
          >
            <ManaBalanceNumber variant="subtitle2">
              {Number(manaBalances[network].toFixed(2)).toLocaleString()}
            </ManaBalanceNumber>
          </Mana>
        ))}
    </ManaBalancesWrapper>
  )
})

export { ManaBalances }
