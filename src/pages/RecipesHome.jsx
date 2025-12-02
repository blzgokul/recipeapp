import { useEffect, useState } from "react";
import {
  searchMealsByName,
  filterMealsByCategory,
  filterMealsByIngredient,
  getCategories,
  getIngredients,
} from "../api/mealsApi";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import RecipeGrid from "../components/RecipeGrid";

export default function RecipesHome() {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedIngredient, setSelectedIngredient] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      const [cats, ings] = await Promise.all([getCategories(), getIngredients()]);
      setCategories(cats);
      setIngredients(ings);
    })();
  }, []);

  const loadMeals = async () => {
    try {
      setLoading(true);
      setError("");
      let baseMeals = [];
      if (selectedCategory) baseMeals = await filterMealsByCategory(selectedCategory);
      else if (selectedIngredient) baseMeals = await filterMealsByIngredient(selectedIngredient);
      else if (search) baseMeals = await searchMealsByName(search);
      else baseMeals = await searchMealsByName("all");
      let finalMeals = baseMeals;
      if (search)
        finalMeals = baseMeals.filter((m) =>
          m.strMeal.toLowerCase().includes(search.toLowerCase())
        );
      setMeals(finalMeals);
    } catch {
      setError("Failed to load recipes. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMeals();
  }, [search, selectedCategory, selectedIngredient]);

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SearchBar value={search} onChange={setSearch} />
          <Filters
            categories={categories}
            ingredients={ingredients}
            selectedCategory={selectedCategory}
            selectedIngredient={selectedIngredient}
            onCategoryChange={setSelectedCategory}
            onIngredientChange={setSelectedIngredient}
          />
        </div>
        {error && (
          <p className="mt-4 text-sm text-rose-600 bg-rose-50 border border-rose-100 rounded-lg px-3 py-2">
            {error}
          </p>
        )}
        {loading ? (
          <p className="mt-6 text-sm text-slate-600">Loading recipes...</p>
        ) : (
          <RecipeGrid meals={meals} />
        )}
      </div>
    </div>
  );
}
