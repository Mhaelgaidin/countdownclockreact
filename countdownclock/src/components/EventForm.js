import React, { useState } from 'react'

const EventForm = ({ setEvent }) => {
  const [validInput, setValidInput] = useState(true)

  const submitHandler = (e) => {
    e.preventDefault()
    let newEvent = {
      name: e.target.eventName.value,
      date: new Date(e.target.eventDate.value + ' ' + e.target.eventTime.value),
    }
    if (validDate(newEvent.date)) {
      setValidInput(true)
      setEvent(newEvent)
      e.target.reset()
    } else {
      setValidInput(false)
    }
  }

  const validDate = (newDate) => {
    let currentDate = new Date()
    if (newDate < currentDate) {
      return false
    }
    if (newDate <= currentDate && newDate.getTime() < currentDate.getTime()) {
      return false
    } else {
      return true
    }
  }

  return (
    <div>
      <form onSubmit={submitHandler} autoComplete='off'>
        <h2>New Event</h2>
        <div>
          <label htmlFor='eventName'> *Name:</label>
          <input
            type='text'
            name='eventName'
            id='eventName'
            placeholder='Enter an event name..'
            required
          />
        </div>
        <div>
          <label htmlFor='eventDate'>*Event Date:</label>
          <input type='date' name='eventDate' id='eventDate' required />
        </div>
        <div>
          <label htmlFor='eventTime'>Event Time:</label>
          <input type='time' name='eventTime' id='eventTime' />
        </div>
        {!validInput && (
          <p id='warning'>Please Select a Date/Time in the future</p>
        )}
        <button>
          <i className='fas fa-plus'></i>
        </button>
      </form>
    </div>
  )
}

export default EventForm
