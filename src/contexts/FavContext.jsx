import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const FavContext = createContext();

const FavContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [hasFavorites, setHasFavorites] = useState(false); 

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
    if (storedFavorites && JSON.parse(storedFavorites).length > 0) {
      setHasFavorites(true);
    } else {
      setHasFavorites(false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));

    // Update hasFavorites state whenever favorites state changes
    if (favorites.length > 0) {
      setHasFavorites(true);
    } else {
      setHasFavorites(false);
    }
  }, [favorites]);

  const addToFavorites = (property) => {
    const isPropertyInFavorites = favorites.find((fav) => fav._id === property._id) !== undefined;
    if (isPropertyInFavorites) {
      setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav._id !== property._id));
    } else {
      setFavorites((prevFavorites) => [...prevFavorites, property]);
    }
  };

  const removeFromFavorites = (propertyId) => {
    setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav._id !== propertyId));
  };

  const navigate = useNavigate();

  const viewFromFavorites = (propertyId) => {
    navigate(`/homedetails/${propertyId}`);
  }

  return (
    <FavContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, viewFromFavorites, hasFavorites }}>
      {children}
    </FavContext.Provider>
  );
};

export default FavContextProvider;