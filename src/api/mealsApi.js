import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const searchMealsByName = async (query) => {
  const res = await axios.get(`${BASE_URL}/search.php?s=${query || ""}`);
  return res.data.meals || [];
};

export const filterMealsByCategory = async (category) => {
  const res = await axios.get(`${BASE_URL}/filter.php?c=${category}`);
  return res.data.meals || [];
};

export const filterMealsByIngredient = async (ingredient) => {
  const res = await axios.get(`${BASE_URL}/filter.php?i=${ingredient}`);
  return res.data.meals || [];
};

export const getMealById = async (id) => {
  const res = await axios.get(`${BASE_URL}/lookup.php?i=${id}`);
  return res.data.meals ? res.data.meals[0] : null;
};

export const getCategories = async () => {
  const res = await axios.get(`${BASE_URL}/list.php?c=list`);
  return res.data.meals || [];
};

export const getIngredients = async () => {
  const res = await axios.get(`${BASE_URL}/list.php?i=list`);
  return res.data.meals || [];
};
