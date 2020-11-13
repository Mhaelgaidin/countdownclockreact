import { useState, useEffect } from 'react'
import './App.css'
import EventForm from './components/EventForm'
import EventList from './components/EventList'

function App() {
  const [events, setEvents] = useState([])

  const setEvent = (e) => {
    setEvents([...events, e])
    updateLocal([...events, e])
  }

  const removeEvent = (index) => {
    let currentEvents = [...events]
    currentEvents.splice(index, 1)
    setEvents(currentEvents)
    updateLocal(currentEvents)
  }

  const updateLocal = (updatedEvents) => {
    localStorage.setItem('savedEvents', JSON.stringify(updatedEvents))
  }

  useEffect(() => {
    if (localStorage.getItem('savedEvents')) {
      let savedEvents = JSON.parse(localStorage.getItem('savedEvents'))
      setEvents([...savedEvents])
    }
  }, [setEvents])

  return (
    <div className='App'>
      <div>
        <EventForm setEvent={setEvent} />
      </div>
      <div>
        <EventList events={events} removeEvent={removeEvent} />
      </div>
    </div>
  )
}

export default App
