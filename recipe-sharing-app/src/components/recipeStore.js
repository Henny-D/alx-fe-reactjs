
import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],

  // Add Recipe
  addRecipe: (newrecipe) => set((state) => ({
    recipes: [...state.recipes, newrecipe]
  })),

  // Delete Recipe
  deleteRecipe: (recipeId) => set((state) => ({
    recipes: state.recipes.filter(recipe => recipe.id !== recipeId)
  })),

  // Update Recipe
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map(recipe => 
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
  })),
}));

export default useRecipeStore;
