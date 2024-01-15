
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/header'
import Footer from './components/Footer/Footer'
import 


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Footer />
      <Home />
    </>
  )
}
import Home from './Home/Home'

export default App
