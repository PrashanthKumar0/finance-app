import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Screens/HomePage'
import AboutPage from './Screens/AboutPage'
import Layout from './Layout'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        
        <Route location="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route location="/About" element={<AboutPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
