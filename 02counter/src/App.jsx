import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCounter] = useState(15)

  //let Counter = 15
  const addValue = () => {
    console.log("Clicked",counter),
    counter = counter + 1

    setCounter(counter)
  }

  const removeValue = {} =>{
   setCounter{counter - 1}
  }
  return (
    <>
      <h1>React or vite</h1>
      <h2>Counter value: {counter }</h2>

      <button
      onClick={addValue}
      
      >Add value {counter} </button>
      <br />

      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>

    </>
  )
}

export default App
