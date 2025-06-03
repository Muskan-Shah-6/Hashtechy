import React from 'react' 
import './App.css'
import Login from './pages/auth/Login'
import Categories from './pages/Categories'
import { Route, Routes } from 'react-router-dom'

function App() { 

  return (
    <Routes>
        <Route path="/" element={<Login /> } />
        <Route path="/categories" element={<Categories /> } />
        
    </Routes> 

  )
}

export default App
