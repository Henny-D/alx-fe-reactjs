import React, { useMemo } from "react";
import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";

const FavoritesList = () => {
  const favoritesIds = useRecipeStore((state) => state.favorites);
  const recipes = useRecipeStore((state) => state.recipes);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  // Use useMemo to prevent infinite re-renders
  const favoriteRecipes = useMemo(() => {
    return favoritesIds.map((id) => recipes.find((recipe) => recipe.id === id)).filter(Boolean);
  }, [favoritesIds, recipes]);

  return (
    <div className="favorites-container">
      <h2>My Favorites ❤️</h2>
      {favoriteRecipes.length === 0 ? (
        <p>No favorites added yet.</p>
      ) : (
        <ul>
          {favoriteRecipes.map((recipe) => (
            <li key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
              <button
                className="btn btn-danger"
                onClick={() => removeFavorite(recipe.id)}
              >
                Remove ❌
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesList;
