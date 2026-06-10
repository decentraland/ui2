const creditsClaimReminderI18n = {
  en: {
    description:
      "You've earned Credits, but haven't claimed them yet! Complete the CAPTCHA in the Weekly Rewards panel to claim your Credits before the week resets (23:59 UTC Sunday).",
    title: 'Claim Your Credits'
  },
  es: {
    description:
      '¡Has ganado Créditos pero aún no los has reclamado! Completa el CAPTCHA en el panel de Recompensas Semanales para reclamar tus Créditos antes de que se reinicie la semana (Domingo 23:59 UTC).',
    title: 'Reclama Tus Créditos'
  },
  zh: {
    description: '你已经赚取了积分，但还没有领取！在每周奖励面板中完成CAPTCHA，以在星期日23:59 UTC之前领取你的积分。',
    title: '领取你的积分'
  }
} as const

const creditsCompleteYourWeeklyGoalsI18n = {
  en: {
    description: "Don't miss out on your Credits! Complete your weekly goals before the week resets (23:59 UTC Sunday).",
    title: 'Complete Your Weekly Goals'
  },
  es: {
    description: '¡No te pierdas tus Créditos! Completa tus objetivos semanales antes de que se reinicie la semana (Domingo 23:59 UTC).',
    title: 'Completa Tus Objetivos Semanales'
  },
  zh: {
    description: '不要错过你的积分！在星期日23:59 UTC之前完成你的每周目标。',
    title: '完成你的每周目标'
  }
} as const

const creditsDoNotMissOutI18n = {
  en: {
    description: 'Marketplace Credits are waiting! Jump in to complete your weekly goals before the week resets (23:59 UTC Sunday).',
    title: 'Jump In, Earn Credits'
  },
  es: {
    description:
      'Marketplace Creditos esperan! Salta a completar tus objetivos semanales antes de que se reinicie la semana (Domingo 23:59 UTC).',
    title: 'Salta, Gana Creditos'
  },
  zh: {
    description: '商城积分等你来拿！赶快在本周重置（UTC 时间周日 23:59）之前完成你的每周目标吧。',
    title: '加入，赢取积分'
  }
} as const

const creditsExpireIn24HrsReminderI18n = {
  en: {
    description: 'Spend your Credits before they expire tonight, {date}.',
    title: 'Only 24hrs Left'
  },
  es: {
    description: 'Gasta tus Créditos antes de que expiren esta noche, {date}.',
    title: 'Solo quedan 24 horas'
  },
  zh: {
    description: '在今晚{date}过期前使用你的积分。',
    title: '仅剩24小时'
  }
} as const

const creditsExpireSoonReminderI18n = {
  en: {
    description: "Your Marketplace Credits expire in one week on {date}. Spend them before it's too late!",
    title: 'Your Credits Expire Soon'
  },
  es: {
    description: 'Tus Créditos de Marketplace expiran en una semana el {date}. ¡Gástalos antes de que sea demasiado tarde!',
    title: 'Tus Créditos Expiran Pronto'
  },
  zh: {
    description: '你的Marketplace积分将在一周后的{date}过期。请在过期前使用它们！',
    title: '你的积分即将过期'
  }
} as const

const creditsOnDemandGrantedI18n = {
  en: {
    description: "Congrats! You've earned {amount} extra Credits for this season. Make sure to use them before they expire!",
    title: 'Bonus Credits Unlocked!'
  },
  es: {
    description: '¡Felicidades! Has ganado {amount} créditos adicionales para esta temporada. ¡Asegúrate de usarlos antes de que caduquen!',
    title: '¡Créditos adicionales desbloqueados!'
  },
  zh: {
    description: '恭喜！您已获得本赛季的{amount}额外积分。请务必在它们过期前使用！',
    title: '奖励积分已解锁！'
  }
} as const

export {
  creditsClaimReminderI18n,
  creditsCompleteYourWeeklyGoalsI18n,
  creditsDoNotMissOutI18n,
  creditsExpireIn24HrsReminderI18n,
  creditsExpireSoonReminderI18n,
  creditsOnDemandGrantedI18n
}
