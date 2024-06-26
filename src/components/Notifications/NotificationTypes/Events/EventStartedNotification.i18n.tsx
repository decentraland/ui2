import { Link } from "@mui/material"
import { EventsStartedNotificationProps } from "../../types"

const i18n = {
  en: {
    description: (
      metadata: EventsStartedNotificationProps["metadata"]
    ): React.ReactNode => (
      <>
        The event <Link href={metadata.link}>{metadata.name}</Link> has begun!
      </>
    ),
    title: "Event started",
  },
  es: {
    description: (
      metadata: EventsStartedNotificationProps["metadata"]
    ): React.ReactNode => (
      <>
        El evento <Link href={metadata.link}>{metadata.name}</Link> ha empezado!
      </>
    ),
    title: "Evento ha comenzado",
  },
  zh: {
    description: (
      metadata: EventsStartedNotificationProps["metadata"]
    ): React.ReactNode => (
      <>
        事件 <Link href={metadata.link}>{metadata.name}</Link> 已开始
      </>
    ),
    title: "事件开始",
  },
}

export { i18n }
