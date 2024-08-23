import React from 'react'
import { userData } from './data'




const UserData = ({user}) => {
  return (
    <div>
        <h3>{userData.name}</h3>
        <h4>{userData.age}</h4>
      
    </div>
  )
}

export default UserData
