import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import HomepageComponent from './components/appComponents/HomepageComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path='/' element={<HomepageComponent />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>

  )
}

export default App
