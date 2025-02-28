import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import React, { useEffect} from 'react';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const ingredientTerm = useRecipeStore((state) => state.ingredientTerm);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const setIngredientTerm = useRecipeStore((state) => state.setIngredientTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  useEffect(() => {
    filterRecipes(); // Automatically update when recipes, search term, or ingredient term change
  }, [recipes, searchTerm, ingredientTerm, filterRecipes]);

  return (
    <div className="container">
      <div className="filter-container">
        <h1>Recipe List</h1>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />

        {/* Ingredient Filter */}
        <div className="additional-filters">
          <label htmlFor="ingredients">Filter by Ingredients</label>
          <input
            type="text"
            id="ingredients"
            placeholder="Search by ingredient"
            value={ingredientTerm}
            onChange={(e) => setIngredientTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="recipe-list">
        {filteredRecipes.length === 0 ? (
          <p>No recipes found. Try a different search term!</p>
        ) : (
          filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <Link to={`/recipe/${recipe.id}`} className="btn btn-secondary">
                View Details
              </Link>

              {/* Favorite Button */}
              {favorites.includes(recipe.id) ? (
                <button
                  className="btn btn-danger"
                  onClick={() => removeFavorite(recipe.id)}
                >
                  Remove from Favorites ❤️
                </button>
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={() => addFavorite(recipe.id)}
                >
                  Add to Favorites 💙
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};


export default RecipeList;
