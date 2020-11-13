import React from 'react'

const Event = () => {
  return (
    <div>
      <h3>Name</h3>
      <div class='countdown'>
        <div>
          <h4>Days</h4>
          <p>12</p>
        </div>
        <div>
          <h4>Hours</h4>
          <p>15</p>
        </div>
        <div>
          <h4>Mins</h4>
          <p>36</p>
        </div>
        <div>
          <h4>Secs</h4>
          <p>10</p>
        </div>
      </div>
      <button onclick='remove(${index})'>
        <i class='fas fa-trash'></i>
      </button>
    </div>
  )
}

export default Event
