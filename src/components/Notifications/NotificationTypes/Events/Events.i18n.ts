const eventStartedI18n = {
  en: {
    description: {
      start: 'The hangout',
      end: 'has begun!'
    },
    title: 'Hangout started'
  },
  es: {
    description: {
      start: 'El hangout',
      end: 'ha empezado!'
    },
    title: 'Hangout ha comenzado'
  },
  zh: {
    description: {
      start: 'Hangout',
      end: '已开始'
    },
    title: 'Hangout 开始'
  }
} as const

const eventStartsSoonI18n = {
  en: {
    description: {
      aboutToStart: {
        start: 'The hangout',
        end: 'is about to start in'
      },
      startsInOneHour: {
        start: 'The hangout',
        end: 'starts in an hour'
      }
    },
    title: 'Hangout starts soon'
  },
  es: {
    description: {
      aboutToStart: {
        start: 'El hangout',
        end: 'esta por empezar en'
      },
      startsInOneHour: {
        start: 'El hangout',
        end: 'empieza en una hora'
      }
    },
    title: 'Hangout empieza pronto'
  },
  zh: {
    description: {
      aboutToStart: {
        start: 'Hangout',
        end: '即将开始 在'
      },
      startsInOneHour: {
        start: 'Hangout',
        end: '从一个开始 小时'
      }
    },
    title: 'Hangout 即将开始'
  }
} as const

const eventApprovedI18n = {
  en: {
    description: {
      start: 'Your hangout',
      end: 'has been approved.'
    },
    title: 'Hangout approved'
  },
  es: {
    description: {
      start: 'Tu hangout',
      end: 'ha sido aprobado.'
    },
    title: 'Hangout aprobado'
  },
  zh: {
    description: {
      start: '您的 hangout',
      end: '已获批准'
    },
    title: 'Hangout 已批准'
  }
} as const

const eventRejectedI18n = {
  en: {
    description: {
      start: 'Your hangout',
      end: 'needs changes before it can be approved.'
    },
    title: 'Hangout needs changes'
  },
  es: {
    description: {
      start: 'Tu hangout',
      end: 'necesita cambios antes de ser aprobado.'
    },
    title: 'Hangout necesita cambios'
  },
  zh: {
    description: {
      start: '您的 hangout',
      end: '需要修改后才能获批准'
    },
    title: 'Hangout 需要修改'
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
