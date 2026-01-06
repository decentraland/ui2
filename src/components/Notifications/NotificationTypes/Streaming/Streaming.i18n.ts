const streamingKeyExpiredI18n = {
  en: {
    description:
      "Go to the Admin Tools panel at {place} if you need a new key.",
    title: "Stream Key Expired",
  },
  es: {
    description:
      "Verifica el panel de Admin Tools en {place} si necesitas una nueva clave.",
    title: "Clave de Streaming Expirada",
  },
  zh: {
    description: "请检查管理工具面板在{place}，如果您需要新的密钥。",
    title: "流密钥已过期",
  },
} as const

const streamingKeyResetI18n = {
  en: {
    description: "Check the Admin Tools panel at {place} to get the new key.",
    title: "Stream Key Reset",
  },
  es: {
    description:
      "Revisa el panel de Admin Tools en {place} para obtener la nueva clave.",
    title: "Clave de Streaming Restablecida",
  },
  zh: {
    description: "检查管理工具面板在{place}获取新密钥。",
    title: "流密钥重置",
  },
} as const

const streamingKeyRevokeI18n = {
  en: {
    description:
      "Check the Admin Tools panel at {place} if you need a new key.",
    title: "Stream Key Deactivated",
  },
  es: {
    description:
      "Verifica el panel de Admin Tools en {place} si necesitas una nueva clave.",
    title: "Clave de Streaming Desactivada",
  },
  zh: {
    description: "请检查管理工具面板在{place}，如果您需要新的密钥。",
    title: "流密钥已停用",
  },
} as const

const streamingPlaceUpdatedI18n = {
  en: {
    description:
      "If you'd like to stream to {place}, please generate a new stream key from the Admin Tools panel in Decentraland.",
    title: "Stream Location Altered",
  },
  es: {
    description:
      "Si deseas transmitir a {place}, por favor genera una nueva clave de transmisión desde el panel de Admin Tools en Decentraland.",
    title: "Place Actualizado",
  },
  zh: {
    description: "请从管理工具面板生成一个新的流密钥{place}。",
    title: "地点已更新",
  },
} as const

const streamingTimeExceededI18n = {
  en: {
    description:
      "Restart your stream in your broadcasting software (e.g. OBS) if you'd like to continue streaming to the scene at {place}.",
    title: "Stream Timed Out",
  },
  es: {
    description:
      "Reinicia tu transmisión en tu software de transmisión (e.g. OBS) si deseas continuar transmitiendo a la escena en {place}.",
    title: "Tiempo de Streaming Excedido",
  },
  zh: {
    description:
      "如果您想继续直播到现场{place}，请在直播软件（例如 OBS）中重新启动直播。",
    title: "流媒体时间已超过限制",
  },
} as const

export {
  streamingKeyExpiredI18n,
  streamingKeyResetI18n,
  streamingKeyRevokeI18n,
  streamingPlaceUpdatedI18n,
  streamingTimeExceededI18n,
}
