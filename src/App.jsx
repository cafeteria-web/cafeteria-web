import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Card from './components/Card'
import Footer from "./components/Footer"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Produtos from './pages/Produtos'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/produtos" element={<Card />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App