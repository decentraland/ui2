import React from "react"

const i18n = {
  en: {
    description: (
      mana: React.ReactNode,
      nftName: React.ReactNode
    ): React.ReactNode => (
      <>
        You&apos;ve earned {mana} in royalties for {nftName}
      </>
    ),
    title: "Royalties Earned",
  },
  es: {
    description: (
      mana: React.ReactNode,
      nftName: React.ReactNode
    ): React.ReactNode => (
      <>
        Ganaste {mana} en regalias por {nftName}
      </>
    ),
    title: "Regalias ganadas",
  },
  zh: {
    description: (
      mana: React.ReactNode,
      nftName: React.ReactNode
    ): React.ReactNode => (
      <>
        您为 {nftName} 赢得了 {mana}
      </>
    ),
    title: "所得版税",
  },
}

export { i18n }
