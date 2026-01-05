const eventStartedI18n = {
  en: {
    description: {
      start: "The event",
      end: "has begun!",
    },
    title: "Event started",
  },
  es: {
    description: {
      start: "El evento",
      end: "ha empezado!",
    },
    title: "Evento ha comenzado",
  },
  zh: {
    description: {
      start: "事件",
      end: "已开始",
    },
    title: "事件开始",
  },
} as const

const eventStartsSoonI18n = {
  en: {
    description: {
      aboutToStart: {
        start: "The event",
        end: "is about to start in",
      },
      startsInOneHour: {
        start: "The event",
        end: "starts in an hour",
      },
    },
    title: "Event starts soon",
  },
  es: {
    description: {
      aboutToStart: {
        start: "El evento",
        end: "esta por empezar en",
      },
      startsInOneHour: {
        start: "El evento",
        end: "empieza en una hora",
      },
    },
    title: "Evento empieza pronto",
  },
  zh: {
    description: {
      aboutToStart: {
        start: "事件",
        end: "即将开始 在",
      },
      startsInOneHour: {
        start: "事件",
        end: "从一个开始 小时",
      },
    },
    title: "事件即将开始",
  },
} as const

export { eventStartedI18n, eventStartsSoonI18n }
