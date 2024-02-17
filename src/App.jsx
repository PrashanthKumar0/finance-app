import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Screens/HomePage'
import AboutPage from './Screens/AboutPage'
import Layout from './Layout'
import ProductPage from './Screens/ProductPage'


function App() {


  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Products" element={<ProductPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App