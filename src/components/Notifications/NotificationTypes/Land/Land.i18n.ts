const landRentalEndedI18n = {
  en: {
    description: {
      start: 'The rent on your LAND at',
      end: 'has ended'
    },
    title: 'Rent Period Ended'
  },
  es: {
    description: {
      start: 'El alquiler de su LAND en',
      end: 'ha terminado'
    },
    title: 'Período de alquiler finalizado'
  },
  zh: {
    description: {
      start: '土地上的租金',
      end: '结束了'
    },
    title: '租金期结束'
  }
} as const

const landRentedI18n = {
  en: {
    description: {
      start: 'The rent on your LAND at',
      end: 'was rented by'
    },
    title: 'LAND Rented'
  },
  es: {
    description: {
      start: 'La renta de tu LAND en',
      end: 'fue alquilada por'
    },
    title: 'LAND alquilada'
  },
  zh: {
    description: {
      start: '你的土地',
      end: '租了'
    },
    title: '租用的土地'
  }
} as const

export { landRentalEndedI18n, landRentedI18n }
