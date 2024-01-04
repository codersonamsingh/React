import { useCallback, useState } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState
  (false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [Password, setPassword] = useState ("")
  const PasswordGenerator = useCallback(fn, [])
 

  return (
    <>
      <h1 className= 'test-4xl text-center text-white'>Password generator</h1>
    </>
  )
}

export default App
