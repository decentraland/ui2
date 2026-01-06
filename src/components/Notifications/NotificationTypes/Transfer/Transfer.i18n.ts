const giftI18n = {
  en: {
    description: "Open your backpack to check it out.",
    title: "{player} sent you something",
  },
  es: {
    description: "Abre tu mochila para verlo.",
    title: "{player} te envió algo",
  },
  zh: {
    description: "打开你的背包查看。",
    title: "{player} 给你送了东西",
  },
} as const

const tipI18n = {
  en: {
    description: "",
    title: "{playerName} sent you {manaAmount} tip for one of your scenes!",
  },
  es: {
    description: "",
    title:
      "¡{playerName} te envió una propina de {manaAmount} por una de tus escenas!",
  },
  zh: {
    description: "",
    title: "{playerName} 为你的其中一个场景发送了 {manaAmount} 小费！",
  },
} as const

export { giftI18n, tipI18n }
