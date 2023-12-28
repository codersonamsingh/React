import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom App | react</h1>
    </div>
  )
}

const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: 'blank'
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App />
  
)
