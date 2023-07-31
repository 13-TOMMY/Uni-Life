import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Homepage from './pages/Homepage/Homepage';
import SeeAllCitiesPage from './pages/SeeAllCitiesPage/SeeAllCitiesPage';
import CityDetailsPage from './pages/CityDetailsPage/CityDetailsPage';
import HomeDetailPage from './pages/HomeDetailPage/HomeDetailPage';
import './App.css';


function App() {
  return (
    <BrowserRouter> 
        <NavBar className="navbar-container"/>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/SeeAllCities' element={<SeeAllCitiesPage />} />
            <Route path='/citydetails/:cityid' element={<CityDetailsPage />} />
            <Route path='/homedetails/:homeid' element={<HomeDetailPage />} />
          </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
