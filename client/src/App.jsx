import React from 'react' 
import './App.css'
import Login from './pages/auth/Login'
import Product from './pages/Product'
import { Route, Routes } from 'react-router-dom'

function App() { 

  return (
    <Routes>
        <Route path="/" element={<Login /> } />
        <Route path="/product" element={<Product /> } />
        
    </Routes> 

  )
}

export default App
