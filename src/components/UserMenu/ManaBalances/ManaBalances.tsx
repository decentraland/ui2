import React from "react"
import { Network } from "@dcl/schemas"
import { Typography } from "@mui/material"
import { config } from "../../../config"
import { Mana } from "../../Mana"
import { ManaBalancesProps } from "./ManaBalances.types"
import { ManaBalancesWrapper } from "./ManaBalances.styled"

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
            <Typography variant="subtitle2">
              {Number(manaBalances[network].toFixed(2)).toLocaleString()}
            </Typography>
          </Mana>
        ))}
    </ManaBalancesWrapper>
  )
})

export { ManaBalances }
