import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Homepage from './pages/Homepage/Homepage';
import SeeAllCitiesPage from './pages/SeeAllCitiesPage/SeeAllCitiesPage';
import CityDetailsPage from './pages/CityDetailsPage/CityDetailsPage';
import HomeDetailPage from './pages/HomeDetailPage/HomeDetailPage';
import './App.css'
import Favorites from './pages/Favorites/Favorites';

function App() {
  return (
    <BrowserRouter>
     <NavBar />
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/SeeAllCities' element={<SeeAllCitiesPage/>} />
        <Route path='/CityDetails' element={<CityDetailsPage/>} />
        <Route path='/HomeDetailPage' element={<HomeDetailPage/>} />
        <Route path='/favorites' element={<Favorites/>} />
      </Routes>
     <Footer />
    </BrowserRouter>
  )
}

export default App
