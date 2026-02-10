import React, { useEffect, useMemo, useState } from 'react'

const DateTime = () => {
  const dateFormatter = useMemo(() => {
    return new Intl.DateTimeFormat('en-GB', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
    })
  }, [])

  const timeFormatter = useMemo(() => {
    return new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })
  }, [])

  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const tick = () => setNow(new Date())
    const intervalId = setInterval(tick, 60 * 1000)
    return () => clearInterval(intervalId)
  }, [])

  const parts = dateFormatter.formatToParts(now)
  const weekday = parts.find((part) => part.type === 'weekday')?.value ?? ''
  const day = parts.find((part) => part.type === 'day')?.value ?? ''
  const month = parts.find((part) => part.type === 'month')?.value ?? ''
  const time = timeFormatter.format(now)
  const displayText = `${weekday} ${day} ${month} ${time}`.replace(/\s+/g, ' ').trim()

  return (
    <span style={{ whiteSpace: 'nowrap' }}>{displayText}</span>
  )
}

export default DateTime
