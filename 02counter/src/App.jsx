import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React or vite</h1>
      <h2>Counter valu: 5</h2>

      <button>Add value</button>
      <button>decrease value</button>
      

    </>
  )
}

export default App
