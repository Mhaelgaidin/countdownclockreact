import './App.css'
import EventForm from './components/EventForm'
import EventList from './components/EventList'

function App() {
  return (
    <div className='App'>
      <div>
        <EventForm />
      </div>
      <div>
        <EventList />
      </div>
    </div>
  )
}

export default App
