import React from 'react'
import About from './components/About'
import Login from './components/Login'
import Signup from './components/Signup'
import { Routes,Route } from 'react-router-dom'
import Error from './components/Error'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Login/>} /> 
      <Route path="about" element={<About />} />
      <Route path="signup" element={<Signup/>} />
      <Route path="*" element={<Error/>} />
      </Routes>
      
      </div>
  )
}

export default App