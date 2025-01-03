import { BrowserRouter, Routes, Route } from 'react-router-dom'

import TestPage from '@pages/Test'
import HotelListPage from '@pages/HotelList'
import { useEffect } from 'react'
import { getHotels } from '@/remote/hotel'
import HotelPage from './pages/Hotel'

function App() {
  useEffect(() => {
    getHotels()
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HotelListPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/hotel/:id" element={<HotelPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
