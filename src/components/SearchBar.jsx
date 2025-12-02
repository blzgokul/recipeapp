export default function SearchBar({ value, onChange }) {
  return (
    <div className="w-full max-w-xl">
      <label className="block text-xs text-slate-600 mb-1">Search recipes by name</label>
      <input
        className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
        placeholder="e.g. Chicken, Pasta, Curry..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
