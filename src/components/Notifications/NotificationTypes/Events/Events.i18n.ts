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
      end: 'has been approved.'
    },
    title: 'Event approved'
  },
  es: {
    description: {
      start: 'Tu evento',
      end: 'ha sido aprobado.'
    },
    title: 'Evento aprobado'
  },
  zh: {
    description: {
      start: '您的活动',
      end: '已获批准'
    },
    title: '活动已批准'
  }
} as const

const eventRejectedI18n = {
  en: {
    description: {
      start: 'Your event',
      end: 'needs changes before it can be approved.'
    },
    title: 'Event needs changes'
  },
  es: {
    description: {
      start: 'Tu evento',
      end: 'necesita cambios antes de ser aprobado.'
    },
    title: 'Evento necesita cambios'
  },
  zh: {
    description: {
      start: '您的活动',
      end: '需要修改后才能获批准'
    },
    title: '活动需要修改'
  }
} as const

const eventDeletedI18n = {
  en: {
    description: {
      start: 'Your hangout',
      end: 'has been deleted successfully!'
    },
    title: 'Hangout Deleted successfully'
  },
  es: {
    description: {
      start: 'Tu hangout',
      end: 'ha sido eliminado con éxito!'
    },
    title: 'Hangout eliminado con éxito'
  },
  zh: {
    description: {
      start: '您的 hangout',
      end: '已成功删除！'
    },
    title: 'Hangout 已成功删除'
  }
} as const

export { eventStartedI18n, eventStartsSoonI18n, eventApprovedI18n, eventRejectedI18n, eventDeletedI18n }
