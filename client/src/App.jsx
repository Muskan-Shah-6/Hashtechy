import React, { useState } from 'react'
import './App.css'
import Login from './pages/auth/Login'
import Product from './pages/Product'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart'

function App() {

  const [cart, setCart] = useState([])
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/product" element={<Product cart={cart} setCart={setCart} />} />

      <Route path='/cart' element={<Cart cartItems={cart} setCartItems={setCart} />} />
    </Routes>

  )
}

export default App
