import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Homepage from './pages/Homepage/Homepage';
import SeeAllCitiesPage from './pages/SeeAllCitiesPage/SeeAllCitiesPage';
import CityDetailsPage from './pages/CityDetailsPage/CityDetailsPage';
import HomeDetailPage from './pages/HomeDetailPage/HomeDetailPage';
import './App.css';
import Favorites from './pages/Favorites/Favorites';
import FavContextProvider from './contexts/FavContext';

function App() {
  return (
    <BrowserRouter>
      <FavContextProvider>
        <NavBar className="navbar-container"/>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/SeeAllCities' element={<SeeAllCitiesPage />} />
            <Route path='/citydetails/:cityid' element={<CityDetailsPage />} />
            <Route path='/homedetails/:homeid' element={<HomeDetailPage />} />
            <Route path='/favorites' element={<Favorites />} />
          </Routes>
        <Footer />
      </FavContextProvider>
    </BrowserRouter>
  );
}

export default App;
