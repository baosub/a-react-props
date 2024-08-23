import React from 'react'

const PassingObject = ({user}) => {
  return (
    <div>
         <h1>{user.name}</h1>
         <p>Edad: {user.age}</p>
      
    </div>
  )
}

export default PassingObject
