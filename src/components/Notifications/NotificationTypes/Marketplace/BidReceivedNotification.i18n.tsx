import React from "react"

const i18n = {
  en: {
    description: (
      mana: React.ReactNode,
      nftName: React.ReactNode
    ): React.ReactNode => (
      <>
        You received an offer of {mana} for {nftName}
      </>
    ),
    title: "Offer Received",
  },
  es: {
    description: (
      mana: React.ReactNode,
      nftName: React.ReactNode
    ): React.ReactNode => (
      <>
        Recibiste una oferta de {mana} para {nftName}
      </>
    ),
    title: "Oferta recibida",
  },
  zh: {
    description: (
      mana: React.ReactNode,
      nftName: React.ReactNode
    ): React.ReactNode => (
      <>
        您为 {nftName} 出价 {mana} 已被接受
      </>
    ),
    title: "收到报价",
  },
}

export { i18n }
