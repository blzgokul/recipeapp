export default function Filters({
  categories = [],
  ingredients = [],
  selectedCategory,
  selectedIngredient,
  onCategoryChange,
  onIngredientChange,
}) {
  return (
    <div className="flex flex-wrap gap-3 items-end">
      <div>
        <label className="block text-xs text-slate-600 mb-1">Category</label>
        <select
          className="border border-slate-300 rounded-lg px-2 py-2 text-sm min-w-[160px]"
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option value="">All</option>
          {categories?.map((c) => (
            <option key={c.strCategory} value={c.strCategory}>
              {c.strCategory}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-xs text-slate-600 mb-1">Main Ingredient</label>
        <select
          className="border border-slate-300 rounded-lg px-2 py-2 text-sm min-w-[180px]"
          value={selectedIngredient}
          onChange={(e) => onIngredientChange(e.target.value)}
        >
          <option value="">All</option>
          {ingredients?.slice(0, 50).map((i) => (
            <option key={i.idIngredient} value={i.strIngredient}>
              {i.strIngredient}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
