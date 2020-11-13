import React, { useEffect, useState } from 'react'

const Event = ({ event, removeEvent, index }) => {
  const handleDelete = () => {
    removeEvent(index)
  }

  const countDown = () => {
    let difference = new Date(event.date) - new Date()
    let cd = { complete: true }
    if (difference > 0) {
      cd = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Mins: Math.floor((difference / 1000 / 60) % 60),
        Secs: Math.floor((difference / 1000) % 60),
        complete: false,
      }
    }
    return cd
  }

  const [countdown, setCountdown] = useState(countDown())

  useEffect(() => {
    const timer = setTimeout(() => {
      setCountdown(countDown())
    }, 1000)

    return () => clearTimeout(timer)
  })

  return (
    <div>
      <h3>{event.name}</h3>
      {countdown.complete ? (
        <p>Event Reached</p>
      ) : (
        <div className='countdown'>
          {Object.entries(countdown).map(([key, value]) => {
            if (key !== 'complete') {
              return (
                <div>
                  <h4>{key}</h4>
                  {value < 10 ? <p>0{value}</p> : <p>{value}</p>}
                </div>
              )
            } else {
              return <></>
            }
          })}
        </div>
      )}
      <button onClick={handleDelete}>
        <i className='fas fa-trash'></i>
      </button>
    </div>
  )
}

export default Event
