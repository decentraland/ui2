import React, { useEffect, useState } from "react"
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined"
import { NotificationItemCountdown } from "../../NotificationItem.styled"

let interval: NodeJS.Timeout

const Countdown = React.memo(({ startDate }: { startDate: string }) => {
  const [time, setTime] = useState<string>("--:--")

  useEffect(() => {
    interval = setInterval(() => {
      const eventStartDate = new Date(startDate).getTime()
      const distance = eventStartDate - Date.now()
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      ).toString()
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTime(`${minutes.padStart(2, "0")}:${seconds}`)

      if (distance < 0) {
        setTime("00:00")
        clearInterval(interval)
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <NotificationItemCountdown>
      <WatchLaterOutlinedIcon fontSize="inherit" />
      {time}
    </NotificationItemCountdown>
  )
})

export { Countdown }
