import React from 'react'

const EventForm = () => {
  return (
    <div>
      <form action='' id='newEvent' autocomplete='off'>
        <h2>New Event</h2>
        <div>
          <label for='eventName'> *Name:</label>
          <input
            type='text'
            name='eventName'
            id='eventName'
            placeholder='Enter an event name..'
            required
          />
        </div>
        <div>
          <label for='eventDate'>*Event Date:</label>
          <input type='date' name='eventDate' id='eventDate' required />
        </div>
        <div>
          <label for='eventTime'>Event Time:</label>
          <input type='time' name='eventTime' id='eventTime' />
        </div>
        <p class='hidden' id='warning'>
          Please Select a Date/Time in the future
        </p>
        <button>
          <i class='fas fa-plus'></i>
        </button>
      </form>
    </div>
  )
}

export default EventForm
