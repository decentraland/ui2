const campaignGasPriceHigherThanExpectedI18n = {
  en: {
    description: {
      start: "The gas price for the",
      end: "campaign is lower than expected, and the transactions may not be processed.",
    },
    title: "Gas Price Higher Than Expected",
  },
  es: {
    description: {
      start: "El precio del gas para la",
      end: "campaña es más alto de lo esperado, y las transacciones pueden no ser procesadas.",
    },
    title: "Precio del Gas Más Alto de lo Esperado",
  },
  zh: {
    description: {
      start: "该",
      end: "活动的燃气价格高于预期，交易可能无法处理。",
    },
    title: "燃气价格高于预期",
  },
} as const

const campaignOutOfFundsI18n = {
  en: {
    description: {
      start: "The",
      end: "campaign has run out of funds.",
    },
    title: "Campaign Out of Funds",
  },
  es: {
    description: {
      start: "La",
      end: "campaña se ha quedado sin fondos.",
    },
    title: "Campaña sin fondos",
  },
  zh: {
    description: {
      start: "该",
      end: "活动已经用完资金。",
    },
    title: "活动资金用完",
  },
} as const

const campaignOutOfStockI18n = {
  en: {
    description: {
      start: "The",
      end: "campaign has run out of stock.",
    },
    title: "Campaign Out of Stock",
  },
  es: {
    description: {
      start: "La",
      end: "campaña se ha quedado sin stock.",
    },
    title: "Campaña sin stock",
  },
  zh: {
    description: {
      start: "该",
      end: "活动已经售罄。",
    },
    title: "活动售罄",
  },
} as const

const rewardAssignedI18n = {
  en: {
    description: {
      start: "You’ve received a",
      end: "for free. Try it out once it arrives!",
    },
    title: "A Gift is on its way!",
  },
  es: {
    description: {
      start: "Recibiste un",
      end: "gratis. ¡Pruebalo cuando llegue!",
    },
    title: "¡Un regalo está en camino!",
  },
  zh: {
    description: {
      start: "您已免费收到一个",
      end: "。一旦到达，立即试试吧！",
    },
    title: "一份礼物正在路上！",
  },
} as const

const rewardDelayedI18n = {
  en: {
    description: {
      start: "We’re working on delivering your",
      end: "as soon as possible.",
    },
    title: "Your Gift is Delayed",
  },
  es: {
    description: {
      start: "Estamos trabajando en entregar tu",
      end: "lo antes posible.",
    },
    title: "Tu regalo está retrasado",
  },
  zh: {
    description: {
      start: "我们正在尽快交付您的",
      end: "。",
    },
    title: "您的礼物延迟了",
  },
} as const

const rewardInProgressI18n = {
  en: {
    description: {
      start: "This",
      end: "is already in your backpack",
    },
    title: "New Item Received",
  },
  es: {
    description: {
      start: "El item",
      end: "ya esta disponible en tu backpack",
    },
    title: "Nuevo artículo recibido",
  },
  zh: {
    description: {
      start: "这",
      end: "已经在您的背包里",
    },
    title: "收到的新项目",
  },
} as const

export {
  campaignGasPriceHigherThanExpectedI18n,
  campaignOutOfFundsI18n,
  campaignOutOfStockI18n,
  rewardAssignedI18n,
  rewardDelayedI18n,
  rewardInProgressI18n,
}
