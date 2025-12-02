import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getMealById } from "../api/mealsApi";
import { useFavorites } from "../context/FavContext";

export default function RecipeDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const { isFavorite, toggleFavorite } = useFavorites();

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await getMealById(id);
      setMeal(data);
      setLoading(false);
    })();
  }, [id]);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading recipe...</div>;
  if (!meal) return <div className="min-h-screen flex items-center justify-center">Recipe not found.</div>;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ing = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ing && ing.trim()) ingredients.push(`${ing} - ${measure || ""}`.trim());
  }

  const fav = isFavorite(meal.idMeal);

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <Link to="/" className="text-xs text-slate-600 hover:underline mb-4 inline-block">
          ← Back to recipes
        </Link>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-64 object-cover" />
          <div className="p-4 space-y-3">
            <div className="flex justify-between items-start gap-3">
              <div>
                <h1 className="text-xl font-semibold text-slate-900">{meal.strMeal}</h1>
                <p className="text-xs text-slate-500 mt-1">
                  {meal.strCategory} • {meal.strArea}
                </p>
              </div>
              <button
                className={`text-2xl ${fav ? "text-rose-500" : "text-slate-300"}`}
                onClick={() => toggleFavorite(meal)}
              >
                {fav ? "❤️" : "🤍"}
              </button>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-slate-800 mb-1">Ingredients</h2>
              <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                {ingredients.map((ing, idx) => (
                  <li key={idx}>{ing}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-slate-800 mb-1">Instructions</h2>
              <p className="text-sm text-slate-700 whitespace-pre-line">{meal.strInstructions}</p>
            </div>
            {meal.strYoutube && (
              <div>
                <h2 className="text-sm font-semibold text-slate-800 mb-1">Video</h2>
                <a href={meal.strYoutube} target="_blank" rel="noreferrer" className="text-sm text-blue-600 hover:underline">
                  Watch on YouTube →
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
