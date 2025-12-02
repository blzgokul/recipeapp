import RecipeCard from "./RecipeCard";

export default function RecipeGrid({ meals }) {
  if (!meals || meals.length === 0) {
    return <p className="text-sm text-slate-500 mt-6">No recipes found. Try a different search or filter.</p>;
  }

  return (
    <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {meals.map((meal) => (
        <RecipeCard key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
}
