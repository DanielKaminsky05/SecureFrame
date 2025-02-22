import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './Pages/home.jsx'
import { Upload } from './Pages/upload.jsx'
import { Decrypt } from './Pages/decrypt.jsx'
import { Encrypt } from './Pages/encrypt.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/upload" element={<Upload/>}/>
        <Route path="/decrypt" element={<Decrypt/>}/>
        <Route paht="/encrypt" element={<Encrypt/>}/>
      </Routes>
    </Router>
  )
}

export default App
