import React from 'react'
import Greeting from './components-props/Greeting'
import PassingObject from './components-props/PassingObject';
import UserData from './components-props/UserData';
import { userData } from './components-props/data';


const user = {
  name: "Juan",
  age: 30
};


const App = () => {
  return (
    <div>
      app
      <Greeting data='everyone!'/>
      <PassingObject user={user}/>
      <UserData user={userData}/>
    </div>
  )
}

export default App
