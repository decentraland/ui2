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

  // calculates in how much time they expire. This returns days remaining (can be 0 if less than 24h)
  const creditsExpiringIn = creditsBalance
    ? Math.max(
        0,
        Math.floor(
          (creditsBalance.expiresAt - Date.now()) / (1000 * 60 * 60 * 24)
        )
      )
    : undefined

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
                    window.open(
                      `${config.get("BLOG_URL")}announcements/marketplace-credits-earn-weekly-rewards-to-power-up-your-look?utm_org=dcl&utm_source=marketplace&utm_medium=organic&utm_campaign=marketplacecredits`,
                      "_blank",
                      "noopener noreferrer"
                    )
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
                {creditsExpiringIn !== undefined && (
                  <Tooltip
                    title={
                      <CreditsBalanceTooltipContainer>
                        <span>
                          {i18n?.creditsExpiringIn(
                            creditsExpiringIn === 0
                              ? "< 1"
                              : creditsExpiringIn.toString()
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
