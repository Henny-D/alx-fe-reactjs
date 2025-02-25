import { Link } from 'react-router-dom';
import useRecipeStore from './RecipeStore';
import React from 'react';

const RecipeList = () => {
const recipes = useRecipeStore(state => state.recipes);

  return (
    <div className="container">
      <h1>Recipe List</h1>
      <Link to="/add" className="btn btn-primary">Add New Recipe</Link>
      <div className="recipe-list">
        {recipes.length === 0 ? (
          <p>No recipes available. Add one!</p>
        ) : (
          recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <Link to={`/recipe/${recipe.id}`} className="btn btn-secondary">View Details</Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RecipeList;
