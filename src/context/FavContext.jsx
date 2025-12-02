import { createContext, useContext, useEffect, useState } from "react";

const FavContext = createContext();
const STORAGE_KEY = "recipe_favorites";

export default function FavProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setFavorites(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const isFavorite = (id) => favorites.some((m) => m.idMeal === id);

  const toggleFavorite = (meal) => {
    setFavorites((prev) =>
      prev.some((m) => m.idMeal === meal.idMeal)
        ? prev.filter((m) => m.idMeal !== meal.idMeal)
        : [...prev, meal]
    );
  };

  return (
    <FavContext.Provider value={{ favorites, isFavorite, toggleFavorite }}>
      {children}
    </FavContext.Provider>
  );
}

export const useFavorites = () => useContext(FavContext);
