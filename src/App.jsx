import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './components/products/Products'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Pizza from './components/pizza/Pizza'
import Restaurant from './components/restaurant/Restaurant'
import Potato from './components/potato/Potato'

import { Route,Routes } from 'react-router-dom'
import Chickpea from './components/chickpea/Chickpea'
import Home from './components/home/Home'
function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/Products" element={<Products />} />
    <Route path="/Pizza" element={<Pizza/>} />
    <Route path="/Restaurant" element={<Restaurant/>} />
    <Route path="/Potato" element={<Potato/>} />
    <Route path="/Chickpea" element={<Chickpea/>} />
    <Route path="/" element={<Home/>} />


    </Routes>
    <Footer/>
    </>
  )
}

export default App
