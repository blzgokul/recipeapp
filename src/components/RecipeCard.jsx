import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavContext";

export default function RecipeCard({ meal }) {
  const { favorites, toggleFavorite } = useFavorites();
  const fav = favorites.some((favMeal) => favMeal.idMeal === meal.idMeal);

  return (
    <div className="relative">
      <Link
        to={`/meal/${meal.idMeal}`}
        className="block bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-slate-300"
      >
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="p-4">
          <h3 className="text-sm font-semibold text-slate-800 truncate">
            {meal.strMeal}
          </h3>
          <p className="text-xs text-slate-500 mt-1">{meal.strCategory}</p>
        </div>
      </Link>

      <button
        className={`absolute top-2 right-2 text-lg transition-transform duration-200 hover:scale-110 ${
          fav ? "text-rose-500" : "text-white drop-shadow"
        }`}
        onClick={(e) => {
          e.preventDefault(); // prevent Link click
          toggleFavorite(meal);
        }}
      >
        {fav ? "❤️" : "🤍"}
      </button>
    </div>
  );
}
