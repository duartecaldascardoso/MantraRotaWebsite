import './App.css'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import { BrowserRouter, } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Contact />
      <About />
    </BrowserRouter>

  )
}

export default App
