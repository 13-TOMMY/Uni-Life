import React, { useState, createContext, useEffect } from 'react';

export const FavContext = createContext();

export default function FavContextProvider(props) {
  const [favorites, setFavorites] = useState([]);

  // Function to add a property to favorites
  const addToFavorites = (property) => {
    setFavorites((prevFavorites) => [...prevFavorites, property]);
  };

  // Function to remove a property from favorites
  const removeFromFavorites = (property) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.id !== property.id)
    );
  };

  useEffect(() => {
    // Load favorites from local storage if available
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    // Save favorites to local storage whenever the favorites state changes
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {props.children}
    </FavContext.Provider>
  );
}