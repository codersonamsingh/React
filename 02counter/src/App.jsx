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
  return (
    <>
      <h1>React or vite</h1>
      <h2>Counter value: {Counter }</h2>

      <button>Add value</button>
      <br />
      <button>decrease value</button>
      

    </>
  )
}

export default App
