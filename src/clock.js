import React from 'react'

function clock  () {
  return (
    <div>
       <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  )
}

export default clock
