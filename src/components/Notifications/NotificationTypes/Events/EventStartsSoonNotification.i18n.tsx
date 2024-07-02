import React from "react"
import { Link } from "@mui/material"
import { Countdown } from "./Countdown"
import { EventsStartsSoonNotificationProps } from "../../types"

const i18n = {
  en: {
    description: (
      metadata: EventsStartsSoonNotificationProps["metadata"]
    ): React.ReactNode =>
      new Date(metadata.startsAt).getTime() > Date.now() ? (
        <>
          The event <Link href={metadata.link}>{metadata.name}</Link> is about
          to start in <Countdown startDate={metadata.startsAt} />
        </>
      ) : (
        <>
          The event <Link href={metadata.link}>{metadata.name}</Link> starts in
          an hour
        </>
      ),
    title: "Event starts soon",
  },
  es: {
    description: (
      metadata: EventsStartsSoonNotificationProps["metadata"]
    ): React.ReactNode =>
      new Date(metadata.startsAt).getTime() > Date.now() ? (
        <>
          El evento <Link href={metadata.link}>{metadata.name}</Link> esta por
          empezar en <Countdown startDate={metadata.startsAt} />
        </>
      ) : (
        <>
          El evento <Link href={metadata.link}>{metadata.name}</Link> empieza en
          una hora
        </>
      ),
    title: "Evento empieza pronto",
  },
  zh: {
    description: (
      metadata: EventsStartsSoonNotificationProps["metadata"]
    ): React.ReactNode =>
      new Date(metadata.startsAt).getTime() > Date.now() ? (
        <>
          事件 <Link href={metadata.link}>{metadata.name}</Link> 即将开始 在{" "}
          <Countdown startDate={metadata.startsAt} />
        </>
      ) : (
        <>
          事件 <Link href={metadata.link}>{metadata.name}</Link> 从一个开始 小时
        </>
      ),
    title: "事件即将开始",
  },
}

export { i18n }
