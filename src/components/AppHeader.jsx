import { Link } from "react-router-dom";

export default function AppHeader() {
  return (
    <header className="bg-slate-900 text-white px-4 py-3 flex items-center justify-between shadow">
      <Link to="/" className="font-semibold text-lg hover:text-slate-300 transition-colors">
        🍽️ Recipe Explorer
      </Link>

      <nav className="flex items-center gap-4">
        <Link to="/" className="text-sm hover:text-slate-300 transition-colors">
          Home
        </Link>
        <Link to="/favorites" className="text-sm hover:text-slate-300 transition-colors">
          Favorites ❤️
        </Link>
      </nav>

      <span className="text-xs text-slate-400">Powered by TheMealDB</span>
    </header>
  );
}
