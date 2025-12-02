import { Routes, Route } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import RecipesHome from "./pages/RecipesHome";
import RecipeDetails from "./pages/RecipeDetails";
import FavoritesPage from "./pages/FavoritesPage";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <AppHeader />
      <Routes>
        <Route path="/" element={<RecipesHome />} />
        <Route path="/meal/:id" element={<RecipeDetails />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}
