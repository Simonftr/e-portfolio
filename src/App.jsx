import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Home from './Models/Home'
import Navbar from "./Models/Navbar"
import About from "./Models/About"

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
