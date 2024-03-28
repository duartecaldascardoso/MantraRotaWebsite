import './App.css'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      
      <Contact />
      <About />
      <Home />
    </BrowserRouter>

  )
}

export default App
