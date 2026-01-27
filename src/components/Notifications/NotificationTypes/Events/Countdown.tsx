import React, { useEffect, useState } from 'react'
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined'
import { NotificationItemCountdown } from '../../NotificationItem/NotificationItem.styled'

const Countdown = React.memo(({ startDate }: { startDate: string }) => {
  const [time, setTime] = useState<string>('--:--')

  useEffect(() => {
    const interval = setInterval(() => {
      const eventStartDate = new Date(startDate).getTime()
      const distance = eventStartDate - Date.now()

      if (distance <= 0) {
        setTime('00:00')
        clearInterval(interval)
        return
      }

      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString()
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)
        .toString()
        .padStart(2, '0')

      setTime(`${minutes.padStart(2, '0')}:${seconds}`)
    }, 1000)
    return () => clearInterval(interval)
  }, [startDate])

  return (
    <NotificationItemCountdown>
      <WatchLaterOutlinedIcon fontSize="inherit" />
      {time}
    </NotificationItemCountdown>
  )
})

export { Countdown }
