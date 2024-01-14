import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

import './App.css'

function App() {
  const [amount,setAmount] = useState(0)
  const [from, setfrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmounnt, setConvertedConverted] = useState(0)

  const useCurrencyInfo = useCurrencyInfo(from)

  const options = Objects.keys(currencyInfo)

  const swap = () => {
    setfrom (to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmounnt)
  }

 const convert = () => {
   setConvertedAmount(amount * currencyInfo[to])
 }


 return (
  <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
          backgroundImage: `url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2F
          search%2Fbeautiful%2F&psig=AOvVaw0QRa3DGO-UBC-MMvcfm3ah&ust=1705233030401000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNjrvp-m2oMDFQAAAAAdAAAAABAD')`,
      }}
  >
      <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                  onSubmit={(e) => {
                      e.preventDefault();
                      convert()
                     
                  }}
              >
                  <div className="w-full mb-1">
                      <InputBox
                          label="From"
                          amount={amount}
                          currencyOptions={options}
                          onCurrencyChange={(currency) => setAmount(amount)}
                
                          selectCurrency={from}
                          onAmountChange={(amount) => setAmount (amount)}
                          
                      />
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          onClick={swap}
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputBox
                          label="To"
                          amount={convertedAmounnt}
                          currencyOptions={options}
                          onCurrencyChange={(currency) => setTo(currency)}

                          selectCurrency={from}
                          amountDisable
                      />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      Convert {from.toUpperCase()} to {to.toUpperCase}
                  </button>
              </form>
          </div>
      </div>
  </div>
);
}

export default App
