import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div className="recipe-list">
      <h1>Recipe List</h1>
      {recipes.length === 0 && <p>No recipes added yet.</p>}
      <div className="recipe-container">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-card">
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipe/${recipe.id}`} className="view-btn">View Details</Link>
        </div>
      ))}
    </div>
    </div>
  );
};

export default RecipeList;

