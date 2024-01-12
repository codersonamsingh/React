import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './useCurrencyInfo'

import './App.css'

function App() {
  const [amount,setAmount] = useState(0)
  const [from, setfrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmounnt, setConvertedConverted] = useState(0)

  const useCurrencyInfo = useCurrencyInfo(from)

  return (
    <>
      <h1 className='text-3xl bg-orange-500'> Currency app with react</h1>
      
    </>
  )
}

export default App
