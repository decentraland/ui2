import React from "react"

const i18n = {
  en: {
    description: (
      mana: React.ReactNode,
      nftName: React.ReactNode
    ): React.ReactNode => (
      <>
        Your offer of {mana} was accepted for {nftName}
      </>
    ),
    title: "Offer Accepted",
  },
  es: {
    description: (
      mana: React.ReactNode,
      nftName: React.ReactNode
    ): React.ReactNode => (
      <>
        Tu oferta de {mana} fue aceptada para {nftName}
      </>
    ),
    title: "Oferta aceptada",
  },
  zh: {
    description: (
      mana: React.ReactNode,
      nftName: React.ReactNode
    ): React.ReactNode => (
      <>
        您的出价 {mana} 已被接受 {nftName}
      </>
    ),
    title: "接受报价",
  },
}

export { i18n }
