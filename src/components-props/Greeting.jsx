import React from 'react'
//destructuring props
const Greeting = ({data}) => {
  return (
    <div>
        <h2>Hello, {data}</h2>
      
    </div>
  )
}

export default Greeting
