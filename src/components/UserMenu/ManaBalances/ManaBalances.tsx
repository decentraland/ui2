import React from "react"
import { Network } from "@dcl/schemas"
import { Box, Tooltip } from "@mui/material"
import { config } from "../../../config"
import * as CreditsIcon from "../../Icon/CreditsIcon"
import { Mana } from "../../Mana"
import { ManaBalancesProps } from "./ManaBalances.types"
import {
  CreditsBalanceContainer,
  CreditsBalanceTooltipContainer,
  CreditsBalanceValueContainer,
  ExperingSoon,
  GetCreditsButton,
  ManaBalanceNumber,
  ManaBalancesWrapper,
} from "./ManaBalances.styled"

const ManaBalances = React.memo((props: ManaBalancesProps) => {
  const { manaBalances, creditsBalance, i18n, onClickBalance } = props

  const isCreditsBalanceExpired =
    creditsBalance && creditsBalance.expiresAt < Date.now()

  const creditsExpiringSoon =
    creditsBalance &&
    creditsBalance.expiresAt < Date.now() + 1000 * 60 * 60 * 24 * 5 // 5 days

  // calculates in how much time they expire. This returns days remaining
  const creditsExpiringIn =
    creditsBalance &&
    Math.floor((creditsBalance.expiresAt - Date.now()) / (1000 * 60 * 60 * 24))

  return (
    <ManaBalancesWrapper>
      <Box>
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
      </Box>
      {creditsBalance !== undefined && !isCreditsBalanceExpired && (
        <CreditsBalanceContainer>
          <>
            {creditsBalance.balance === 0 ? (
              <>
                <GetCreditsButton
                  variant="text"
                  onClick={() => {
                    // TODO: review this link
                    window.open(config.get("CREDITS_DOCS_URL"), "_blank")
                  }}
                >
                  {i18n?.getCredits || "Earn Credits"}
                </GetCreditsButton>
                <CreditsBalanceValueContainer>
                  <CreditsIcon.CreditsIcon />
                  {creditsBalance.balance}
                </CreditsBalanceValueContainer>
              </>
            ) : creditsBalance.balance > 0 ? (
              <>
                {creditsExpiringSoon && (
                  <ExperingSoon>{i18n?.creditsExpiringSoon}</ExperingSoon>
                )}
                {creditsExpiringIn && (
                  <Tooltip
                    title={
                      <CreditsBalanceTooltipContainer>
                        <span>
                          {i18n?.creditsExpiringIn(
                            creditsExpiringIn.toString()
                          )}
                        </span>
                        <span>{i18n?.creditsValue}</span>
                      </CreditsBalanceTooltipContainer>
                    }
                    placement="top-start"
                  >
                    <CreditsBalanceValueContainer>
                      <CreditsIcon.CreditsIcon />
                      {creditsBalance.balance}
                    </CreditsBalanceValueContainer>
                  </Tooltip>
                )}
              </>
            ) : null}
          </>
        </CreditsBalanceContainer>
      )}
    </ManaBalancesWrapper>
  )
})

export { ManaBalances }
