const bidAcceptedI18n = {
  en: {
    description: {
      start: "Your offer of",
      middle: "was accepted for",
    },
    title: "Offer Accepted",
  },
  es: {
    description: {
      start: "Tu oferta de",
      middle: "fue aceptada para",
    },
    title: "Oferta aceptada",
  },
  zh: {
    description: {
      start: "您的出价",
      middle: "已被接受",
    },
    title: "接受报价",
  },
} as const

const bidReceivedI18n = {
  en: {
    description: {
      start: "You received an offer of",
      middle: "for",
    },
    title: "Offer Received",
  },
  es: {
    description: {
      start: "Recibiste una oferta de",
      middle: "para",
    },
    title: "Oferta recibida",
  },
  zh: {
    description: {
      start: "您的出价",
      middle: "已被接受",
    },
    title: "收到报价",
  },
} as const

const itemSoldI18n = {
  en: { description: "Someone just bought your ", title: "Item Sold" },
  es: { description: "Alguien acaba de comprar tu ", title: "Item vendido" },
  zh: { description: "有人刚买了你的 ", title: "已售商品" },
} as const

const royaltiesEarnedI18n = {
  en: {
    description: {
      start: "You've earned",
      middle: "in royalties for",
    },
    title: "Royalties Earned",
  },
  es: {
    description: {
      start: "Ganaste",
      middle: "en regalias por",
    },
    title: "Regalias ganadas",
  },
  zh: {
    description: {
      start: "您为",
      middle: "赢得了",
    },
    title: "所得版税",
  },
} as const

export { bidAcceptedI18n, bidReceivedI18n, itemSoldI18n, royaltiesEarnedI18n }
