import Dashboard from './pages/Dashboard.jsx'
import { Home } from './pages/Home.jsx'
import Layout from './pages/Layout.jsx'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ai" element= {<Layout />} />
        <Route index element= {<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
