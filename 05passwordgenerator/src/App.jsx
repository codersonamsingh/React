import { useCallback, useState } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState
  (false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [Password, setPassword] = useState ("")
  const PasswordGenerator = useCallback(() => {
    let pass = ""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*(){}[]"

    for (let i = 1; i <= Array.length; i++){
      let char = Math.floor(Math.random() * str.length +1)
      pass = str.charAt(char)
    }
    setPassword (pass)



  }
    , [length, numberAllowed, charAllowed, setPassword])
 

  return (
    <>
      
    </>
  )
}

export default App
