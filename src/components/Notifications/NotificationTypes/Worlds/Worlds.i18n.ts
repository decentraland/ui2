const worldsAccessRestoredI18n = {
  en: {
    description: 'Access to your Worlds has been restored.',
    title: 'Worlds available'
  },
  es: {
    description: 'El acceso a tus Mundos ha sido restaurado.',
    title: 'Mundos disponible'
  },
  zh: {
    description: '您的 "世界 "访问权限已恢复.',
    title: '可用的世界'
  }
} as const

const worldsAccessRestrictedI18n = {
  en: {
    description: {
      start: 'Access to your Worlds has been restricted due to',
      link_text: 'insufficient resources'
    },
    title: 'Worlds restricted'
  },
  es: {
    description: {
      start: 'El acceso a tus Mundos ha sido restringido debido a',
      link_text: 'falta de recursos'
    },
    title: 'Mundos restringidos'
  },
  zh: {
    description: {
      start: '由于资源不足',
      link_text: '访问您的世界受到限制'
    },
    title: '世界限制'
  }
} as const

const worldsMissingResourcesI18n = {
  en: {
    description: {
      start: 'WORLDS access at risk in 48hs.',
      link_text: 'Rectify now',
      end: 'to percent disruption.'
    },
    title: 'Missing resources'
  },
  es: {
    description: {
      start: 'El acceso a tus Mundos sera restringido en 48 horas.',
      link_text: 'Rectifique ahora',
      end: 'para evitar interrupciones.'
    },
    title: 'Faltan recursos'
  },
  zh: {
    description: {
      start: '世界接入在 48 小时内面临风险.',
      link_text: '立即纠正',
      end: '，以减少中断'
    },
    title: '缺失的资源'
  }
} as const

const worldsPermissionGrantedI18n = {
  en: {
    title: 'World Permission Granted',
    accessTitle: 'World Access',
    access: 'You have been given permission to access World {world}',
    deployment: 'You have been granted deployer permission to World {world}',
    streaming: 'You have been granted streamer permission to World {world}'
  },
  es: {
    title: 'Permiso para mundo otorgado',
    accessTitle: 'Acceso a Mundo',
    access: 'Te han dado permiso para acceder al mundo {world}',
    deployment: 'Te han otorgado permiso de deployar al mundo {world}',
    streaming: 'Te han otorgado permiso de trasmitir en el mundo {world}'
  },
  zh: {
    title: '获得世界许可',
    accessTitle: '世界访问',
    access: '您已获得访问世界的许可 {world}',
    deployment: '您已被授予部署者的许可 {world}',
    streaming: '您已获得流媒体的许可 {world}'
  }
} as const

const worldsPermissionRevokedI18n = {
  en: {
    title: 'World Permission Revoked',
    accessTitle: 'World Access Revoked',
    access: 'You have been revoked the permission to access World {world}',
    deployment: 'The owner of the World {world} has revoked your permission to deploy in their world',
    streaming: 'The owner of the World {world} has revoked your permission to stream in their world'
  },
  es: {
    title: 'Permiso para mundo revocado',
    accessTitle: 'Acceso a Mundo revocado',
    access: 'Te han removido el permiso para acceder al mundo {world}',
    deployment: 'El propietario del mundo {world} ha revocado tu permiso para deployar en su mundo',
    streaming: 'El propietario del mundo {world} ha revocado tu permiso para transmitir en su mundo'
  },
  zh: {
    title: '世界许可被撤销',
    accessTitle: '世界访问被撤销',
    access: '您已被撤销访问世界{workd}的许可',
    deployment: '世界所有者{world}已撤销您在其世界中部署的许可',
    streaming: '世界的所有者{world}已撤销了您在世界上流媒体的允许'
  }
} as const

export {
  worldsAccessRestoredI18n,
  worldsAccessRestrictedI18n,
  worldsMissingResourcesI18n,
  worldsPermissionGrantedI18n,
  worldsPermissionRevokedI18n
}
