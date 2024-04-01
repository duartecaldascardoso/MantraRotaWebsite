import './App.css'
import About from './pages/About'
import Contact from './pages/Contact'
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
