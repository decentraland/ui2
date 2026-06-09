const friendshipRequestI18n = {
  en: {
    description: 'Open your friends list to respond.',
    title: '{sender} sent you a friend request'
  },
  es: {
    description: 'Abre tu lista de amigos para responder.',
    title: '{sender} te envió una solicitud de amistad'
  },
  zh: {
    description: '打开好友列表进行回应。',
    title: '{sender} 向你发送了好友请求'
  }
} as const

const friendshipAcceptedI18n = {
  en: {
    description: "You're now friends!",
    title: '{sender} accepted your friend request'
  },
  es: {
    description: '¡Ahora son amigos!',
    title: '{sender} aceptó tu solicitud de amistad'
  },
  zh: {
    description: '你们现在是好友了！',
    title: '{sender} 接受了你的好友请求'
  }
} as const

export { friendshipRequestI18n, friendshipAcceptedI18n }
