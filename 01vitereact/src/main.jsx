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

//const reactElement = {
  //type: 'a',
  //props: {
    //href: 'https://google.com',
    //target: 'blank'
  //},
  //children: 'Click to visit google'
//}
const anotherElement = (
  <a href="https://google.com" target='blank'>visit google</a>
)
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target:'blank'},
  'click me to visit google'
  
)




ReactDOM.createRoot(document.getElementById('root')).render(
  
    reactElement
  
)
