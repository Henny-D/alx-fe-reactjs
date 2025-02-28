
import { create } from 'zustand';

// Helper function to filter recipes based on search term and ingredients
const filterRecipes = (recipes, searchTerm, ingredientTerm) => {
  return recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (ingredientTerm === '' || recipe.ingredients?.some(ing =>
      ing.toLowerCase().includes(ingredientTerm.toLowerCase())
    ))
  );
};

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  ingredientTerm: '',
  filteredRecipes: [],
  favorites: [], // Array to store favorite recipe IDs
  recommendations: [], // Array to store recommended recipes

  // Add Recipe
  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, newRecipe],
  })),

  // Delete Recipe
  deleteRecipe: (recipeId) => set((state) => ({
    recipes: state.recipes.filter(recipe => recipe.id !== recipeId),
  })),

  // Update Recipe
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
  })),

  // Set Search Term and update filteredRecipes
  setSearchTerm: (term) => set((state) => {
    const newState = { searchTerm: term };
    // Only filter recipes if the term has changed
    return { ...newState, filteredRecipes: filterRecipes(state.recipes, term, state.ingredientTerm) };
  }),

  // Set Ingredient Filter Term and update filteredRecipes
  setIngredientTerm: (term) => set((state) => {
    const newState = { ingredientTerm: term };
    // Only filter recipes if the term has changed
    return { ...newState, filteredRecipes: filterRecipes(state.recipes, state.searchTerm, term) };
  }),

  // Filter Recipes based on Search Term and Ingredient
  filterRecipes: () => set((state) => {
    const filtered = filterRecipes(state.recipes, state.searchTerm, state.ingredientTerm);
    return { filteredRecipes: filtered };
  }),

  // Add a recipe to favorites
  addFavorite: (recipeId) => set((state) => ({
    favorites: [...state.favorites, recipeId]
  })),

  // Remove a recipe from favorites
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  // Generate personalized recommendations based on favorite recipes
  generateRecommendations: () => set((state) => {
    // Basic mock logic for recommendations based on favorites
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
}));

export default useRecipeStore;
