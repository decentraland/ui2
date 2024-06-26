import React, { useEffect, useState } from "react"
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined"
import { Link } from "@mui/material"
import { NotificationItemCountdown } from "../../NotificationItem.styled"
import { EventsStartsSoonNotificationProps } from "../../types"

let interval: NodeJS.Timeout

const Countdown = React.memo(({ startDate }: { startDate: string }) => {
  const [minutes, setMinutes] = useState<number | undefined>(undefined)
  const [seconds, setSeconds] = useState<number | undefined>(undefined)

  useEffect(() => {
    interval = setInterval(() => {
      const eventStartDate = new Date(startDate).getTime()
      const distance = eventStartDate - Date.now()
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setMinutes(minutes)
      setSeconds(seconds)
      if (distance < 0) {
        setMinutes(0)
        setSeconds(0)
        clearInterval(interval)
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [setMinutes, setSeconds])

  const minutesString =
    minutes !== undefined
      ? minutes.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })
      : "--"
  const secondsString =
    seconds !== undefined
      ? seconds.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })
      : "--"

  return (
    <NotificationItemCountdown>
      <WatchLaterOutlinedIcon fontSize="inherit" />
      {`${minutesString}:${secondsString}`}
    </NotificationItemCountdown>
  )
})

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
