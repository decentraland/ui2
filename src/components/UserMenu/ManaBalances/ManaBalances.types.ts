import * as React from 'react'
import { Network } from '@dcl/schemas/dist/dapps/network'

type ManaBalancesProps = {
  manaBalances?: Partial<Record<Network, number>>
  creditsBalance?: {
    balance: number
    expiresAt: number
  }
  i18n?: {
    getCredits: string
    creditsExpiringSoon: string
    creditsValue: string
    creditsExpiringIn: (value: string) => string
  }
  onClickBalance?: React.MouseEventHandler<HTMLButtonElement> &
    ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, network: Network) => void)
}

export { ManaBalancesProps }
