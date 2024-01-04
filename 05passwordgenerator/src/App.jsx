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
    <div className= 'w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 '>
      <div className='className="flex shadow rounded-lg overflow-hidden mb-4 "'>
        <input
        type="text"
        value={Password}
        className="outline-none w-full py-1 p-3"
        placeholder="Password"
          />
      </div>
       </div>
      
    </>
  )
}

export default App
