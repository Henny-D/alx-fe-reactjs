
import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  ingredientTerm: '',
  filteredRecipes: [],

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
}));

// Helper function to filter recipes based on search term and ingredients
const filterRecipes = (recipes, searchTerm, ingredientTerm) => {
  return recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (ingredientTerm === '' || recipe.ingredients?.some(ing =>
      ing.toLowerCase().includes(ingredientTerm.toLowerCase())
    ))
  );
};

export default useRecipeStore;
