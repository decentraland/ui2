import { Network } from "@dcl/schemas"
import { config } from "../../../config"
import Mana from "../../Mana/Mana"
import { ManaBalancesProps } from "./ManaBalances.types"
import { ManaBalancesWrapper } from "./ManaBalances.styled"

export default function ManaBalances(props: ManaBalancesProps) {
  const { manaBalances, onClickBalance } = props

  return (
    <ManaBalancesWrapper>
      {manaBalances &&
        Object.keys(manaBalances).map((network) => (
          <Mana
            key={network}
            network={network as Network}
            size="small"
            href={config.get("ACCOUNT_URL")}
            onClick={onClickBalance}
          >
            {Number(manaBalances[network].toFixed(2)).toLocaleString()}
          </Mana>
        ))}
    </ManaBalancesWrapper>
  )
}
