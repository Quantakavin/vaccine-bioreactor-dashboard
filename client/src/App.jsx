import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Temperature from './pages/Temperature';
import Ph from './pages/Ph';
import Stirring from './pages/Stirring';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Temperature />} />
        <Route path="/temperature" element={<Temperature />} />
        <Route path="/ph" element={<Ph />} />
        <Route path="/stirring" element={<Stirring />} />
      </Routes>
    </>
  )
}

export default App
