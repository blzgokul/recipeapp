import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavContext";
import RecipeCard from "../components/RecipeCard";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold text-slate-800">❤️ My Favorite Recipes</h1>
          <Link to="/" className="text-sm text-blue-600 hover:underline">
            ← Back to home
          </Link>
        </div>

        {favorites.length === 0 ? (
          <p className="text-slate-600 text-sm">
            You haven’t added any favorites yet. Click the ❤️ on a recipe to save it!
          </p>
        ) : (
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {favorites.map((meal) => (
              <RecipeCard key={meal.idMeal} meal={meal} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
