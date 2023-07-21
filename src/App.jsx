import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Homepage from './pages/Homepage/Homepage';
import SeeAllCitiesPage from './pages/SeeAllCitiesPage/SeeAllCitiesPage';
import CityDetailsPage from './pages/CityDetailsPage/CityDetailsPage';
import HomeDetailPage from './pages/HomeDetailPage/HomeDetailPage';
import './App.css';
import Favorites from './pages/Favorites/Favorites';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/SeeAllCities' element={<SeeAllCitiesPage />} />
        {/* Update the route for CityDetailsPage */}
        <Route path='/citydetails/:cityid' element={<CityDetailsPage />} />
        {/* Add another route for CityDetailsPage with bedcount */}
        <Route path='/citydetails/:cityid/:bedcount' element={<CityDetailsPage />} />
        <Route path='/homedetails/:homeid' element={<HomeDetailPage />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
