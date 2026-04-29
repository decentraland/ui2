const eventStartedI18n = {
  en: {
    description: {
      start: 'The event',
      end: 'has begun!'
    },
    title: 'Event started'
  },
  es: {
    description: {
      start: 'El evento',
      end: 'ha empezado!'
    },
    title: 'Evento ha comenzado'
  },
  zh: {
    description: {
      start: '事件',
      end: '已开始'
    },
    title: '事件开始'
  }
} as const

const eventStartsSoonI18n = {
  en: {
    description: {
      aboutToStart: {
        start: 'The event',
        end: 'is about to start in'
      },
      startsInOneHour: {
        start: 'The event',
        end: 'starts in an hour'
      }
    },
    title: 'Event starts soon'
  },
  es: {
    description: {
      aboutToStart: {
        start: 'El evento',
        end: 'esta por empezar en'
      },
      startsInOneHour: {
        start: 'El evento',
        end: 'empieza en una hora'
      }
    },
    title: 'Evento empieza pronto'
  },
  zh: {
    description: {
      aboutToStart: {
        start: '事件',
        end: '即将开始 在'
      },
      startsInOneHour: {
        start: '事件',
        end: '从一个开始 小时'
      }
    },
    title: '事件即将开始'
  }
} as const

const eventApprovedI18n = {
  en: {
    description: {
      start: 'Your event',
      end: 'has been successfully approved!'
    },
    title: 'Event Approved'
  },
  es: {
    description: {
      start: 'Tu evento',
      end: 'ha sido aprobado exitosamente!'
    },
    title: 'Evento aprobado'
  },
  zh: {
    description: {
      start: '您的活动',
      end: '已成功批准！'
    },
    title: '活动已批准'
  }
} as const

const eventRejectedI18n = {
  en: {
    description: {
      start: 'Your event',
      end: 'has been rejected, please update it with the required changes.'
    },
    title: 'Event Rejected'
  },
  es: {
    description: {
      start: 'Tu evento',
      end: 'ha sido rechazado, por favor actualízalo con los cambios requeridos.'
    },
    title: 'Evento rechazado'
  },
  zh: {
    description: {
      start: '您的活动',
      end: '已被拒绝，请根据所需的更改进行更新。'
    },
    title: '活动已拒绝'
  }
} as const

export { eventStartedI18n, eventStartsSoonI18n, eventApprovedI18n, eventRejectedI18n }
