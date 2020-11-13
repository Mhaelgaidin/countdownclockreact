import React from 'react'
import Event from './Event'

const EventList = ({ events, removeEvent }) => {
  return (
    <div id='eventList'>
      {events.map((event, index) => (
        <Event
          event={event}
          key={index}
          removeEvent={removeEvent}
          index={index}
        />
      ))}
    </div>
  )
}

export default EventList
